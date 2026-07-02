# Chord Format Documentation

This document explains how chords are stored and rendered in this app, so that someone with music theory knowledge can translate any chord voicing into the format the app understands.

---

## Table of Contents

1. [Instrument Tunings](#1-instrument-tunings)
2. [String & Fret Coordinate System](#2-string--fret-coordinate-system)
3. [The ChordNote Object](#3-the-chordnote-object)
4. [Fret-to-Pitch Reference Tables](#4-fret-to-pitch-reference-tables)
5. [How to Translate a Chord Voicing](#5-how-to-translate-a-chord-voicing)
6. [The Barre Field — Critical Rules](#6-the-barre-field--critical-rules)
7. [Display Window & Auto-Scroll](#7-display-window--auto-scroll)
8. [Open Strings and Muted Strings](#8-open-strings-and-muted-strings)
9. [ChordName Object](#9-chordname-object)
10. [Full Worked Examples](#10-full-worked-examples)
11. [Common Mistakes](#11-common-mistakes)

---

## 1. Instrument Tunings

### Guitar (6 strings)

| String index | String name | Open pitch | MIDI note |
|:---:|:---:|:---:|:---:|
| **0** | Low E | E2 | 40 |
| **1** | A | A2 | 45 |
| **2** | D | D3 | 50 |
| **3** | G | G3 | 55 |
| **4** | B | B3 | 59 |
| **5** | High e | E4 | 64 |

> **String 0 is the thickest (lowest-pitched) string — the low E string.**  
> This is the opposite of standard tab notation, where the bottom line is the low string.  
> In this app, **low strings have lower index numbers**.

### Ukulele (4 strings)

| String index | String name | Open pitch | MIDI note |
|:---:|:---:|:---:|:---:|
| **0** | G | G4 | 67 |
| **1** | C | C4 | 60 |
| **2** | E | E4 | 64 |
| **3** | A | A4 | 69 |

> **Ukulele uses re-entrant tuning.** String 0 (G4) is *higher* in pitch than strings 1 (C4) and 2 (E4). This means the string index does **not** correspond to ascending pitch order — it is purely a physical string position (closest to you when holding the instrument = string 0).

---

## 2. String & Fret Coordinate System

The chord diagram renders as a vertical neck:

```
       [nut or fret marker]
  str: 0   1   2   3   4   5
       |   |   |   |   |   |
fret 1 |---|---|---|---|---|---|
fret 2 |---|---|---|---|---|---|
fret 3 |---|---|---|---|---|---|
fret 4 |---|---|---|---|---|---|
```

- **Strings** run vertically, left-to-right, from index 0 (left, thickest) to 5 (right, thinnest).
- **Frets** run horizontally, top-to-bottom, from fret 1 at the top to however many frets are shown.
- **Fret 0** = the open string — rendered *above* the nut as an open circle ○.
- **Fret null** = muted string — rendered *above* the nut as an X.
- **Fret 1+** = a finger is placed between the previous fret wire and this fret wire.

---

## 3. The ChordNote Object

Every individual note in a chord is described by a `ChordNote` object:

```typescript
type ChordNote = {
  string: number;       // Which string (0–5 guitar, 0–3 ukulele)
  fret: number | null;  // Which fret (null = mute, 0 = open, 1+ = fretted)
  barre?: number | null; // Barre endpoint string index (see Section 6)
  finger?: string | null; // Finger label: "1", "2", "3", "4", or null
}
```

A chord is simply an **array of ChordNote objects**:

```typescript
// A major (guitar) — open position
chordNotes: [
  { string: 1, fret: 0 },              // A string open
  { string: 2, fret: 2, finger: "2" }, // D string, fret 2 → E
  { string: 3, fret: 2, finger: "1" }, // G string, fret 2 → A
  { string: 4, fret: 2, finger: "3" }, // B string, fret 2 → C#
  { string: 5, fret: 0 },              // High e string open
]
// Note: string 0 (low E) is omitted → nothing shown, strings plays freely
// To explicitly mute it, add: { string: 0, fret: null }
```

### What happens if you omit a string?

Omitting a string entirely means **no indicator is shown** for that string — neither an open circle nor an X. To explicitly show a string as muted, you must include `{ string: n, fret: null }`.

---

## 4. Fret-to-Pitch Reference Tables

### Guitar — Full Fret Reference (frets 0–12)

Each cell shows the pitch at that string + fret combination.

| Fret | Str 0 (E2) | Str 1 (A2) | Str 2 (D3) | Str 3 (G3) | Str 4 (B3) | Str 5 (E4) |
|:----:|:----------:|:----------:|:----------:|:----------:|:----------:|:----------:|
|  0   |     E2     |     A2     |     D3     |     G3     |     B3     |     E4     |
|  1   |     F2     |     A♯/B♭2 |     D♯/E♭3 |     G♯/A♭3 |     C4     |     F4     |
|  2   |     F♯/G♭2 |     B2     |     E3     |     A3     |     C♯/D♭4 |     F♯/G♭4 |
|  3   |     G2     |     C3     |     F3     |     A♯/B♭3 |     D4     |     G4     |
|  4   |     G♯/A♭2 |     C♯/D♭3 |     F♯/G♭3 |     B3     |     D♯/E♭4 |     G♯/A♭4 |
|  5   |     A2     |     D3     |     G3     |     C4     |     E4     |     A4     |
|  6   |     A♯/B♭2 |     D♯/E♭3 |     G♯/A♭3 |     C♯/D♭4 |     F4     |     A♯/B♭4 |
|  7   |     B2     |     E3     |     A3     |     D4     |     F♯/G♭4 |     B4     |
|  8   |     C3     |     F3     |     A♯/B♭3 |     D♯/E♭4 |     G4     |     C5     |
|  9   |     C♯/D♭3 |     F♯/G♭3 |     B3     |     E4     |     G♯/A♭4 |     C♯/D♭5 |
| 10   |     D3     |     G3     |     C4     |     F4     |     A4     |     D5     |
| 11   |     D♯/E♭3 |     G♯/A♭3 |     C♯/D♭4 |     F♯/G♭4 |     A♯/B♭4 |     D♯/E♭5 |
| 12   |     E3     |     A3     |     D4     |     G4     |     B4     |     E5     |

**Formula:** `pitch = open_pitch + fret_number` (in semitones)

### Guitar — Root Fret Positions by Key

To quickly find where to place a root note on each string:

| Key | Str 0 (E) | Str 1 (A) | Str 2 (D) | Str 3 (G) | Str 4 (B) | Str 5 (e) |
|:---:|:---------:|:---------:|:---------:|:---------:|:---------:|:---------:|
|  A  |     5     |     0     |     7     |     2     |    10     |     5     |
| B♭  |     6     |     1     |     8     |     3     |    11     |     6     |
|  B  |     7     |     2     |     9     |     4     |    12     |     7     |
|  C  |     8     |     3     |    10     |     5     |     1     |     8     |
| C♯  |     9     |     4     |    11     |     6     |     2     |     9     |
|  D  |    10     |     5     |     0     |     7     |     3     |    10     |
| E♭  |    11     |     6     |     1     |     8     |     4     |    11     |
|  E  |     0     |     7     |     2     |     9     |     5     |     0     |
|  F  |     1     |     8     |     3     |    10     |     6     |     1     |
| F♯  |     2     |     9     |     4     |    11     |     7     |     2     |
|  G  |     3     |    10     |     5     |     0     |     8     |     3     |
| A♭  |     4     |    11     |     6     |     1     |     9     |     4     |

> These are the **lowest fret positions** for each root note on each string (within frets 0–11). Add 12 for the next octave.

### Ukulele — Full Fret Reference (frets 0–12)

| Fret | Str 0 (G4) | Str 1 (C4) | Str 2 (E4) | Str 3 (A4) |
|:----:|:----------:|:----------:|:----------:|:----------:|
|  0   |     G4     |     C4     |     E4     |     A4     |
|  1   |   G♯/A♭4   |   C♯/D♭4   |     F4     |   A♯/B♭4   |
|  2   |     A4     |     D4     |   F♯/G♭4   |     B4     |
|  3   |   A♯/B♭4   |   D♯/E♭4   |     G4     |     C5     |
|  4   |     B4     |     E4     |   G♯/A♭4   |   C♯/D♭5   |
|  5   |     C5     |     F4     |     A4     |     D5     |
|  6   |   C♯/D♭5   |   F♯/G♭4   |   A♯/B♭4   |   D♯/E♭5   |
|  7   |     D5     |     G4     |     B4     |     E5     |
|  8   |   D♯/E♭5   |   G♯/A♭4   |     C5     |     F5     |
|  9   |     E5     |     A4     |   C♯/D♭5   |   F♯/G♭5   |
| 10   |     F5     |   A♯/B♭4   |     D5     |     G5     |
| 11   |   F♯/G♭5   |     B4     |   D♯/E♭5   |   G♯/A♭5   |
| 12   |     G5     |     C5     |     E5     |     A5     |

---

## 5. How to Translate a Chord Voicing

### Step-by-step process

Given a chord voicing (a set of string + fret positions), translate each note as follows:

**1. Identify every string being played.**
For each string, decide whether it is: fretted, open, or muted.

**2. For each fretted string:**
Look up the note it produces using the reference table above (or calculate: `open_pitch + fret`).
Verify it belongs to the chord's note set.

**3. Create a ChordNote object:**
```typescript
{ string: <index>, fret: <number>, finger: "<1-4>" }
```

**4. For barre chords**, see Section 6.

**5. Omit strings that you neither want open nor muted** — they simply won't appear in the diagram. If you want a string explicitly marked muted (X), add `{ string: n, fret: null }`.

### Practical fret-finding formula

To find the fret for a target pitch class on a given string:
```
fret = (target_pitch_class - open_pitch_class + 12) % 12
```

Where pitch classes are: C=0, C♯=1, D=2, D♯=3, E=4, F=5, F♯=6, G=7, G♯=8, A=9, B♭=10, B=11.

Add multiples of 12 for higher octaves (e.g., add 12 for one octave up, add 24 for two octaves up).

**Example:** Finding G on the B string (string 4):
```
G pitch class = 7
B pitch class = 11
fret = (7 - 11 + 12) % 12 = 8 % 12 = 8
```
→ G is at fret 8 on the B string. Verify: B + 8 semitones = G ✓

---

## 6. The Barre Field — Critical Rules

A barre draws a bar across multiple strings at a single fret — one finger pressing multiple strings simultaneously.

### Structure

```typescript
{ string: <from_string>, fret: <fret>, barre: <to_string>, finger: "1" }
```

- `string` — the **lowest-indexed string** the barre starts from
- `barre` — the **absolute index of the highest string** the barre reaches
- `barre` must **always be greater than `string`**
- The barre covers all strings from `string` through `barre` (inclusive)

### ⚠️ `barre` is an absolute string index, NOT an offset

| Intended effect | Correct | Wrong |
|---|---|---|
| Barre from str 1 to str 5 | `{ string: 1, barre: 5 }` | `{ string: 1, barre: 4 }` (offset) |
| Barre from str 3 to str 5 | `{ string: 3, barre: 5 }` | `{ string: 3, barre: 2 }` (offset) |
| Barre from str 4 to str 5 | `{ string: 4, barre: 5 }` | `{ string: 4, barre: 1 }` (offset) |

### Common barre patterns

| Pattern | ChordNote |
|---|---|
| Full 6-string barre (E-shape) | `{ string: 0, fret: R, finger: "1", barre: 5 }` |
| Full A-string barre (A-shape) | `{ string: 1, fret: R, finger: "1", barre: 5 }` |
| Mini-barre: strings 3–5 | `{ string: 3, fret: F, finger: "1", barre: 5 }` |
| Mini-barre: strings 1–2 | `{ string: 1, fret: F, finger: "1", barre: 2 }` |

### Overriding notes within a barre

Individual fretted notes can be placed on top of a barre at a different fret — they override visually. List the barre first, then the individual notes:

```typescript
// E-shape major barre at fret 5 (A major)
[
  { string: 0, fret: 5, finger: "1", barre: 5 }, // full barre
  { string: 1, fret: 7, finger: "3" },            // overrides str 1 (5th)
  { string: 2, fret: 7, finger: "4" },            // overrides str 2 (root)
  { string: 3, fret: 6, finger: "2" },            // overrides str 3 (3rd)
  // strings 4 and 5 sound at fret 5 via the barre
]
```

---

## 7. Display Window & Auto-Scroll

The diagram shows **4 frets** by default, starting at fret 1.

### Auto-adjustment rule

When the app renders a chord (non-custom mode), it calls `applyPresetSettings`:
- If all notes fit within frets 1–4, display frets 1–4 (the nut is shown as a thick top line).
- If any note exceeds fret 4, the window shifts: `startingFret = lowest non-open fret in the chord`.

**Example:** Am barre at the 5th position (frets 5–7) → the diagram shows frets 5–8, with "5th" written to the side.

### Implications for chord entry

- **Open-position chords** (frets 0–4): write the actual fret numbers (0, 1, 2, 3, 4).
- **Barre chords** at higher positions (fret 5+): write the actual fret numbers. The display auto-adjusts.
- You do **not** need to normalize fret numbers relative to a starting fret. Always use real/absolute fret numbers.

---

## 8. Open Strings and Muted Strings

| Situation | What to write | What renders |
|---|---|---|
| String plays open | `{ string: n, fret: 0 }` | ○ above the nut |
| String is muted (don't play) | `{ string: n, fret: null }` | X above the nut |
| String not mentioned | *(omit from array)* | nothing shown |

The distinction between "muted" and "omitted" matters — muted explicitly tells the player not to strum that string (X appears), while omitted means the string simply has no annotation.

---

## 9. ChordName Object

Each chord also carries a `chordNames` array that controls what text is displayed above the diagram.

```typescript
type ChordName = {
  key: string;    // Root note letter: "A", "B", "C", "D", "E", "F", "G"
  sharp: boolean; // true → display ♯ superscript
  flat: boolean;  // true → display ♭ superscript
  aux: string;    // Chord quality suffix: "m", "7", "maj7", "sus4", etc.
}
```

Most chords have a single ChordName in the array. Slash chords (e.g., G/B) use two entries.

**Examples:**

| Display | ChordName object |
|---|---|
| C | `{ key: "C", sharp: false, flat: false, aux: "" }` |
| F♯m | `{ key: "F", sharp: true, flat: false, aux: "m" }` |
| B♭7 | `{ key: "B", sharp: false, flat: true, aux: "7" }` |
| Gmaj7 | `{ key: "G", sharp: false, flat: false, aux: "maj7" }` |
| D/F♯ | `[{ key: "D", ..., aux: "" }, { key: "F", sharp: true, ..., aux: "" }]` |

---

## 10. Full Worked Examples

### Example 1: C Major open (guitar)

Voicing: x-3-2-0-1-0
- String 0 (low E): muted → `{ string: 0, fret: null }`
- String 1 (A): fret 3 = C (root), finger 3 → `{ string: 1, fret: 3, finger: "3" }`
- String 2 (D): fret 2 = E (3rd), finger 2 → `{ string: 2, fret: 2, finger: "2" }`
- String 3 (G): fret 0 = G (5th), open → `{ string: 3, fret: 0 }`
- String 4 (B): fret 1 = C (root), finger 1 → `{ string: 4, fret: 1, finger: "1" }`
- String 5 (e): fret 0 = E (3rd), open → `{ string: 5, fret: 0 }`

```typescript
chordNotes: [
  { string: 0, fret: null },
  { string: 1, fret: 3, finger: "3" },
  { string: 2, fret: 2, finger: "2" },
  { string: 3, fret: 0 },
  { string: 4, fret: 1, finger: "1" },
  { string: 5, fret: 0 },
]
```

---

### Example 2: F Major barre (guitar, E-shape at fret 1)

Voicing: 1-1-2-3-3-1 (full barre, fret 1)

Barre at fret 1 covers all 6 strings (index finger).  
Then override with ring/pinky:

```typescript
chordNotes: [
  { string: 0, fret: 1, finger: "1", barre: 5 }, // full barre
  { string: 1, fret: 3, finger: "4" },            // A string: C (5th of F)
  { string: 2, fret: 3, finger: "3" },            // D string: F (root)
  { string: 3, fret: 2, finger: "2" },            // G string: A (3rd of F)
  // strings 4 (C) and 5 (F) at fret 1 via barre
]
```

---

### Example 3: Dm barre (guitar, A-shape at fret 5)

Root D on A string = fret 5. A-shape minor barre:

```typescript
chordNotes: [
  { string: 1, fret: 5, finger: "1", barre: 5 }, // A-string barre str1→str5
  { string: 2, fret: 7, finger: "3" },            // D string: A (5th)
  { string: 3, fret: 7, finger: "4" },            // G string: D (root)
  { string: 4, fret: 6, finger: "2" },            // B string: F (b3)
  // string 0 (low E): omitted — don't play
]
```

---

### Example 4: Am (ukulele)

Ukulele tuning: G4–C4–E4–A4 (strings 0–3)  
Am = A–C–E

| String | Open | Fret | Pitch | Role |
|:---:|:---:|:---:|:---:|:---:|
| 0 (G4) | G4 | 2 | A4 | root |
| 1 (C4) | C4 | 0 | C4 | b3rd |
| 2 (E4) | E4 | 0 | E4 | 5th |
| 3 (A4) | A4 | 0 | A4 | root |

```typescript
chordNotes: [
  { string: 0, fret: 2, finger: "2" },
  { string: 1, fret: 0 },
  { string: 2, fret: 0 },
  { string: 3, fret: 0 },
]
```

---

### Example 5: Cadd9 (guitar, C-shape open)

Cadd9 = C–E–G–D (root–3rd–5th–9th, no 7th)  
Voicing: x-3-2-0-3-0

```typescript
chordNotes: [
  { string: 0, fret: null },              // low E: muted
  { string: 1, fret: 3, finger: "3" },   // A string: C (root)
  { string: 2, fret: 2, finger: "2" },   // D string: E (3rd)
  { string: 3, fret: 0 },                // G string: G (5th, open)
  { string: 4, fret: 3, finger: "4" },   // B string: D (9th)
  { string: 5, fret: 0 },                // e string: E (3rd, open)
]
```

---

## 11. Common Mistakes

### ❌ Treating `barre` as an offset from `string`
`barre` is an **absolute string index**. `{ string: 3, barre: 2 }` tries to draw backwards and won't render correctly. Always ensure `barre >= string`.

### ❌ Using tab-order string numbering
Standard guitar tab puts the **high e at the bottom** (string 1) and **low E at the top** (string 6). This app is the **opposite**: string 0 = low E, string 5 = high e.

Convert from tab format: `app_string = 5 - (tab_string - 1)` for guitar.

### ❌ Forgetting that ukulele string 0 is NOT the lowest pitch
Ukulele re-entrant tuning means string 0 (G4) sounds higher than strings 1 (C4) and 2 (E4). Don't assume string 0 carries the bass note.

### ❌ Normalizing fret numbers relative to the starting fret
Always use absolute fret numbers (e.g., fret 7 = the 7th fret on the actual guitar). The display auto-adjusts the viewport.

### ❌ Confusing `fret: 0` with `fret: null`
- `fret: 0` = **open string** → renders a ○ above the nut → the string rings
- `fret: null` = **muted string** → renders an X above the nut → the string is dampened
- Omitting the string entirely → no indicator shown

---

## Quick Reference Card

```
Guitar strings:  0=E2  1=A2  2=D3  3=G3  4=B3  5=e4   (low→high)
Ukulele strings: 0=G4  1=C4  2=E4  3=A4               (re-entrant)

ChordNote: { string, fret, barre?, finger? }
  fret: null  = muted (X)
  fret: 0     = open (○)
  fret: 1+    = fretted note
  barre: N    = barre extends FROM string TO string N  (N must be > string)
  finger: "1"–"4" = finger number label (1=index, 4=pinky)

Pitch formula: pitch = open_string_pitch + fret  (in semitones)
Fret formula:  fret  = (target_pitch_class - open_pitch_class + 12) % 12

Auto-display: frets 1–4 shown by default; auto-scrolls to lowest note if chord
              spans above fret 4. Always write real fret numbers.
```
