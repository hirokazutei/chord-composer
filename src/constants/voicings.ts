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

// ─── Major (R  M3  P5) ───────────────────────────────────────────────────────

// key E:  E2=R  B2=5  E3=R  G#3=3  B3=5  E4=R
// key A:  A2=R  E3=5  A3=R  C#4=3  E4=5  A4=R
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

// key A:  x  A2=R  E3=5  A3=R  C#4=3  E4=5
// key D:  x  D3=R  A3=5  D4=R  F#4=3  A4=5
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

// ─── Minor (R  m3  P5) ───────────────────────────────────────────────────────

// key E:  E2=R  B2=5  E3=R  G3=m3  B3=5  E4=R
// key Am: A2=R  E3=5  A3=R  C4=m3  E4=5  A4=R
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

// key Am:  x  A2=R  E3=5  A3=R  C4=m3  E4=5
// key Dm:  x  D3=R  A3=5  D4=R  F4=m3  A4=5
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

// ─── Dominant 7th (R  M3  P5  m7) ───────────────────────────────────────────

// key E7:  E2=R  B2=5  D3=b7  G#3=3  B3=5  E4=R
// key A7:  A2=R  E3=5  G3=b7  C#4=3  E4=5  A4=R
// str2 falls to barre fret on the movable shape, which gives the b7 — intentional
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

// key A7:  x  A2=R  E3=5  G3=b7  C#4=3  E4=5
// key D7:  x  D3=R  A3=5  C4=b7  F#4=3  A4=5
// str3 and str5 sit at barre fret — b7 and 5th respectively
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

// ─── Minor 7th (R  m3  P5  m7) ───────────────────────────────────────────────

// key Em7:  E2=R  B2=5  D3=b7  G3=m3  B3=5  E4=R
// key Am7:  A2=R  E3=5  G3=b7  C4=m3  E4=5  A4=R
// str2,3,4,5 all sit at barre fret: b7, m3, 5th, root
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

// key Am7:  x  A2=R  E3=5  G3=b7  C4=m3  E4=5
// key Dm7:  x  D3=R  A3=5  C4=b7  F4=m3  A4=5
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

// ─── Major 7th (R  M3  P5  M7) ───────────────────────────────────────────────

// key Emaj7:  E2=R  B2=5  D#3=M7  G#3=3  B3=5  E4=R
// key Amaj7:  A2=R  E3=5  G#3=M7  C#4=3  E4=5  A4=R
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

// key Amaj7:  x  A2=R  E3=5  G#3=M7  C#4=3  E4=5
// key Dmaj7:  x  D3=R  A3=5  C#4=M7  F#4=3  A4=5
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

// ─── Sus4 (R  P4  P5 — no 3rd) ───────────────────────────────────────────────

// key Esus4:  E2=R  B2=5  E3=R  A3=4  B3=5  E4=R
// key Asus4:  A2=R  E3=5  A3=R  D4=4  E4=5  A4=R
// outer barre covers str0/4/5; mini-barre at R+2 covers str1(5th)/str2(R)/str3(4th)
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

// key Asus4:  x  A2=R  E3=5  A3=R  D4=4  E4=5
// key Dsus4:  x  D3=R  A3=5  D4=R  G4=4  A4=5
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

// ─── Sus2 (R  M2  P5 — no 3rd) ───────────────────────────────────────────────

// key Asus2:  x  A2=R  E3=5  A3=R  B3=2  E4=5
// key Dsus2:  x  D3=R  A3=5  D4=R  E4=2  A4=5
// str4 sits at barre fret giving M2; str5 gives P5
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

// key D:  x  x  D3=R  A3=5  D4=R  F#4=3
// key G:  x  x  G3=R  D4=5  G4=R  B4=3
// mini-barre at R+2 covers str3(5th)/str5(M3); str4 overrides at R+3 (root octave)
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

// key Dm:  x  x  D3=R  A3=5  D4=R  F4=m3
// key Gm:  x  x  G3=R  D4=5  G4=R  Bb4=m3
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

// key D7:  x  x  D3=R  A3=5  C4=b7  F#4=3
// key G7:  x  x  G3=R  D4=5  F4=b7  B4=3
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

// key Dm7:  x  x  D3=R  A3=5  C4=b7  F4=m3
// key Gm7:  x  x  G3=R  D4=5  F4=b7  Bb4=m3
// mini-barre at R+1 covers str4(b7) and str5(m3)
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

// key Dmaj7:  x  x  D3=R  A3=5  C#4=M7  F#4=3
// key Gmaj7:  x  x  G3=R  D4=5  F#4=M7  B4=3
// mini-barre at R+2 covers str3(5th)/str4(M7)/str5(M3)
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

// key Dsus4:  x  x  D3=R  A3=5  D4=R  G4=4
// key Gsus4:  x  x  G3=R  D4=5  G4=R  C5=4
// mini-barre at R+3 covers str4(root oct) and str5(P4)
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

// key Dsus2:  x  x  D3=R  A3=5  D4=R  E4=2
// key Gsus2:  x  x  G3=R  D4=5  G4=R  A4=2
// str5 at R gives M2 (one whole step above root on high-e string)
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

// key C (aR=3):  x  C3=R  E3=3  G3=5  C4=R  E4=3
// key F (aR=8):  x  F3=R  A3=3  C4=5  F4=R  A4=3
// Only valid when aR >= 3 (avoids negative frets on str3/str5).
// mini-barre at aR-3 covers str3(5th) and str5(M3); str4 overrides at aR-2 (root)
function cShapeMaj(aR: number): ChordNote[] {
  return [
    { string: 1, fret: aR, finger: "4" },
    { string: 2, fret: aR - 1, finger: "3" },
    { string: 3, fret: aR - 3, finger: "1", barre: 5 },
    { string: 4, fret: aR - 2, finger: "2" },
  ];
}

// ─── Major 6th (R  M3  P5  M6) ───────────────────────────────────────────────

// key E6:  E2=R  B2=5  E3=R  G#3=3  C#4=6  E4=R
// key A6:  A2=R  E3=5  A3=R  C#4=3  F#4=6  A4=R
// str2 explicitly fretted at R+2 (root) to avoid barre producing b7
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
    { string: 1, fret: R + 2, finger: "2" },
    { string: 2, fret: R + 2, finger: "3" },
    { string: 3, fret: R + 1, finger: "2" },
    { string: 4, fret: R + 2, finger: "4" },
  ];
}

// key A6:  x  A2=R  E3=5  A3=R  C#4=3  F#4=6
// key D6:  x  D3=R  A3=5  D4=R  F#4=3  B4=6
// mini-barre at R+2 covers str2(5th)/str3(R)/str4(M3)/str5(M6)
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

// ─── Augmented (R  M3  A5) ───────────────────────────────────────────────────

// key Eaug:  E2=R  C3=#5  E3=R  G#3=3  C4=#5  E4=R
// key Aaug:  A2=R  F3=#5  A3=R  C#4=3  F4=#5  A4=R
// mini-barre at R+1 covers str3(M3) and str4(A5); str1 and str2 individually fretted
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

// key Aaug:  x  A2=R  F3=#5  A3=R  C#4=3  F4=#5
// key Daug:  x  D3=R  Bb3=#5  D4=R  F#4=3  Bb4=#5
// mini-barre at R+2 covers str3(root)/str4(M3); str2 and str5 individually fretted
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

// ─── Add9 (R  M3  P5  M9 — no 7th) ──────────────────────────────────────────

// key Aadd9:  x  A2=R  E3=5  B3=9  C#4=3  E4=5   (used for aR=0,1,2)
// key Badd9:  x  B2=R  F#3=5  C#4=9  D#4=3  F#4=5
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

// key Cadd9 (aR=3):  x  C3=R  E3=3  G3=5  D4=9  E4=3
// key Dadd9 (aR=5):  x  D3=R  F#3=3  A3=5  E4=9  F#4=3
// str4 at aR gives M9; str3/str5 at aR-3 give 5th and M3
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

// key Eadd9 (open):  E2=R  B2=5  [str2 omitted]  G#3=3  [str4 omitted]  F#4=9
// key Aadd9 (barre): A2=R  E3=5  A3=R  C#4=3  E4=5  B4=9
// open: str2 and str4 deliberately omitted (no b7 to avoid)
// barre: str2 explicitly set to R+2 (root) to override barre's b7
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
    { string: 2, fret: R + 2 },
    { string: 3, fret: R + 1, finger: "2" },
    { string: 5, fret: R + 2, finger: "4" },
  ];
}

// ─── 7sus4 (R  P4  P5  m7 — no 3rd) ─────────────────────────────────────────

// key A7sus4:  x  A2=R  E3=5  G3=b7  D4=4  E4=5
// key D7sus4:  x  D3=R  A3=5  C4=b7  G4=4  A4=5
// str3 and str5 at barre fret give b7 and 5th; str4 at R+3 gives P4
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

// key E7sus4:  E2=R  B2=5  D3=b7  A3=4  D4=b7  E4=R
// key A7sus4:  A2=R  E3=5  G3=b7  D4=4  G4=b7  A4=R
// str2 at barre fret = b7; str3 at R+2 = P4; str4 at R+3 = b7 (doubling)
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

// ─── Minor 9th (R  m3  P5  m7  M9) ──────────────────────────────────────────

// key Em9:  E2=R  B2=5  D3=b7  G3=m3  B3=5  F#4=9
// key Am9:  A2=R  E3=5  G3=b7  C4=m3  E4=5  B4=9
// str2,3,4 at barre fret give b7, m3, 5th; str5 at R+2 gives M9
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

// key Am9 shell:  x  A2=R  E3=5  [str3 omitted]  C4=m3  B4=9
// key Dm9 shell:  x  D3=R  A3=5  [str3 omitted]  F4=m3  E4=9 (open)
// NOTE: this voicing omits the b7, making it technically Am(add9).
// It is a common shell voicing that implies m9 colour without the full stack.
// (R+7)%12 keeps the M9 on str5 within fret 0-11 across all keys
function am9Shape(R: number): ChordNote[] {
  const ninth = (R + 7) % 12;
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 2, finger: "2" },
      { string: 4, fret: 1, finger: "1" },
      { string: 5, fret: ninth, finger: "4" },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1" },
    { string: 2, fret: R + 2, finger: "3" },
    { string: 4, fret: R + 1, finger: "2" },
    { string: 5, fret: ninth, finger: "4" },
  ];
}

// ─── Major 9th (R  M3  P5  M7  M9) ──────────────────────────────────────────

// key Emaj9:  E2=R  B2=5  D#3=M7  G#3=3  B3=5  F#4=9
// key Amaj9:  A2=R  E3=5  G#3=M7  C#4=3  E4=5  B4=9
// mini-barre at R+1 covers str2(M7)/str3(M3); str5 at R+2 gives M9
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

// key Amaj9 shell:  x  A2=R  E3=5  G#3=M7  C#4=3  B4=9
// key Dmaj9 shell:  x  D3=R  A3=5  C#4=M7  F#4=3  E4=9 (open)
// (R+7)%12 keeps the M9 on str5 within fret 0-11 across all keys
function amaj9Shape(R: number): ChordNote[] {
  const ninth = (R + 7) % 12;
  if (R === 0) {
    return [
      { string: 1, fret: 0 },
      { string: 2, fret: 2, finger: "3" },
      { string: 3, fret: 1, finger: "1" },
      { string: 4, fret: 2, finger: "2" },
      { string: 5, fret: ninth, finger: "4" },
    ];
  }
  return [
    { string: 1, fret: R, finger: "1" },
    { string: 2, fret: R + 2, finger: "3" },
    { string: 3, fret: R + 1, finger: "2" },
    { string: 4, fret: R + 2, finger: "4" },
    { string: 5, fret: ninth, finger: "4" },
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
