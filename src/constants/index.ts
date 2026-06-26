export const WIDTH = 520;
export const HEIGHT = 680;
export const NECK_WIDTH = 360;
export const NECK_HEIGHT = 480;
export const TOP_SPACE = 150;
export const BOT_SPACE = 40;
export const NECK_WIDTH_MARGIN = (WIDTH - NECK_WIDTH) / 2;
export const TEXT_HEIGHT = 105;

// Text Sizes
export const TEXT_SIZE = {
  closedNote: 40,
  finger: 35,
  standard: 100,
  subtext: 45,
  starting_fret: 30
};

// Line weights
export const LINE_WEIGHT = {
  standard: 4,
  thick: 10
};

// Spacing between objects
export const SPACING = {
  closedNoteH: 13,
  closedNoteV: 10,
  dash: 15,
  finger: 10,
  flat_sharp: 20,
  flat_sharp_close: 15,
  flat_sharp_height: 40,
  openNote: 25,
  startingFretTextH: 70,
  startingFretTextV: 20
};

// Caps of Lines
export const CAP_ADJUST = {
  standard: 0,
  thick: 3
};

// Size of rendered objects
export const SIZE = {
  note: 20,
  openNote: 15
};

// Color
export const COLOR = {
  white: 255,
  black: 0
};

// Instruments
const GUITAR = {
  text: "guitar",
  strings: 6,
  tuning: ["E", "A", "D", "G", "B", "e"]
};
const UKULELE = {
  text: "ukulele",
  strings: 4,
  tuning: ["G", "C", "E", "A"]
};

export const INSTRUMENTS = { guitar: GUITAR, ukulele: UKULELE };
