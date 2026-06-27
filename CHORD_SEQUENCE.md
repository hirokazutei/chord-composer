# Chord Sequence Feature

Design document for parsing a series of chord symbols and generating a row of chord diagram images for export.

---

## Overview

Two input modes are supported. Both produce the same output: a strip of chord diagram images that can be saved as PNG.

- **Symbol mode** — standard chord names (`Am7 Dm7 G7 Cmaj7`). Fast to type; uses the app's built-in voicing library.
- **Note mode** — explicit note placement per string (`E2:0, B2:1, G#3:3`). Full control over every finger; the app computes frets from the note names.

The two modes cannot be mixed within a single sequence. The parser auto-detects which mode is in use based on whether the first chord token contains `:`.

---

## Mode 1 — Symbol Input

### Format

Chord symbols are whitespace-separated tokens on one or more lines. Bar lines (`|`) are optional and ignored.

```
Am7 Dm7 G7 Cmaj7
| Cmaj7 | Am7 | Dm7 | G7 |
```

Each token maps to the app's internal `key` + `chord` codes via the tables below.

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

Root letter is case-insensitive; accidental (`#` / `b`) is case-sensitive.

### Quality suffixes

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

### Voicing selection

Append `[n]` (zero-indexed) to request a specific voicing shape:

```
Am7[1] Dm7 G7[2] Cmaj7
```

If omitted, voicing index `0` is used.

---

## Mode 2 — Note Input

### Concept

Each chord is described as a comma-separated list of **note placements**. Each placement states: which note (pitch class + octave) should sound on which guitar string. The app computes the required fret automatically.

```
E2:0, B2:1, E3:2, G#3:3, B3:4, E4:5
```

This describes an open E major chord: E on string 0 at fret 0, B on string 1 at fret 2, etc.

### Syntax

```
<NoteName><Octave>:<StringNumber>
```

- **NoteName** — pitch letter (`A`–`G`), optionally followed by `#` or `b`. Case-insensitive.
- **Octave** — integer (2–6 for guitar range).
- **StringNumber** — `0`–`5` for guitar (0 = low E), `0`–`3` for ukulele.

Notes within one chord are comma-separated. Chords in a sequence are separated by a **semicolon** or a **newline**:

```
E2:0, B2:1, E3:2, G#3:3, B3:4, E4:5
A2:1, E3:2, A3:3, C#4:4, E4:5
D3:2, A3:3, D4:4, F#4:5
```

Strings not mentioned are muted (not shown on the diagram).

### Fret computation

Guitar open string pitches (in MIDI):

| String | Note | MIDI |
|--------|------|------|
| 0 | E2 | 40 |
| 1 | A2 | 45 |
| 2 | D3 | 50 |
| 3 | G3 | 55 |
| 4 | B3 | 59 |
| 5 | E4 | 64 |

```
fret = midi(NoteName + Octave) - openMidi(StringNumber)
```

If `fret < 0`, the note cannot be played on that string — reported as a placement error. If `fret === 0`, the string is played open.

**Example:** `C4:2` → C4 = MIDI 60, D3 open = MIDI 50 → fret 10.  
**Example:** `E3:2` → E3 = MIDI 52, D3 open = MIDI 50 → fret 2.

### Chord label

By default the rendered diagram has no name label. An optional label can be appended after a space before the semicolon/newline:

```
E2:0, B2:1, E3:2, G#3:3, B3:4, E4:5 "E"
A2:1, E3:2, A3:3, C#4:4, E4:5 "A"
```

The quoted string is displayed above the diagram exactly as written.

### Barre notation

To mark a barre, append `~<endString>` to the lowest-string note in the barre:

```
A2:1~5, C#4:4, E4:5 "A (barre)"
```

`~5` means the barre extends from string 1 through string 5 at that fret. This maps directly to the `barre` field in `ChordNote`.

---

## Parsing Algorithm

```ts
type ParsedChord =
  | { mode: "symbol"; key: string; chord: string; voicingIndex: number; raw: string }
  | { mode: "note";   notes: ChordNote[]; label?: string; raw: string }
  | { error: string; raw: string };

function parseChordSequence(text: string): ParsedChord[]
```

**Symbol mode detection:** if no token in the input contains `:`, use symbol mode.

**Note mode steps per chord block:**
1. Split on `,` to get individual placements.
2. For each placement, parse `NoteName Octave : StringNumber [~ endString]`.
3. Compute fret; reject if negative.
4. Build `ChordNote[]`.
5. Parse optional `"label"` after the last placement.

---

## Rendering and Export

See the Rendering section — identical for both modes. Each parsed chord produces a `ChordNote[]` which is passed to `drawChordDiagram(pg, notes, names, settings)`.

In symbol mode, `chordNames` comes from the `keys` lookup table. In note mode, `chordNames` is either the quoted label or empty.

### Canvas layout

Single diagram: ~520 × 680 px (current app canvas dimensions).  
Strip output: `width = diagramWidth × count + gap × (count − 1)`, `height = diagramHeight`. 16 px gap between diagrams.

### Export options

- **Download all** — single wide PNG named `chord-sequence.png`.
- **Download individually** — one PNG per chord, named by label or index (`chord-1.png`, `Am7.png`).

---

## File Structure

```
src/
  constants/
    chordParser.ts        # parseChordSequence(), both mode parsers, fret computation
  components/
    ChordSequence/
      index.tsx           # panel: textarea + mode indicator + Generate button
      Preview.tsx         # scrollable thumbnail strip
      export.ts           # canvas stitching and download
  components/Body/P5Wrapper/sketch/
    drawChordDiagram.ts   # extracted drawing fn accepting a p5.Graphics target
```

---

## Error Handling

| Situation | Behaviour |
|---|---|
| Unknown root or quality (symbol mode) | Token shown in red, skipped |
| Note out of range for string (note mode) | Placement shown in red, that note omitted |
| Fret > 24 | Warning; note still rendered (high fret display) |
| Voicing index out of range | Clamps to last available |
| Empty input | Generate button disabled |
| Mixed modes in one sequence | Detected as symbol mode (`:` appears inside a bracket); warn if ambiguous |

---

## Limitations

- Slash chords (`G/B`) — bass note ignored, chord renders without bass indication.
- Barre detection in note mode is explicit only; the app will not infer a barre from multiple notes at the same fret.
- Instrument follows the app's current setting; no per-chord override.
