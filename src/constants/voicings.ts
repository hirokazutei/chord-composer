import type { ChordNote } from "./types";

export type Voicing = {
  label: string;
  notes: ChordNote[];
};

// Root fret on the low-E string (string 0) for each key
const E_ROOT: Record<string, number> = {
  a: 5, ab: 6, b: 7, c: 8, cd: 9, d: 10, de: 11, e: 0, f: 1, fg: 2, g: 3, ga: 4,
};

// Root fret on the A string (string 1) for each key
const A_ROOT: Record<string, number> = {
  a: 0, ab: 1, b: 2, c: 3, cd: 4, d: 5, de: 6, e: 7, f: 8, fg: 9, g: 10, ga: 11,
};

// ─── Major ───────────────────────────────────────────────────────────────────

function eShapeMaj(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 0, fret: 0 },
      { string: 1, fret: 2, finger: "2" },
      { string: 2, fret: 2, finger: "3" },
      { string: 3, fret: 1, finger: "1" },
      { string: 4, fret: 0 },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 0, fret: R, finger: "1", barre: 5 },
    { string: 1, fret: R + 2, finger: "3" },
    { string: 2, fret: R + 2, finger: "4" },
    { string: 3, fret: R + 1, finger: "2" },
  ];
}

function aShapeMaj(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 2, finger: "1" },
      { string: 3, fret: 2, finger: "2" },
      { string: 4, fret: 2, finger: "3" },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1", barre: 5 },
    { string: 2, fret: R + 2, finger: "2" },
    { string: 3, fret: R + 2, finger: "3" },
    { string: 4, fret: R + 2, finger: "4" },
  ];
}

// ─── Minor ───────────────────────────────────────────────────────────────────

function eShapeMin(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 0, fret: 0 },
      { string: 1, fret: 2, finger: "2" },
      { string: 2, fret: 2, finger: "3" },
      { string: 3, fret: 0 },
      { string: 4, fret: 0 },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 0, fret: R, finger: "1", barre: 5 },
    { string: 1, fret: R + 2, finger: "3" },
    { string: 2, fret: R + 2, finger: "4" },
  ];
}

function aShapeMin(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 2, finger: "3" },
      { string: 4, fret: 1, finger: "1" },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1", barre: 5 },
    { string: 2, fret: R + 2, finger: "3" },
    { string: 3, fret: R + 2, finger: "4" },
    { string: 4, fret: R + 1, finger: "2" },
  ];
}

// ─── Dominant 7th ────────────────────────────────────────────────────────────
// E7 open: 0-2-0-1-0-0  (str2 at R = b7, str3 at R+1 = 3rd; others via barre)

function e7Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 0, fret: 0 },
      { string: 1, fret: 2, finger: "2" },
      { string: 2, fret: 0 },
      { string: 3, fret: 1, finger: "1" },
      { string: 4, fret: 0 },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 0, fret: R, finger: "1", barre: 5 },
    { string: 1, fret: R + 2, finger: "3" },
    { string: 3, fret: R + 1, finger: "2" },
  ];
}

// A7 open: x-0-2-0-2-0  (str3,5 at R via barre = b7 and 5th)
function a7Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 0 },
      { string: 4, fret: 2, finger: "3" },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1", barre: 5 },
    { string: 2, fret: R + 2, finger: "3" },
    { string: 4, fret: R + 2, finger: "4" },
  ];
}

// ─── Minor 7th ───────────────────────────────────────────────────────────────
// Em7 open: 0-2-0-0-0-0  (str2-5 at R via barre = b7/b3/5th/root)

function em7Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 0, fret: 0 },
      { string: 1, fret: 2, finger: "2" },
      { string: 2, fret: 0 },
      { string: 3, fret: 0 },
      { string: 4, fret: 0 },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 0, fret: R, finger: "1", barre: 5 },
    { string: 1, fret: R + 2, finger: "3" },
  ];
}

// Am7 open: x-0-2-0-1-0  (str3,5 at R via barre = b7 and 5th)
function am7Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 0 },
      { string: 4, fret: 1, finger: "1" },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1", barre: 5 },
    { string: 2, fret: R + 2, finger: "3" },
    { string: 4, fret: R + 1, finger: "2" },
  ];
}

// ─── Major 7th ───────────────────────────────────────────────────────────────
// Emaj7 open: 0-2-1-1-0-0  (str2 at R+1 = maj7, str3 at R+1 = 3rd)

function emaj7Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 0, fret: 0 },
      { string: 1, fret: 2, finger: "3" },
      { string: 2, fret: 1, finger: "1" },
      { string: 3, fret: 1, finger: "2" },
      { string: 4, fret: 0 },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 0, fret: R, finger: "1", barre: 5 },
    { string: 1, fret: R + 2, finger: "4" },
    { string: 2, fret: R + 1, finger: "2" },
    { string: 3, fret: R + 1, finger: "3" },
  ];
}

// Amaj7 open: x-0-2-1-2-0  (str3 at R+1 = maj7)
function amaj7Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 2, finger: "3" },
      { string: 3, fret: 1, finger: "1" },
      { string: 4, fret: 2, finger: "2" },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1", barre: 5 },
    { string: 2, fret: R + 2, finger: "3" },
    { string: 3, fret: R + 1, finger: "2" },
    { string: 4, fret: R + 2, finger: "4" },
  ];
}

// ─── Sus4 ─────────────────────────────────────────────────────────────────────
// Esus4 open: 0-2-2-2-0-0  (str1,2,3 all at R+2)

function esus4Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 0, fret: 0 },
      { string: 1, fret: 2, finger: "2" },
      { string: 2, fret: 2, finger: "3" },
      { string: 3, fret: 2, finger: "4" },
      { string: 4, fret: 0 },
      { string: 5, fret: 0 },
    ];
  }
  // str1-str3 at R+2 — mini-barre with barre:2 spanning str1 through str3
  return [
    { string: 0, fret: R, finger: "1", barre: 5 },
    { string: 1, fret: R + 2, finger: "3", barre: 2 },
  ];
}

// Asus4 open: x-0-2-2-3-0  (str4 at R+3 = 4th)
function asus4Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 2, finger: "3" },
      { string: 4, fret: 3, finger: "4" },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1", barre: 5 },
    { string: 2, fret: R + 2, finger: "2" },
    { string: 3, fret: R + 2, finger: "3" },
    { string: 4, fret: R + 3, finger: "4" },
  ];
}

// ─── Sus2 ─────────────────────────────────────────────────────────────────────
// Asus2 open: x-0-2-2-0-0  (str4,5 at R via barre = 2nd and 5th)

function asus2Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 2, finger: "3" },
      { string: 4, fret: 0 },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1", barre: 5 },
    { string: 2, fret: R + 2, finger: "3" },
    { string: 3, fret: R + 2, finger: "4" },
  ];
}

// ─── Major 6th ───────────────────────────────────────────────────────────────
// E6 open: 0-2-2-1-2-0  (str4 at R+2 = 6th; str5 open = root)

function e6Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 0, fret: 0 },
      { string: 1, fret: 2, finger: "2" },
      { string: 2, fret: 2, finger: "3" },
      { string: 3, fret: 1, finger: "1" },
      { string: 4, fret: 2, finger: "4" },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 0, fret: R, finger: "1", barre: 5 },
    { string: 1, fret: R + 2, finger: "3" },
    { string: 3, fret: R + 1, finger: "2" },
    { string: 4, fret: R + 2, finger: "4" },
  ];
}

// A6: str2-str5 all at R+2 (5th/root/3rd/6th) — mini-barre across 4 strings
function a6Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 2, finger: "1", barre: 3 },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1", barre: 5 },
    { string: 2, fret: R + 2, finger: "2", barre: 3 },
  ];
}

// ─── Public API ──────────────────────────────────────────────────────────────

/** Returns computed guitar voicings for the given key and chord type, or null if none defined. */
export function getVoicings(key: string, chord: string): Voicing[] | null {
  const eR = E_ROOT[key];
  const aR = A_ROOT[key];
  if (eR === undefined || aR === undefined) return null;

  switch (chord) {
    case "maj":
      return [
        { label: "E", notes: eShapeMaj(eR) },
        { label: "A", notes: aShapeMaj(aR) },
      ];
    case "min":
      return [
        { label: "E", notes: eShapeMin(eR) },
        { label: "A", notes: aShapeMin(aR) },
      ];
    case "sev":
      return [
        { label: "E7", notes: e7Shape(eR) },
        { label: "A7", notes: a7Shape(aR) },
      ];
    case "m7":
      return [
        { label: "Em7", notes: em7Shape(eR) },
        { label: "Am7", notes: am7Shape(aR) },
      ];
    case "maj7":
      return [
        { label: "E△", notes: emaj7Shape(eR) },
        { label: "A△", notes: amaj7Shape(aR) },
      ];
    case "sus4":
      return [
        { label: "E", notes: esus4Shape(eR) },
        { label: "A", notes: asus4Shape(aR) },
      ];
    case "sus2":
      return [
        { label: "A", notes: asus2Shape(aR) },
      ];
    case "six":
      return [
        { label: "E6", notes: e6Shape(eR) },
        { label: "A6", notes: a6Shape(aR) },
      ];
    default:
      return null;
  }
}
