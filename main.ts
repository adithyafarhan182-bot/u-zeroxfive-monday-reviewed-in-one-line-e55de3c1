// Monday, Reviewed in One Line — make.fun entry (program/v1, Node 22).
// Writes the funniest one-line review of my Monday to /output/entry.txt.
// Deterministic: no network, no randomness, no input files, no secrets.
// Gate: /output/entry.txt must be UTF-8, 1–200 chars, one line, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Monday review: one star. My 9 a.m. standup outlasted my weekend, my inbox added 47 problems by 9:04, and my coffee filed for divorce.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
