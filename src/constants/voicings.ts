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

// Root fret on the D string (string 2) for each key
const D_ROOT: Record<string, number> = {
  d: 0, de: 1, e: 2, f: 3, fg: 4, g: 5, ga: 6, a: 7, ab: 8, b: 9, c: 10, cd: 11,
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

// ─── D-shape Major ────────────────────────────────────────────────────────────
// D open: xx-0-2-3-2  (str3=5th, str4=root oct, str5=3rd; str3 & str5 at R+2)

function dShapeMaj(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 2, fret: 0 },
      { string: 3, fret: 2, finger: "2" },
      { string: 4, fret: 3, finger: "3" },
      { string: 5, fret: 2, finger: "1" },
    ];
  }
  // str3 & str5 both at R+2 — mini-barre covering str3-str5; str4 overrides at R+3
  return [
    { string: 2, fret: R, finger: "1" },
    { string: 3, fret: R + 2, finger: "2", barre: 2 },
    { string: 4, fret: R + 3, finger: "4" },
  ];
}

// ─── D-shape Minor ────────────────────────────────────────────────────────────
// Dm open: xx-0-2-3-1  (str5=b3 at R+1 differs from major)

function dShapeMin(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 2, fret: 0 },
      { string: 3, fret: 2, finger: "3" },
      { string: 4, fret: 3, finger: "4" },
      { string: 5, fret: 1, finger: "1" },
    ];
  }
  return [
    { string: 2, fret: R, finger: "1" },
    { string: 3, fret: R + 2, finger: "3" },
    { string: 4, fret: R + 3, finger: "4" },
    { string: 5, fret: R + 1, finger: "2" },
  ];
}

// ─── D-shape Dominant 7th ────────────────────────────────────────────────────
// D7 open: xx-0-2-1-2  (str4=b7 at R+1; str3 & str5 both at R+2)

function d7Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 2, fret: 0 },
      { string: 3, fret: 2, finger: "3" },
      { string: 4, fret: 1, finger: "1" },
      { string: 5, fret: 2, finger: "2" },
    ];
  }
  return [
    { string: 2, fret: R, finger: "1" },
    { string: 3, fret: R + 2, finger: "3" },
    { string: 4, fret: R + 1, finger: "2" },
    { string: 5, fret: R + 2, finger: "4" },
  ];
}

// ─── D-shape Minor 7th ───────────────────────────────────────────────────────
// Dm7 open: xx-0-2-1-1  (str4 & str5 both at R+1 = b7 and b3)

function dm7Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 2, fret: 0 },
      { string: 3, fret: 2, finger: "3" },
      { string: 4, fret: 1, finger: "1", barre: 1 },
    ];
  }
  return [
    { string: 2, fret: R, finger: "1" },
    { string: 3, fret: R + 2, finger: "3" },
    { string: 4, fret: R + 1, finger: "2", barre: 1 },
  ];
}

// ─── D-shape Major 7th ───────────────────────────────────────────────────────
// Dmaj7 open: xx-0-2-2-2  (str3-str5 all at R+2)

function dmaj7Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 2, fret: 0 },
      { string: 3, fret: 2, finger: "1", barre: 2 },
    ];
  }
  return [
    { string: 2, fret: R, finger: "1" },
    { string: 3, fret: R + 2, finger: "2", barre: 2 },
  ];
}

// ─── D-shape Sus4 ─────────────────────────────────────────────────────────────
// Dsus4 open: xx-0-2-3-3  (str4 & str5 both at R+3 = root oct and 4th)

function dsus4Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 2, fret: 0 },
      { string: 3, fret: 2, finger: "2" },
      { string: 4, fret: 3, finger: "3", barre: 1 },
    ];
  }
  return [
    { string: 2, fret: R, finger: "1" },
    { string: 3, fret: R + 2, finger: "2" },
    { string: 4, fret: R + 3, finger: "3", barre: 1 },
  ];
}

// ─── D-shape Sus2 ─────────────────────────────────────────────────────────────
// Dsus2 open: xx-0-2-3-0  (str5=open=2nd; str4=root oct)

function dsus2Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 2, fret: 0 },
      { string: 3, fret: 2, finger: "2" },
      { string: 4, fret: 3, finger: "3" },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 2, fret: R, finger: "1" },
    { string: 3, fret: R + 2, finger: "3" },
    { string: 4, fret: R + 3, finger: "4" },
    { string: 5, fret: R, finger: "2" },
  ];
}

// ─── C-shape Major ────────────────────────────────────────────────────────────
// C open: x-3-2-0-1-0  (root on str1 at aR=3; str3,5 open=5th,3rd at aR-3)
// Only valid when aR >= 3 (avoids negative frets on str3/str5).

function cShapeMaj(aR: number): ChordNote[] {
  // partial barre at aR-3 covers str3-str5 (5th, root, 3rd); str4 overridden
  return [
    { string: 1, fret: aR, finger: "4" },
    { string: 2, fret: aR - 1, finger: "3" },
    { string: 3, fret: aR - 3, finger: "1", barre: 2 },
    { string: 4, fret: aR - 2, finger: "2" },
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
  const dR = D_ROOT[key];
  if (eR === undefined || aR === undefined || dR === undefined) return null;

  switch (chord) {
    case "maj": {
      const voicings: Voicing[] = [
        { label: "E", notes: eShapeMaj(eR) },
        { label: "A", notes: aShapeMaj(aR) },
        { label: "D", notes: dShapeMaj(dR) },
      ];
      if (aR >= 3) voicings.splice(2, 0, { label: "C", notes: cShapeMaj(aR) });
      return voicings;
    }
    case "min":
      return [
        { label: "E", notes: eShapeMin(eR) },
        { label: "A", notes: aShapeMin(aR) },
        { label: "D", notes: dShapeMin(dR) },
      ];
    case "sev":
      return [
        { label: "E7", notes: e7Shape(eR) },
        { label: "A7", notes: a7Shape(aR) },
        { label: "D7", notes: d7Shape(dR) },
      ];
    case "m7":
      return [
        { label: "Em7", notes: em7Shape(eR) },
        { label: "Am7", notes: am7Shape(aR) },
        { label: "Dm7", notes: dm7Shape(dR) },
      ];
    case "maj7":
      return [
        { label: "E△", notes: emaj7Shape(eR) },
        { label: "A△", notes: amaj7Shape(aR) },
        { label: "D△", notes: dmaj7Shape(dR) },
      ];
    case "sus4":
      return [
        { label: "E", notes: esus4Shape(eR) },
        { label: "A", notes: asus4Shape(aR) },
        { label: "D", notes: dsus4Shape(dR) },
      ];
    case "sus2":
      return [
        { label: "A", notes: asus2Shape(aR) },
        { label: "D", notes: dsus2Shape(dR) },
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
