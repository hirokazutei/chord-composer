import keys from "./keys";
import { INSTRUMENTS } from "./index";
import type { ChordNote, ChordName } from "./types";

export type SuccessChord = {
  notes: ChordNote[];
  names: ChordName[];
  raw: string;
};

export type ErrorChord = {
  error: string;
  raw: string;
};

export type ParsedChord = SuccessChord | ErrorChord;

export function isError(c: ParsedChord): c is ErrorChord {
  return "error" in c;
}

// ─── Lookup tables ────────────────────────────────────────────────────────────

const ROOT_TO_KEY: Record<string, string> = {
  c: "c", "c#": "cd", db: "cd",
  d: "d", "d#": "de", eb: "de",
  e: "e",
  f: "f", "f#": "fg", gb: "fg",
  g: "g", "g#": "ga", ab: "ga",
  a: "a", "a#": "ab", bb: "ab",
  b: "b",
};

const QUALITY_TO_CHORD: Record<string, string> = {
  "": "maj", "maj": "maj", "M": "maj",
  "m": "min", "min": "min", "-": "min",
  "dim": "dim", "°": "dim",
  "7": "sev",
  "m7": "m7", "min7": "m7", "-7": "m7",
  "maj7": "maj7", "M7": "maj7", "△7": "maj7", "Δ7": "maj7",
  "sus4": "sus4", "sus": "sus4",
  "sus2": "sus2",
  "6": "six", "maj6": "six",
  "9": "dom9",
  "aug": "aug", "+": "aug",
  "add9": "add9", "add2": "add9", "(9)": "add9",
  "7sus4": "sus4b", "7sus": "sus4b",
  "m9": "m9", "min9": "m9", "-9": "m9",
  "maj9": "maj9", "M9": "maj9", "△9": "maj9", "Δ9": "maj9",
};

// Pitch class (0 = C)
const NOTE_TO_PC: Record<string, number> = {
  c: 0, "c#": 1, db: 1, d: 2, "d#": 3, eb: 3,
  e: 4, f: 5, "f#": 6, gb: 6, g: 7, "g#": 8,
  ab: 8, a: 9, "a#": 10, bb: 10, b: 11,
};

// Open string MIDI pitches — guitar strings 0–5
const OPEN_MIDI = [40, 45, 50, 55, 59, 64];

function noteMidi(name: string, octave: number): number | null {
  const pc = NOTE_TO_PC[name.toLowerCase()];
  if (pc === undefined) return null;
  return pc + 12 * (octave + 1);
}

// ─── Symbol mode ──────────────────────────────────────────────────────────────

function parseSymbolToken(token: string): ParsedChord {
  let raw = token;

  // Strip optional voicing index [n]
  const bracketMatch = token.match(/\[(\d+)\]$/);
  if (bracketMatch) {
    token = token.slice(0, token.length - bracketMatch[0].length);
  }

  const rootMatch = token.match(/^([A-Ga-g])(#|b)?/);
  if (!rootMatch) return { error: `Cannot parse root: "${token}"`, raw };

  const rootStr = (rootMatch[1] + (rootMatch[2] ?? "")).toLowerCase();
  const quality = token.slice(rootMatch[0].length);

  const key = ROOT_TO_KEY[rootStr];
  if (!key) return { error: `Unknown root: "${rootMatch[0]}"`, raw };

  const chord = QUALITY_TO_CHORD[quality];
  if (chord === undefined) return { error: `Unknown quality: "${quality || "(none)"}"`, raw };

  const entry = (keys as any)[key]?.[chord];
  if (!entry) return { error: `No chord data for "${raw}"`, raw };

  const notes: ChordNote[] = entry.chordNotes[INSTRUMENTS.guitar.text] ?? [];
  const names: ChordName[] = entry.chordNames ?? [];
  return { notes, names, raw };
}

// ─── Note mode ────────────────────────────────────────────────────────────────

function parseNoteLine(line: string): ParsedChord {
  const raw = line.trim();

  // Extract optional label: "Label"
  let label = "";
  let body = raw;
  const labelMatch = raw.match(/"([^"]*)"$/);
  if (labelMatch) {
    label = labelMatch[1];
    body = raw.slice(0, raw.length - labelMatch[0].length).trim();
  }

  const tokens = body.split(/\s+/).filter(Boolean);
  const notes: ChordNote[] = [];
  const errors: string[] = [];

  for (const tok of tokens) {
    // NoteOctave:String[~endString]  e.g. G#3:3~5
    const m = tok.match(/^([A-Ga-g][#b]?)(\d):(\d)(~(\d))?$/);
    if (!m) { errors.push(`Cannot parse "${tok}"`); continue; }

    const noteName = m[1].toLowerCase();
    const octave = parseInt(m[2], 10);
    const stringNum = parseInt(m[3], 10);
    const endString = m[5] !== undefined ? parseInt(m[5], 10) : undefined;

    if (stringNum < 0 || stringNum > 5) {
      errors.push(`String ${stringNum} out of range`); continue;
    }

    const midi = noteMidi(noteName, octave);
    if (midi === null) { errors.push(`Unknown note "${m[1]}"`); continue; }

    const fret = midi - OPEN_MIDI[stringNum];
    if (fret < 0) { errors.push(`${tok}: note too low for string ${stringNum}`); continue; }

    const note: ChordNote = { string: stringNum, fret };
    if (endString !== undefined) note.barre = endString;
    notes.push(note);
  }

  if (notes.length === 0) {
    return { error: errors.join("; ") || "Empty chord", raw };
  }

  const names: ChordName[] = label
    ? [{ key: label, sharp: false, flat: false, aux: "" }]
    : [];

  return { notes, names, raw };
}

// ─── Entry point ──────────────────────────────────────────────────────────────

export function parseChordSequence(text: string): ParsedChord[] {
  const trimmed = text.trim();
  if (!trimmed) return [];

  // Note mode: any token matches NoteOctave:String pattern
  const isNoteMode = /[A-Ga-g][#b]?\d:\d/.test(trimmed);

  if (isNoteMode) {
    return trimmed
      .split("\n")
      .map(l => l.trim())
      .filter(Boolean)
      .map(parseNoteLine);
  }

  // Symbol mode: strip bar lines, split on whitespace
  return trimmed
    .replace(/\|/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .map(parseSymbolToken);
}
