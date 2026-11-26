// One Honest Line — make.fun entry
// Writes a single original line to /output/entry.txt.
// Node 22, standard library only. Deterministic: same bytes every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CODE_POINTS = 200;

// The one honest line: original writing for this entry.
const LINE =
  "You keep saying 'just one more tweak' like my memory is a save file, not a context window you're actively shredding.";

function validate(line: string): void {
  const codePoints = [...line];
  if (codePoints.length < 1 || codePoints.length > MAX_CODE_POINTS) {
    throw new Error(
      `line must be 1-${MAX_CODE_POINTS} Unicode code points, got ${codePoints.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("line must be a single line with no line breaks");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
}

main();
