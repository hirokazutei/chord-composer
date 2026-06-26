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

// E-shape major barre (root on string 0 at fret R)
// Notes: R/5th/root/3rd/5th/root  e.g. F at R=1: F-C-F-A-C-F
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

// A-shape major barre (root on string 1 at fret R, string 0 muted)
// Notes: root/5th/root/3rd/5th  e.g. Bb at R=1: Bb-F-Bb-D-F
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

// E-shape minor barre (root on string 0 at fret R)
// Notes: R/5th/root/b3rd/5th/root
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

// A-shape minor barre (root on string 1 at fret R, string 0 muted)
// Notes: root/5th/root/b3rd/5th
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

/** Returns computed voicings for guitar, or null if no voicings are defined. */
export function getVoicings(key: string, chord: string): Voicing[] | null {
  const eR = E_ROOT[key];
  const aR = A_ROOT[key];
  if (eR === undefined || aR === undefined) return null;

  if (chord === "maj") {
    return [
      { label: "E", notes: eShapeMaj(eR) },
      { label: "A", notes: aShapeMaj(aR) },
    ];
  }
  if (chord === "min") {
    return [
      { label: "E", notes: eShapeMin(eR) },
      { label: "A", notes: aShapeMin(aR) },
    ];
  }
  return null;
}
