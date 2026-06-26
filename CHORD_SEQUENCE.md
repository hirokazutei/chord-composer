# Chord Sequence Feature

Design document for parsing a series of chord symbols and generating a row of chord diagram images for export.

---

## Overview

The user types a sequence of chord symbols in standard notation (e.g. `Am7 Dm7 G7 Cmaj7`), the app parses each token into its internal key + chord-type codes, renders every diagram using the existing p5.js sketch engine, stitches the canvases into one wide image, and offers a PNG download.

---

## Input Format

Chord symbols are whitespace-separated tokens on one or more lines. Bar lines (`|`) are optional and ignored. Examples:

```
Am7 Dm7 G7 Cmaj7
| Cmaj7 | Am7 | Dm7 | G7 |
Bm7b5 E7 Am
```

### Root note tokens

| Written | Internal key |
|---------|-------------|
| `C`     | `c`  |
| `C#` / `Db` | `cd` |
| `D`     | `d`  |
| `D#` / `Eb` | `de` |
| `E`     | `e`  |
| `F`     | `f`  |
| `F#` / `Gb` | `fg` |
| `G`     | `g`  |
| `G#` / `Ab` | `ga` |
| `A`     | `a`  |
| `A#` / `Bb` | `ab` |
| `B`     | `b`  |

Both `#` and `b` are case-sensitive on the accidental. The root letter itself is case-insensitive.

### Quality suffixes → internal chord codes

The suffix is everything after the root note (and optional accidental).

| Written suffix (case-insensitive) | Internal chord |
|---|---|
| _(nothing)_, `maj`, `M` | `maj` |
| `m`, `min`, `-` | `min` |
| `dim`, `°` | `dim` |
| `7` | `sev` |
| `m7`, `min7`, `-7` | `m7` |
| `maj7`, `M7`, `△7`, `Δ7` | `maj7` |
| `sus4`, `sus` | `sus4` |
| `sus2` | `sus2` |
| `6`, `maj6` | `six` |
| `9` | `dom9` |
| `aug`, `+` | `aug` |
| `add9`, `add2`, `(9)` | `add9` |
| `7sus4`, `7sus` | `sus4b` |
| `m9`, `min9`, `-9` | `m9` |
| `maj9`, `M9`, `△9`, `Δ9` | `maj9` |

Anything not in this table is an **unrecognised quality** and is reported as a parse error for that token (the remaining tokens still render).

### Voicing selection

Each token may optionally include a voicing index suffix in square brackets:

```
Am7[1] Dm7 G7[2] Cmaj7
```

`[1]` means use the second voicing (zero-indexed, same as the app's `currentVoicingIndex`). If omitted, the first voicing (index `0`) is used.

---

## Parsing Algorithm

```
function parseChordSequence(text: string): ParseResult[]
```

1. Strip `|` characters, split on whitespace, filter empty tokens.
2. For each token:
   a. Match the leading root with regex `^([A-Ga-g])(#|b)?`
   b. Extract the optional `[\d+]` suffix at the end; parse as voicing index.
   c. The remainder between root and bracket is the quality suffix.
   d. Look up root → key code (table above).
   e. Look up suffix → chord code (table above).
   f. Call `getVoicings(key, chord)` to confirm the combination exists; if it returns `null`, mark as error.
3. Return `Array<{ key: string; chord: string; voicingIndex: number; raw: string } | { error: string; raw: string }>`.

---

## Rendering

Each parsed chord is rendered independently using the same logic the main p5.js sketch uses. The implementation approach:

### Option A — Offscreen p5 graphics (recommended)

p5.js provides `createGraphics(w, h)` which returns an off-screen buffer that supports the same drawing API as the main canvas. The sketch's drawing function is factored so it accepts a graphics target instead of always writing to `this`:

```ts
function drawChordDiagram(
  pg: p5.Graphics,
  chordNotes: ChordNote[],
  chordNames: ChordName[],
  settings: Settings
): void
```

Steps:
1. For each parsed chord, compute `chordNotes` and `chordNames` the same way the reducer does.
2. Call `drawChordDiagram(pg, ...)` into a fresh offscreen buffer.
3. After all diagrams are drawn, create one final canvas wide enough to hold them side-by-side (plus padding).
4. Copy each buffer onto the final canvas using `image(pg, x, 0)`.
5. Call `canvas.elt.toDataURL('image/png')` and trigger a download.

### Option B — Sequential DOM render

Render one chord at a time by temporarily updating the Redux state and capturing the canvas via `toDataURL` after each render cycle. Simpler to wire up but requires one React render cycle per chord, which is slow and fragile.

**Option A is preferred** — it is synchronous, doesn't touch global state, and doesn't depend on render timing.

### Canvas dimensions

Single diagram: same as the current app canvas (width ~520px, height ~680px based on `DESIGN_WIDTH` / `DESIGN_HEIGHT` constants).

Strip output: `width = diagramWidth * count + gap * (count - 1)`, `height = diagramHeight`. A gap of 16px between diagrams looks clean.

---

## UI

### Input area

A new panel (tab or modal) with:
- A `<textarea>` for chord input, placeholder `Am7 Dm7 G7 Cmaj7`
- A **Generate** button
- Inline error display: unknown tokens highlighted in red with a tooltip showing what went wrong

### Preview

Below the input, a scrollable horizontal strip shows thumbnail previews of each generated diagram. Each thumbnail is ~160px wide so a sequence of 8 chords fits without horizontal scroll on a 1110px canvas.

### Export

- **Download all** — stitches all diagrams into a single wide PNG and triggers a browser download named `chord-sequence.png`.
- **Download individually** — triggers one download per chord, named `{root}{suffix}.png` (e.g. `Am7.png`).

Individual download is useful when the user wants to paste diagrams into slides one at a time.

---

## File Structure

```
src/
  constants/
    chordParser.ts        # parseChordSequence(), suffix/root lookup tables
  components/
    ChordSequence/
      index.tsx           # top-level panel (textarea + controls)
      Preview.tsx         # scrollable thumbnail strip
      export.ts           # stitching and download logic
  components/Body/P5Wrapper/sketch/
    drawChordDiagram.ts   # extracted drawing function that accepts a p5.Graphics target
```

`drawChordDiagram.ts` is a refactor of the existing sketch, not new logic. The existing `sketch.ts` becomes a thin wrapper that calls it with the main canvas as the target.

---

## Error Handling

| Situation | Behaviour |
|---|---|
| Unknown root (e.g. `H7`) | Token shown in red, skipped in output |
| Unknown quality (e.g. `Cm7b5`) | Token shown in red, skipped |
| Valid key but no voicing for that chord type | Token shown in yellow (rare; only `dim` has no voicing currently) |
| Voicing index out of range | Clamps to last available voicing |
| Empty input | Generate button disabled |

---

## Limitations and Future Scope

- **Slash chords** (`G/B`) are not parsed — the bass note after `/` is silently ignored and the chord renders as if no slash were present.
- **Ukulele sequences** — the feature uses the app's current instrument setting. If the user is in ukulele mode, diagrams render for ukulele.
- **Rhythm / duration** — not captured; this feature is purely about voicing diagrams, not rhythm notation.
- **Per-chord instrument override** — not supported in v1. All chords in a sequence use the same instrument.
