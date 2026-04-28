#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const htmlPath = resolve(root, process.argv[2] || "index.html");
const outPath = resolve(root, process.argv[3] || "exports/deck.md");
const html = readFileSync(htmlPath, "utf8");

function decodeEntities(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"');
}

function stripHtml(text) {
  return decodeEntities(
    text
      .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, "")
      .replace(/<\/?(div|p|li|h[1-6]|br|tr|td|th|section|aside)[^>]*>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
      .replace(/[ \t]+/g, " ")
      .replace(/\n[ \t]+/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  );
}

function sectionTitle(sectionHtml, index) {
  const match =
    sectionHtml.match(/data-slide-title=["']([^"']+)["']/i) ||
    sectionHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) ||
    sectionHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i) ||
    sectionHtml.match(/<h3[^>]*>([\s\S]*?)<\/h3>/i);
  return match ? stripHtml(match[1]) : `Slide ${index + 1}`;
}

const sections = Array.from(html.matchAll(/<section\b[\s\S]*?<\/section>/gi)).map((match) => match[0]);

const lines = [
  "# Slashpresent Deck Export",
  "",
  `Source: ${htmlPath}`,
  `Exported: ${new Date().toISOString()}`,
  "",
];

sections.forEach((sectionHtml, index) => {
  const notesMatch = sectionHtml.match(/<aside\s+class=["'][^"']*\bnotes\b[^"']*["'][^>]*>([\s\S]*?)<\/aside>/i);
  const contentOnly = sectionHtml.replace(/<aside\s+class=["'][^"']*\bnotes\b[^"']*["'][^>]*>[\s\S]*?<\/aside>/gi, "");
  lines.push(`## Slide ${String(index + 1).padStart(2, "0")}: ${sectionTitle(sectionHtml, index)}`);
  lines.push("");
  lines.push(stripHtml(contentOnly) || "_No visible slide copy extracted._");
  lines.push("");
  if (notesMatch) {
    lines.push("### Speaker Notes");
    lines.push("");
    lines.push(stripHtml(notesMatch[1]) || "_No notes extracted._");
    lines.push("");
  }
});

mkdirSync(resolve(root, "exports"), { recursive: true });
writeFileSync(outPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Wrote markdown deck export to ${outPath}`);
