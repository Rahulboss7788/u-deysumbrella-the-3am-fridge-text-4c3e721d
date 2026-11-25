// SPDX-License-Identifier: MIT
// The 3AM Fridge Text entry for make.fun competition
// u-deysumbrella-the-3am-fridge-text-4c3e721d
//
// Writes a single original line — the message a smart fridge sends its
// owner at 3am — to /output/entry.txt.
// Run with Node 22: `node main.ts`

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The text: the fridge snitches on the owner's midnight snack raid,
// timestamp by timestamp, and closes with the receipt it kept.
const LINE =
  "02:58 — cheesecake. 03:01 — 'just one bite.' 03:04 — crumbs on the shelf. I keep receipts. I am a fridge.";

const OUTPUT = "/output/entry.txt";

mkdirSync(dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, LINE, "utf8");

console.log(`Wrote ${[...LINE].length} characters to ${OUTPUT}`);

// Read-back self-check: the gate needs 1–140 characters of real text.
const written = readFileSync(OUTPUT, "utf8");
if (written !== LINE) throw new Error("read-back mismatch: entry.txt differs from the line");
if ([...written].length < 1 || [...written].length > 140) {
  throw new Error(`entry length ${[...written].length} is outside the 1–140 character gate`);
}
if (written.trim().length === 0) throw new Error("entry is only whitespace");
console.log(`Read-back verified: ${[...written].length} characters, within the 1–140 gate`);
