import type { ChordNote, Instrument } from "./types";

// Open string MIDI pitches — guitar strings 0–5, ukulele strings 0–3
const GUITAR_OPEN_MIDI = [40, 45, 50, 55, 59, 64];
const UKULELE_OPEN_MIDI = [67, 60, 64, 69]; // G4 C4 E4 A4

// Pitch class names
const PC_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// Enharmonic aliases shown as flat alternatives
const FLAT_ALIASES: Record<string, string> = {
  "C#": "Db", "D#": "Eb", "F#": "Gb", "G#": "Ab", "A#": "Bb",
};

function rootName(pc: number): string {
  return PC_NAMES[pc];
}

// ─── Chord type definitions ───────────────────────────────────────────────────
// required: intervals that MUST be present (besides root)
// allowed: full set of intervals permitted in this chord (including root)
// Intervals are semitones mod 12

type ChordDef = {
  id: string;       // internal chord code
  label: string;    // display suffix
  required: number[];
  allowed: number[];
  // Higher = prefer this match when interval sets are identical
  priority: number;
};

const CHORD_DEFS: ChordDef[] = [
  // 5-note extended chords first (most specific)
  { id: "maj9",  label: "maj9", required: [4, 11, 2],    allowed: [0,2,4,7,11],    priority: 10 },
  { id: "dom9",  label: "9",    required: [4, 10, 2],    allowed: [0,2,4,7,10],    priority: 10 },
  { id: "m9",    label: "m9",   required: [3, 10, 2],    allowed: [0,2,3,7,10],    priority: 10 },
  // 4-note chords
  { id: "maj7",  label: "maj7", required: [4, 11],       allowed: [0,4,7,11],      priority: 8 },
  { id: "sev",   label: "7",    required: [4, 10],       allowed: [0,4,7,10],      priority: 8 },
  { id: "m7",    label: "m7",   required: [3, 10],       allowed: [0,3,7,10],      priority: 8 },
  { id: "six",   label: "6",    required: [4, 9],        allowed: [0,4,7,9],       priority: 8 },
  { id: "sus4b", label: "7sus4",required: [5, 10],       allowed: [0,5,7,10],      priority: 8 },
  { id: "add9",  label: "add9", required: [4, 2],        allowed: [0,2,4,7],       priority: 7 },
  // 3-note triads
  { id: "maj",   label: "",     required: [4],           allowed: [0,4,7],         priority: 6 },
  { id: "min",   label: "m",    required: [3],           allowed: [0,3,7],         priority: 6 },
  { id: "dim",   label: "dim",  required: [3, 6],        allowed: [0,3,6],         priority: 6 },
  { id: "aug",   label: "aug",  required: [4, 8],        allowed: [0,4,8],         priority: 6 },
  { id: "sus4",  label: "sus4", required: [5],           allowed: [0,5,7],         priority: 5 },
  { id: "sus2",  label: "sus2", required: [2],           allowed: [0,2,7],         priority: 5 },
];

export type ChordGuess = {
  name: string;     // e.g. "Am7", "Cmaj9"
  chordId: string;  // internal code
  root: number;     // pitch class 0-11
  confidence: "full" | "partial";
};

function pitchClasses(notes: ChordNote[], openMidi: number[]): Set<number> {
  const pcs = new Set<number>();
  for (const n of notes) {
    if (n.fret === null || n.fret === undefined) continue;
    const stringMidi = openMidi[n.string];
    if (stringMidi === undefined) continue;
    pcs.add((stringMidi + n.fret) % 12);
  }
  return pcs;
}

function tryRoot(pcs: Set<number>, rootPc: number, def: ChordDef): "full" | "partial" | null {
  // Translate all pitch classes to intervals relative to this root
  const intervals = new Set([...pcs].map(pc => (pc - rootPc + 12) % 12));

  // Root must be present
  if (!intervals.has(0)) return null;

  // All required intervals must be present
  for (const r of def.required) {
    if (!intervals.has(r)) return null;
  }

  // All present intervals must be in allowed set
  const extraIntervals = [...intervals].filter(i => !def.allowed.includes(i));
  if (extraIntervals.length > 0) return null;

  // "full" if allowed set is fully covered, "partial" if some optional intervals absent
  const optionalPresent = def.allowed.filter(i => intervals.has(i)).length;
  return optionalPresent === def.allowed.length ? "full" : "partial";
}

export function identifyChord(notes: ChordNote[], instrument: Instrument): ChordGuess[] {
  const openMidi = instrument.text === "ukulele" ? UKULELE_OPEN_MIDI : GUITAR_OPEN_MIDI;
  const pcs = pitchClasses(notes, openMidi);

  if (pcs.size < 2) return [];

  const results: ChordGuess[] = [];

  for (const def of CHORD_DEFS) {
    for (let rootPc = 0; rootPc < 12; rootPc++) {
      if (!pcs.has(rootPc)) continue; // root must be one of the played notes
      const confidence = tryRoot(pcs, rootPc, def);
      if (!confidence) continue;

      const root = rootName(rootPc);
      const name = `${root}${def.label}`;
      results.push({ name, chordId: def.id, root: rootPc, confidence });
    }
  }

  // Sort: full confidence first, then by priority (more specific chord types first)
  results.sort((a, b) => {
    if (a.confidence !== b.confidence) return a.confidence === "full" ? -1 : 1;
    const pa = CHORD_DEFS.find(d => d.id === a.chordId)?.priority ?? 0;
    const pb = CHORD_DEFS.find(d => d.id === b.chordId)?.priority ?? 0;
    return pb - pa;
  });

  // Deduplicate by name
  const seen = new Set<string>();
  return results.filter(r => {
    if (seen.has(r.name)) return false;
    seen.add(r.name);
    return true;
  });
}

// Format the top results as a human-readable string
export function formatGuesses(guesses: ChordGuess[], max = 4): string {
  if (guesses.length === 0) return "Unknown";
  const top = guesses.slice(0, max);
  // Add flat alias alternatives for results with sharps
  const names = top.flatMap(g => {
    const base = PC_NAMES[g.root];
    const flat = FLAT_ALIASES[base];
    const suffix = CHORD_DEFS.find(d => d.id === g.chordId)?.label ?? "";
    return flat ? [`${base}${suffix}`, `${flat}${suffix}`] : [`${base}${suffix}`];
  });
  // Deduplicate
  return [...new Set(names)].slice(0, max + 2).join("  /  ");
}
