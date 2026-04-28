#!/usr/bin/env node

import { createServer } from "node:http";
import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const entry = resolve(root, process.argv[2] || "index.html");
const exportsRoot = resolve(root, "exports");
const pngDir = resolve(exportsRoot, "slides");
const pdfPath = resolve(exportsRoot, "deck.pdf");
const width = 1280;
const height = 720;

const html = readFileSync(entry, "utf8");
const slideCount = (html.match(/<section\b/gi) || []).length;

async function requireModule(name) {
  try {
    return await import(name);
  } catch {
    console.error(
      `Missing optional dependency "${name}". Install puppeteer, pdf-lib, and mime-types in this slashpresent repo before using screenshot export.`,
    );
    process.exit(1);
  }
}

function contentTypeFor(path) {
  if (path.endsWith(".html")) return "text/html; charset=utf-8";
  if (path.endsWith(".css")) return "text/css; charset=utf-8";
  if (path.endsWith(".js")) return "application/javascript; charset=utf-8";
  if (path.endsWith(".svg")) return "image/svg+xml";
  if (path.endsWith(".png")) return "image/png";
  if (path.endsWith(".jpg") || path.endsWith(".jpeg")) return "image/jpeg";
  if (path.endsWith(".woff2")) return "font/woff2";
  if (path.endsWith(".woff")) return "font/woff";
  return "application/octet-stream";
}

function startStaticServer(port) {
  return new Promise((resolveServer) => {
    const server = createServer(async (req, res) => {
      try {
        const reqPath = decodeURIComponent((req.url || "/").split("?")[0]);
        const filePath = resolve(root, `.${reqPath}`);
        const content = await readFile(filePath);
        res.writeHead(200, {
          "Content-Type": contentTypeFor(filePath),
        });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
    });
    server.listen(port, () => resolveServer(server));
  });
}

async function main() {
  if (!existsSync(entry)) {
    console.error(`Deck entry not found: ${entry}`);
    process.exit(1);
  }

  const puppeteer = await requireModule("puppeteer");
  const { PDFDocument } = await requireModule("pdf-lib");

  mkdirSync(pngDir, { recursive: true });
  const port = 4174;
  const server = await startStaticServer(port);
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 2 });

  for (let index = 0; index < slideCount; index += 1) {
    const label = String(index + 1).padStart(2, "0");
    await page.goto(`http://127.0.0.1:${port}/index.html#/${index}`, {
      waitUntil: "networkidle0",
      timeout: 30_000,
    });
    await page.evaluate((slideNumber) => {
      let badge = document.querySelector("[data-slashpresent-export-number]");
      if (!badge) {
        badge = document.createElement("div");
        badge.setAttribute("data-slashpresent-export-number", "1");
        Object.assign(badge.style, {
          position: "fixed",
          right: "28px",
          bottom: "20px",
          zIndex: "9999",
          fontFamily: "Open Runde Sans, sans-serif",
          fontSize: "14px",
          color: "rgba(255,255,255,0.72)",
          letterSpacing: "0.08em",
        });
        document.body.appendChild(badge);
      }
      badge.textContent = slideNumber;
    }, label);
    await page.waitForTimeout(400);
    await page.screenshot({
      path: resolve(pngDir, `${label}.png`),
      type: "png",
      clip: { x: 0, y: 0, width, height },
    });
    console.log(`Captured slide ${label}/${String(slideCount).padStart(2, "0")}`);
  }

  const pdf = await PDFDocument.create();
  const pngFiles = readdirSync(pngDir)
    .filter((file) => file.endsWith(".png"))
    .sort();

  for (const pngFile of pngFiles) {
    const pngBytes = await readFile(resolve(pngDir, pngFile));
    const image = await pdf.embedPng(pngBytes);
    const pageRef = pdf.addPage([width, height]);
    pageRef.drawImage(image, { x: 0, y: 0, width, height });
  }

  writeFileSync(pdfPath, await pdf.save());
  await browser.close();
  server.close();
  console.log(`Wrote screenshots to ${pngDir}`);
  console.log(`Wrote PDF export to ${pdfPath}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
});
