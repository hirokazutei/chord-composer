export type Instrument = {
  strings: number;
  text: string;
  tuning?: string[];
};

export type Settings = {
  frets: number;
  instrument: Instrument;
  startingFret: number;
};

export type ChordName = {
  key: string;
  flat?: boolean;
  sharp?: boolean;
  aux?: string;
};

export type ChordNote = {
  string: number;
  fret: number | null;
  barre?: number | null;
  finger?: string | null;
};

export type Modes = "guitar" | "ukulele" | "custom";

export type ExtraName = boolean;

export type State = {
  chordNotes: ChordNote[];
  chordNames: ChordName[];
  custom: boolean;
  settings: Settings;
  currentKey: string;
  currentChord: string;
  customExtraName: ExtraName;
  customChordNotes: ChordNote[];
  customChordNames: ChordName[];
  customSettings: Settings;
  warning: string;
};
