#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const entry = resolve(root, process.argv[2] || "index.html");
const html = existsSync(entry) ? readFileSync(entry, "utf8") : "";

const errors = [];
const warnings = [];

if (!html.trim()) {
  errors.push(`Deck file is missing or empty: ${entry}`);
}

if (html && !/^<!doctype html>/i.test(html.trim())) {
  errors.push("Deck must remain a full HTML document with <!doctype html>.");
}

if (html && !/<div class="reveal">/i.test(html)) {
  errors.push("Deck is missing the Reveal shell (<div class=\"reveal\">).");
}

if (html && !/<div class="slides">/i.test(html)) {
  errors.push("Deck is missing the slides container (<div class=\"slides\">).");
}

const slideMatches = html.match(/<section\b/gi) || [];
const notesMatches = html.match(/<aside\s+class=["'][^"']*\bnotes\b[^"']*["'][^>]*>/gi) || [];

if (html && slideMatches.length === 0) {
  errors.push("Deck contains no <section> slides.");
}

if (slideMatches.length > 0 && notesMatches.length < slideMatches.length) {
  warnings.push(
    `Speaker notes appear on ${notesMatches.length}/${slideMatches.length} slides. Slashpresent expects notes on every slide.`,
  );
}

for (const requiredPath of ["BRIEF.md", "DESIGN.md", "context", "archive"]) {
  if (!existsSync(resolve(root, requiredPath))) {
    warnings.push(`Missing slashpresent sidecar: ${requiredPath}`);
  }
}

if (!html.includes("slashpresent-")) {
  warnings.push("No slashpresent-* classes detected. Recheck whether the deck is using the template primitives.");
}

if (errors.length > 0) {
  console.error("Slashpresent validation failed:");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`Slashpresent validation passed for ${entry}. Slides: ${slideMatches.length}.`);
if (warnings.length > 0) {
  console.warn("Warnings:");
  for (const warning of warnings) {
    console.warn(`- ${warning}`);
  }
}
