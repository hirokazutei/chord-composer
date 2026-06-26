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
  // str1-str3 at R+2 — mini-barre spanning str1 through str3
  return [
    { string: 0, fret: R, finger: "1", barre: 5 },
    { string: 1, fret: R + 2, finger: "3", barre: 3 },
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
    { string: 3, fret: R + 2, finger: "2", barre: 5 },
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
      { string: 4, fret: 1, finger: "1", barre: 5 },
    ];
  }
  return [
    { string: 2, fret: R, finger: "1" },
    { string: 3, fret: R + 2, finger: "3" },
    { string: 4, fret: R + 1, finger: "2", barre: 5 },
  ];
}

// ─── D-shape Major 7th ───────────────────────────────────────────────────────
// Dmaj7 open: xx-0-2-2-2  (str3-str5 all at R+2)

function dmaj7Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 2, fret: 0 },
      { string: 3, fret: 2, finger: "1", barre: 5 },
    ];
  }
  return [
    { string: 2, fret: R, finger: "1" },
    { string: 3, fret: R + 2, finger: "2", barre: 5 },
  ];
}

// ─── D-shape Sus4 ─────────────────────────────────────────────────────────────
// Dsus4 open: xx-0-2-3-3  (str4 & str5 both at R+3 = root oct and 4th)

function dsus4Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 2, fret: 0 },
      { string: 3, fret: 2, finger: "2" },
      { string: 4, fret: 3, finger: "3", barre: 5 },
    ];
  }
  return [
    { string: 2, fret: R, finger: "1" },
    { string: 3, fret: R + 2, finger: "2" },
    { string: 4, fret: R + 3, finger: "3", barre: 5 },
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
    { string: 3, fret: aR - 3, finger: "1", barre: 5 },
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
      { string: 2, fret: 2, finger: "1", barre: 5 },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1", barre: 5 },
    { string: 2, fret: R + 2, finger: "2", barre: 5 },
  ];
}

// ─── Augmented ───────────────────────────────────────────────────────────────
// E-aug open: 0-3-2-1-1-0  (descending staircase: +3/+2/+1/+1 offsets from barre)

function eShapeAug(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 0, fret: 0 },
      { string: 1, fret: 3, finger: "4" },
      { string: 2, fret: 2, finger: "3" },
      { string: 3, fret: 1, finger: "1" },
      { string: 4, fret: 1, finger: "2" },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 0, fret: R, finger: "1", barre: 5 },
    { string: 1, fret: R + 3, finger: "4" },
    { string: 2, fret: R + 2, finger: "3" },
    { string: 3, fret: R + 1, finger: "2", barre: 4 },
  ];
}

// A-aug open: x-0-3-2-2-1
function aShapeAug(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 3, finger: "4" },
      { string: 3, fret: 2, finger: "3" },
      { string: 4, fret: 2, finger: "2" },
      { string: 5, fret: 1, finger: "1" },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1" },
    { string: 2, fret: R + 3, finger: "4" },
    { string: 3, fret: R + 2, finger: "3", barre: 4 },
    { string: 5, fret: R + 1, finger: "2" },
  ];
}

// ─── Add9 ─────────────────────────────────────────────────────────────────────
// Aadd9 open: x-0-2-4-2-0  (9th at G+4 on str3)

function aShapeAdd9Low(R: number): ChordNote[] {
  // For low A_ROOT (0-2): 9th sits on str3 at R+4
  return [
    { string: 1, fret: R, finger: "1" },
    { string: 2, fret: R + 2, finger: "2" },
    { string: 3, fret: R + 4, finger: "4" },
    { string: 4, fret: R + 2, finger: "3" },
    { string: 5, fret: R },
  ];
}

// Cadd9 shape: x-3-2-0-3-0 — str4 carries the 9th; works when aR >= 3
function cShapeAdd9(R: number): ChordNote[] {
  const s3 = Math.max(0, R - 3);
  return [
    { string: 1, fret: R, finger: "3" },
    { string: 2, fret: R - 1, finger: "2" },
    { string: 3, fret: s3 },
    { string: 4, fret: R, finger: "4" },
    { string: 5, fret: s3 },
  ];
}

// Eadd9 shape: barre + 9th on str5 (eR+2)
function eShapeAdd9(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 0, fret: 0 },
      { string: 1, fret: 2, finger: "3" },
      { string: 3, fret: 1, finger: "2" },
      { string: 5, fret: 2, finger: "4" },
    ];
  }
  return [
    { string: 0, fret: R, finger: "1", barre: 5 },
    { string: 1, fret: R + 2, finger: "3" },
    { string: 3, fret: R + 1, finger: "2" },
    { string: 5, fret: R + 2, finger: "4" },
  ];
}

// ─── 7sus4 ────────────────────────────────────────────────────────────────────
// A7sus4 open: x-0-2-0-3-0  (str4=4th at R+3; str3,5 at R via barre = b7 and 5th)

function a7sus4Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 2, finger: "2" },
      { string: 3, fret: 0 },
      { string: 4, fret: 3, finger: "3" },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1", barre: 5 },
    { string: 2, fret: R + 2, finger: "3" },
    { string: 4, fret: R + 3, finger: "4" },
  ];
}

// E7sus4 open: 0-2-0-2-3-0  (str3=4th at R+2; str4=b7 at R+3)
function e7sus4Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 0, fret: 0 },
      { string: 1, fret: 2, finger: "2" },
      { string: 2, fret: 0 },
      { string: 3, fret: 2, finger: "3" },
      { string: 4, fret: 3, finger: "4" },
      { string: 5, fret: 0 },
    ];
  }
  return [
    { string: 0, fret: R, finger: "1", barre: 5 },
    { string: 1, fret: R + 2, finger: "2" },
    { string: 3, fret: R + 2, finger: "3" },
    { string: 4, fret: R + 3, finger: "4" },
  ];
}

// ─── Minor 9th ────────────────────────────────────────────────────────────────
// Em9 barre shape: barre at R + 9th on str5 (R+2); str4 via barre = b3

function em9Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 0, fret: 0 },
      { string: 1, fret: 2, finger: "2" },
      { string: 2, fret: 0 },
      { string: 3, fret: 0 },
      { string: 4, fret: 0 },
      { string: 5, fret: 2, finger: "3" },
    ];
  }
  return [
    { string: 0, fret: R, finger: "1", barre: 5 },
    { string: 1, fret: R + 2, finger: "3" },
    { string: 5, fret: R + 2, finger: "4" },
  ];
}

// Am9 shell: root/5th/b3/9th on str1-2-4-5 (no barre)
function am9Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 2, finger: "2" },
      { string: 4, fret: 1, finger: "1" },
      { string: 5, fret: 7, finger: "4" },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1" },
    { string: 2, fret: R + 2, finger: "3" },
    { string: 4, fret: R + 1, finger: "2" },
    { string: 5, fret: R + 7, finger: "4" },
  ];
}

// ─── Major 9th ────────────────────────────────────────────────────────────────
// Emaj9: Emaj7 barre shape with 9th added on str5 (R+2)

function emaj9Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 0, fret: 0 },
      { string: 1, fret: 2, finger: "4" },
      { string: 2, fret: 1, finger: "2" },
      { string: 3, fret: 1, finger: "3" },
      { string: 4, fret: 0 },
      { string: 5, fret: 2, finger: "4" },
    ];
  }
  return [
    { string: 0, fret: R, finger: "1", barre: 5 },
    { string: 1, fret: R + 2, finger: "4" },
    { string: 2, fret: R + 1, finger: "2", barre: 3 },
    { string: 5, fret: R + 2, finger: "4" },
  ];
}

// Amaj9 shell: root/5th/maj7/3rd on str1-2-3-4, 9th on str5 at R+7
function amaj9Shape(R: number): ChordNote[] {
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 2, finger: "3" },
      { string: 3, fret: 1, finger: "1" },
      { string: 4, fret: 2, finger: "2" },
      { string: 5, fret: 7, finger: "4" },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1" },
    { string: 2, fret: R + 2, finger: "3" },
    { string: 3, fret: R + 1, finger: "2" },
    { string: 4, fret: R + 2, finger: "4" },
    { string: 5, fret: R + 7, finger: "4" },
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
    case "aug":
      return [
        { label: "E+", notes: eShapeAug(eR) },
        { label: "A+", notes: aShapeAug(aR) },
      ];
    case "add9":
      return aR <= 2
        ? [
            { label: "A", notes: aShapeAdd9Low(aR) },
            { label: "E", notes: eShapeAdd9(eR) },
          ]
        : [
            { label: "C", notes: cShapeAdd9(aR) },
            { label: "E", notes: eShapeAdd9(eR) },
          ];
    case "sus4b":
      return [
        { label: "E7", notes: e7sus4Shape(eR) },
        { label: "A7", notes: a7sus4Shape(aR) },
      ];
    case "m9":
      return [
        { label: "Em9", notes: em9Shape(eR) },
        { label: "Am9", notes: am9Shape(aR) },
      ];
    case "maj9":
      return [
        { label: "E△9", notes: emaj9Shape(eR) },
        { label: "A△9", notes: amaj9Shape(aR) },
      ];
    default:
      return null;
  }
}
