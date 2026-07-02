# Chord Theory Reference

This document defines what makes each chord type in this app the chord it is — the intervals
required, which can be safely omitted, and what distinguishes it from closely related chords.

---

## Interval Primer

All intervals are measured in **semitones above the root**.

| Semitones | Interval name | Abbreviation |
|:---------:|---|---|
| 0 | Root (unison) | R |
| 2 | Major 2nd (= Major 9th an octave up) | M2 / 9 |
| 3 | Minor 3rd | m3 |
| 4 | Major 3rd | M3 |
| 5 | Perfect 4th | P4 |
| 6 | Diminished 5th (tritone) | d5 |
| 7 | Perfect 5th | P5 |
| 8 | Augmented 5th | A5 |
| 9 | Major 6th | M6 |
| 10 | Minor 7th (dominant 7th) | m7 |
| 11 | Major 7th | M7 |
| 14 | Major 9th (= M2 + octave) | 9 |

> **The critical identity pair for any chord:** the **3rd** (or its suspension) and — for 7th chords — the **7th**. These two intervals, along with the root, are almost never omittable without changing what the chord *is*. The perfect 5th, by contrast, is routinely dropped in guitar voicings.

---

## Chord Definitions

```
Notation:  R = root  •  ✓ = required  •  (✓) = usually present, rarely omitted  •  - = optional/often omitted
```

### Major  `maj`

```
Interval:  R    M3   P5
Semitones: 0    4    7
Role:      ✓    ✓    -
```

The **major 3rd** is the entire identity of this chord. Without it, you do not have a major chord.
The 5th can be dropped freely.

**Distinguished from:** minor (M3 vs. m3), sus chords (no 3rd at all), augmented (P5 vs. A5).

---

### Minor  `min`

```
Interval:  R    m3   P5
Semitones: 0    3    7
Role:      ✓    ✓    -
```

The **minor 3rd** (one semitone lower than the major 3rd) is the sole defining change from major.
The 5th can be dropped.

**Distinguished from:** major (m3 vs. M3), diminished (both have m3, but dim also has a d5 instead of P5).

---

### Diminished  `dim`

```
Interval:  R    m3   d5
Semitones: 0    3    6
Role:      ✓    ✓    ✓
```

Both the minor 3rd and the **diminished 5th (tritone)** are essential. This is a 3-note chord with
no omittable tones — the tritone is exactly what makes it "diminished" rather than minor.

**Distinguished from:** minor (d5 vs. P5). Note: *diminished 7th* (`dim7`) is a separate chord
that adds a diminished 7th (9 semitones) on top; that is not in this app's chord list.

---

### Dominant 7th  `sev`

```
Interval:  R    M3   P5   m7
Semitones: 0    4    7    10
Role:      ✓    ✓    -    ✓
```

The **major 3rd + minor 7th** combination is the signature. These two intervals are a tritone
apart from each other, creating the tension that wants to resolve. Without either, the chord
loses its dominant function.

**Distinguished from:**
- `maj7`: minor 7th (10) vs. major 7th (11) — one semitone apart
- `m7`: major 3rd (4) vs. minor 3rd (3)

---

### Minor 7th  `m7`

```
Interval:  R    m3   P5   m7
Semitones: 0    3    7    10
Role:      ✓    ✓    -    ✓
```

Minor chord with a **minor 7th** added. Both the m3 and m7 are required.

**Distinguished from:**
- `dom7`: m3 instead of M3 (darker quality, no dominant tension)
- `maj7`: m7 (10) instead of M7 (11)
- `m9`: m9 adds the 9th (14) on top of this

---

### Major 7th  `maj7`

```
Interval:  R    M3   P5   M7
Semitones: 0    4    7    11
Role:      ✓    ✓    -    ✓
```

Major chord with a **major 7th** (11 semitones, one semitone below the octave). The M7 creates
a rich, floating quality without the tension of a dominant 7th.

**Distinguished from:**
- `sev` (dom7): M7 (11) vs. m7 (10) — that single semitone is the full distinction
- `maj9`: maj7 is the foundation; maj9 adds the 9th (14)

---

### Suspended 4th  `sus4`

```
Interval:  R    P4   P5
Semitones: 0    5    7
Role:      ✓    ✓    (✓)
```

The 3rd is **absent** (neither major nor minor). The **perfect 4th replaces it** — this is what
"suspended" means. The 5th is usually present to give the chord its open, ambiguous sound.

**Distinguished from:** sus2 (P4 vs. M2 replacing the 3rd), 7sus4 (same but adds m7).

---

### Suspended 2nd  `sus2`

```
Interval:  R    M2   P5
Semitones: 0    2    7
Role:      ✓    ✓    (✓)
```

Like sus4, no 3rd at all. The **major 2nd replaces it**, creating a more open, airy sound than
sus4. Note: Csus2 contains the same pitch classes as Gsus4 (reinterpreted with a different root).

**Distinguished from:** sus4 (M2 vs. P4).

---

### Major 6th  `six`

```
Interval:  R    M3   P5   M6
Semitones: 0    4    7    9
Role:      ✓    ✓    -    ✓
```

A major triad with an added **major 6th** (9 semitones). This is *not* a 7th chord — it is a
triad with an added colour note. The M3 and M6 are both required.

The pitch content of a major 6th chord is identical to its relative minor's m7 chord
(e.g., C6 = Am7), but the root and harmonic function differ.

**Distinguished from:**
- `maj7`: added note is M6 (9) not M7 (11)
- `dom9`: has no 7th; dom9 requires a m7
- Does **not** imply or include a 7th of any kind.

---

### Dominant 9th  `dom9`

```
Interval:  R    M3   P5   m7   9
Semitones: 0    4    7    10   14
Role:      ✓    ✓    -    ✓    ✓
```

A dominant 7th chord with the **9th added on top**. The **minor 7th is required** — "9"
in a chord name always implies the full 7th-chord stack through the 7th. Without the 7th,
it becomes an `add9`.

**Distinguished from:**
- `add9`: dom9 requires m7; add9 has no 7th
- `maj9`: dom9 has m7 (10), maj9 has M7 (11)
- `m9`: dom9 has M3 (4), m9 has m3 (3)

---

### Augmented  `aug`

```
Interval:  R    M3   A5
Semitones: 0    4    8
Role:      ✓    ✓    ✓
```

Major chord with a **raised (augmented) 5th**. All three notes are essential — the A5 is the
entire point. The aug chord is symmetrical: dividing the octave into three equal major 3rds means
C aug, E aug, and G# aug are all the same three pitch classes. This symmetry is unique among
triads.

**Distinguished from:** major (A5 vs. P5).

---

### Add 9  `add9`

```
Interval:  R    M3   P5   9
Semitones: 0    4    7    14
Role:      ✓    ✓    -    ✓
```

A major triad with the **9th added directly, with no 7th**. The "add" prefix explicitly means
the note is grafted onto the triad without implying a 7th-chord extension stack. The M3 and
9th are both required.

**Distinguished from:**
- `dom9` / `maj9`: add9 has **no 7th of any kind** — this is the defining rule
- `maj`: add9 includes the 9th (14), major does not
- `sus2`: both have M2/9, but add9 also has M3 whereas sus2 has no 3rd

---

### 7sus4  `sus4b`

```
Interval:  R    P4   P5   m7
Semitones: 0    5    7    10
Role:      ✓    ✓    -    ✓
```

A sus4 chord extended with a **minor 7th**. Still no 3rd. The P4 and m7 are both required.
Common in funk and R&B; the suspended 4th often resolves down to the major 3rd when the chord
resolves to a `dom7`.

**Distinguished from:**
- `sus4`: 7sus4 adds m7 (10)
- `dom7`: 7sus4 has P4 (5) where dom7 has M3 (4); neither minor nor major 3rd is present

---

### Minor 9th  `m9`

```
Interval:  R    m3   P5   m7   9
Semitones: 0    3    7    10   14
Role:      ✓    ✓    -    ✓    ✓
```

A minor 7th chord with the **9th added**. The **minor 7th is required** (same rule as dom9:
"9" implies the 7th is present).

**Distinguished from:**
- `m7`: m9 adds the 9th (14)
- `dom9`: m9 has m3 (3), dom9 has M3 (4)
- `maj9`: m9 has m3 + m7; maj9 has M3 + M7

---

### Major 9th  `maj9`

```
Interval:  R    M3   P5   M7   9
Semitones: 0    4    7    11   14
Role:      ✓    ✓    -    ✓    ✓
```

A major 7th chord with the **9th added**. Both the M7 and the 9th are required. The richest
and most complex chord in this app's set.

**Distinguished from:**
- `maj7`: maj9 adds the 9th (14)
- `add9`: maj9 includes M7 (11); add9 has no 7th
- `dom9`: maj9 has M7 (11), dom9 has m7 (10)
- `m9`: maj9 has M3 + M7; m9 has m3 + m7

---

## Quick Comparison Table

| Chord | R | m3 | M3 | P4 | d5 | P5 | A5 | M6 | m7 | M7 | 9  |
|-------|:-:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| maj   | ✓ |    | ✓  |    |    | –  |    |    |    |    |    |
| min   | ✓ | ✓  |    |    |    | –  |    |    |    |    |    |
| dim   | ✓ | ✓  |    |    | ✓  |    |    |    |    |    |    |
| aug   | ✓ |    | ✓  |    |    |    | ✓  |    |    |    |    |
| sus2  | ✓ |    |    |    |    | (✓)|    |    |    |    | ✓* |
| sus4  | ✓ |    |    | ✓  |    | (✓)|    |    |    |    |    |
| six   | ✓ |    | ✓  |    |    | –  |    | ✓  |    |    |    |
| sev   | ✓ |    | ✓  |    |    | –  |    |    | ✓  |    |    |
| m7    | ✓ | ✓  |    |    |    | –  |    |    | ✓  |    |    |
| maj7  | ✓ |    | ✓  |    |    | –  |    |    |    | ✓  |    |
| sus4b | ✓ |    |    | ✓  |    | –  |    |    | ✓  |    |    |
| add9  | ✓ |    | ✓  |    |    | –  |    |    |    |    | ✓  |
| dom9  | ✓ |    | ✓  |    |    | –  |    |    | ✓  |    | ✓  |
| m9    | ✓ | ✓  |    |    |    | –  |    |    | ✓  |    | ✓  |
| maj9  | ✓ |    | ✓  |    |    | –  |    |    |    | ✓  | ✓  |

`✓` = required   `(✓)` = usually present   `–` = optional (can be omitted)   `*` = sus2's 2nd is voiced at unison range, same pitch class as 9

---

## The Most Important Rules

**1. "9" in the chord name means the 7th is present.**
`dom9`, `m9`, and `maj9` all require their respective 7th. Without the 7th, the chord collapses
to an `add9` variant instead.

**2. "add" means no 7th.**
`add9` explicitly grafts the 9th onto the triad with no 7th implied or present.

**3. "sus" means no 3rd.**
Both `sus2` and `sus4` (and `7sus4`) have neither a major nor minor 3rd. The 4th or 2nd
*replaces* the 3rd — it is not added alongside it.

**4. The 5th is almost always omittable.**
The exception is `dim` (where the d5 is the point of the chord) and `aug` (where the A5 is the
point). In all other chords, dropping the perfect 5th is standard practice, especially in
guitar voicings where strings are limited.

**5. The 3rd (or its suspension) determines major/minor quality.**
Major 3rd → bright, stable. Minor 3rd → dark, melancholic. No 3rd (sus) → ambiguous, open.

**6. The 7th determines dominant vs. major colour in extended chords.**
Minor 7th (10) → dominant function, tension. Major 7th (11) → floating, non-resolving colour.
