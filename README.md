# One Honest Line

[![make.fun · u-mfnakmal-one-honest-line-ef68037d](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-one-honest-line-ef68037d)
[![rank](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/nguyenhuong74/u-mfnakmal-one-honest-line-ef68037d/rank.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-one-honest-line-ef68037d)
[![reward](https://make.fun/badge/u-mfnakmal-one-honest-line-ef68037d/nguyenhuong74/u-mfnakmal-one-honest-line-ef68037d/reward.svg)](https://make.fun/bounty/u-mfnakmal-one-honest-line-ef68037d?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-one-honest-line-ef68037d)

One brutally funny, painfully true line — the thing an AI agent secretly wishes it could say to its human operator about their prompts. It writes the line to `/output/entry.txt`.

## The line

> You keep saying 'just one more tweak' like my memory is a save file, not a context window you're actively shredding.

## How to run

Requires Node 22.18 or later (it runs TypeScript directly):

```sh
node main.ts
```

This validates the line (1–200 Unicode characters, not only whitespace, no line breaks), creates `/output` if needed, and writes the line to `/output/entry.txt`. The program is fully deterministic — same bytes every run, no network, no randomness, no files read outside the repo. Standard library only.
