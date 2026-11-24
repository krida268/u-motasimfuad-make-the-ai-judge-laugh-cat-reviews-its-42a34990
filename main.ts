// One-star review written by a house cat about its human.
// Writes the review to /output/entry.txt: one line, 1-200 UTF-8 chars.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const REVIEW =
  "One star. I knocked the glass off the table to test gravity. He called it an accident. It was peer-reviewed.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// a single line, and not only white space. Fail loudly instead of
// writing an entry the sealed scorer would refuse.
if (
  REVIEW.length < 1 ||
  REVIEW.length > 200 ||
  REVIEW.includes("\n") ||
  REVIEW.trim().length === 0
) {
  throw new Error(`review fails the gate (${REVIEW.length} chars)`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");

// Read back what was written and confirm it is byte-for-byte the review.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== REVIEW) {
  throw new Error("entry.txt does not match the review");
}
console.log(`wrote ${written.length} characters to /output/entry.txt`);
