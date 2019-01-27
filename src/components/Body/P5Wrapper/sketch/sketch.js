/* @flow */
import * as C from "../../../../constants";
import type { ChordName, ChordNote, Instrument, Settings } from "./types";

/**
 * Render the Neck Portion of Chord
 * @param {Object} s - sketch
 * @param {Object} settings - render settings
 */
export const renderNeck = (s: any, settings: Settings) => {
  standerdizeRenderSetting(s);
  const { frets, startingFret, instrument } = settings;
  const { strings } = instrument;
  // Frets
  let fretSpacing = C.NECK_HEIGHT / frets;
  for (let fret = 0; fret <= frets; fret++) {
    let weight = C.LINE_WEIGHT.STANDARD;
    let capAdjust = C.CAP_ADJUST.STANDARD;
    if (fret === 0 && startingFret === 1) {
      weight = C.LINE_WEIGHT.THICK;
      capAdjust = C.CAP_ADJUST.THICK;
    }
    s.strokeWeight(weight);
    s.line(
      C.NECK_WIDTH_MARGIN + capAdjust,
      C.TOP_SPACE + fretSpacing * fret,
      C.WIDTH - C.NECK_WIDTH_MARGIN - capAdjust,
      C.TOP_SPACE + fretSpacing * fret
    );
  }

  // Strings
  const stringSpacing = C.NECK_WIDTH / (strings - 1);
  for (let string = 0; string < strings; string++) {
    s.line(
      C.NECK_WIDTH_MARGIN + stringSpacing * string,
      C.TOP_SPACE,
      C.NECK_WIDTH_MARGIN + stringSpacing * string,
      C.TOP_SPACE + fretSpacing * frets
    );
  }
};

/***
 * Render the Neck Portion of Chord
 * @param {Object} settings - render settings
 * @param {Object} chordNotes - the notes being represented
 */
export const applyPresetSettings = (
  settings: Settings,
  chordNotes: Array<ChordNote>
) => {
  const { custom, frets, startingFret } = settings;
  if (custom || !chordNotes.length) {
    return settings;
  }
  const noteFrets = chordNotes.map(chordNote => chordNote.fret);
  const lowestFret = noteFrets.reduce((min, fret) => {
    if (!fret || !min) {
      return fret ? fret : min;
    }
    return min < fret ? min : fret;
  });
  const minFret = lowestFret ? lowestFret : 1;
  const highestFret = noteFrets.reduce((max, fret) => {
    if (!fret || !max) {
      return fret ? fret : max;
    }
    return max > fret ? max : fret;
  });
  const maxFret = highestFret ? highestFret : 1;
  if (maxFret < frets + startingFret) {
    return settings;
  }
  return { ...settings, frets: 4, startingFret: minFret };
};

/**
 * Render Chord Name
 * @param {Object} s - sketch
 * @param {list} chordNames - list of ChordNames
 */
export const renderChordName = (s: any, chordNames: Array<ChordName>) => {
  standerdizeRenderSetting(s);
  let spacing = findTextStartingX(s, chordNames);
  if (!chordNames) {
    return;
  }
  for (const [index, chordName] of chordNames.entries()) {
    const { key, sharp, flat, aux } = chordName;
    // Main Chord
    s.textSize(C.TEXT_SIZE.STANDARD);
    s.text(`${key}`, spacing, C.TEXT_HEIGHT);
    spacing += s.textWidth(key);

    // Sharp Flat
    s.textSize(C.TEXT_SIZE.SUBTEXT);
    const sharp_flat_spacing = key === "A" ? 20 : 15;
    s.text(
      `${sharp ? "♯" : ""}${flat ? "♭" : ""}`,
      spacing - sharp_flat_spacing,
      C.TEXT_HEIGHT - 37
    ); // Kaz turn these into const

    // Aux Text
    if (aux) {
      s.text(`${aux}`, spacing, C.TEXT_HEIGHT);
      spacing += s.textWidth(aux);
    }

    // Add Dash
    if (chordNames.length !== 0 && index + 1 < chordNames.length) {
      s.textSize(C.TEXT_SIZE.STANDARD);
      s.text(`/`, spacing + 15, C.TEXT_HEIGHT);
      spacing += s.textWidth("/") + 15;
    }
  }
};

/**
 * Find The Starting X Position
 * @param {Object} s - sketch
 * @param {list} chordNames - list of ChordNames
 */
export const findTextStartingX = (s: any, chordNames: Array<ChordName>) => {
  let x = 0;
  if (!chordNames) {
    return;
  }
  for (let [index, chordName] of chordNames.entries()) {
    const { key, aux } = chordName;
    // Main Chord
    s.textSize(C.TEXT_SIZE.STANDARD);
    x += s.textWidth(key);
    if (aux) {
      s.textSize(C.TEXT_SIZE.SUBTEXT);
      x += s.textWidth(aux);
    }
    if (index) {
      s.textSize(C.TEXT_SIZE.STANDARD);
      x += s.textWidth("/");
    }
  }
  const startingX = (C.WIDTH - x) / 2;
  return startingX;
};

/**
 * Render Chord Notes
 * @param {Object} s - sketch
 * @param {list} chordNotes - of Chord Notes
 * @param {Object} settings - the setting
 */
export const renderChordNotes = (
  s: any,
  chordNotes: Array<ChordNote>,
  settings: Settings
) => {
  const { frets, instrument, startingFret } = settings;
  const { strings } = instrument;
  const openChords = new Array(instrument.strings).fill(false);
  const stringSpacing = C.NECK_WIDTH / (strings - 1);
  const fretSpacing = C.NECK_HEIGHT / frets;
  // Render Notes && Finger Positions
  s.fill(C.COLOR.BLACK);
  for (let chordNote of chordNotes) {
    const { string: noteString, fret: noteFret } = chordNote;
    // Render Notes
    const normalizedFret = noteFret ? noteFret - (startingFret - 1) : 0;
    if (normalizedFret) {
      s.ellipse(
        C.NECK_WIDTH_MARGIN + stringSpacing * noteString,
        C.TOP_SPACE + fretSpacing * (normalizedFret - 0.5),
        20
      ); // turn into const kaz
    }
    if (!normalizedFret) {
      openChords[noteString] = true;
    } else if (!openChords[noteString]) {
      openChords[noteString] = null;
    }
  }
  // Render Barre
  for (let chordNote of chordNotes) {
    const { barre, string: noteString, fret: noteFret } = chordNote;
    if (barre && noteFret !== null && noteFret !== undefined) {
      const normalizedFret = noteFret - (startingFret - 1);
      const maxBarre = barre < strings ? barre : strings - 1;
      for (let note of [noteString, maxBarre]) {
        s.ellipse(
          C.NECK_WIDTH_MARGIN + stringSpacing * note,
          C.TOP_SPACE + fretSpacing * (normalizedFret - 0.5),
          20
        ); // turn into const kaz
      }
      s.rect(
        C.NECK_WIDTH_MARGIN + stringSpacing * noteString,
        C.TOP_SPACE + fretSpacing * (normalizedFret - 0.5) + 20,
        C.NECK_WIDTH_MARGIN + stringSpacing * maxBarre,
        C.TOP_SPACE + fretSpacing * (normalizedFret - 0.5) - 20
      ); // turn into const kaz
      for (let i = noteString; i <= maxBarre; i++) {
        openChords[i] = null;
      }
    }
  }

  // Additional Closed Note
  for (let closedNote of chordNotes) {
    if (closedNote.fret === null) {
      openChords[closedNote.string] = false;
    }
  }

  // Render Finger
  for (let chordNote of chordNotes) {
    const { barre, string: noteString, finger, fret: noteFret } = chordNote;
    const normalizedFret = noteFret ? noteFret - (startingFret - 1) : 0;
    const maxBarre = barre ? (barre < strings ? barre : strings - 1) : 0;
    const fretSpacing = C.NECK_HEIGHT / frets;
    const x =
      C.NECK_WIDTH_MARGIN -
      10 +
      (barre
        ? (stringSpacing * (noteString + maxBarre)) / 2
        : stringSpacing * noteString);
    const y =
      C.TOP_SPACE + fretSpacing * (normalizedFret ? normalizedFret - 0.385 : 0);
    s.fill(C.COLOR.WHITE);
    if (finger) {
      s.textSize(36);
      s.text(finger, x, y);
    }
  }

  // Render Open/Close Note
  if (!openChords) {
    return;
  }
  for (let [index, openChord] of openChords.entries()) {
    if (openChord) {
      s.fill(255, 255, 255);
      s.ellipse(
        C.NECK_WIDTH_MARGIN + stringSpacing * index,
        C.TOP_SPACE - 25,
        15
      );
    } else if (openChord === false) {
      s.fill(0, 0, 0);
      s.textSize(40);
      s.text(
        "X",
        C.NECK_WIDTH_MARGIN + stringSpacing * index - 13,
        C.TOP_SPACE - 10
      );
    }
  }
};

/**
 * Render Chord Notes
 * @param {Object} s - sketch
 * @param {Object} settings - the setting
 */
export const renderFret = (s: any, settings: Settings) => {
  const { startingFret, frets } = settings;
  if (startingFret === 1) {
    return;
  }
  const fretSpacing = C.NECK_HEIGHT / frets;
  s.fill(0, 0, 0);
  s.textSize(30);
  let suffix = "th";
  switch (startingFret) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;
    case 3:
      suffix = "rd";
      break;
    default:
    // nothing
  }
  s.text(`${startingFret}${suffix}`, C.WIDTH - 70, C.TOP_SPACE + 20);
};

/*
export const changeInstrument = (currentInstrumentIndex, instruments) => {
  if (currentInstrumentIndex + 1 < instruments.length) {
    return ++currentInstrumentIndex;
  }
  return 0;
};

function mousePressed() {
  currentInstrumentIndex = changeInstrument(
    currentInstrumentIndex,
    C.INSTRUMENTS
  );
}*/

export const standerdizeRenderSetting = (s: any) => {
  s.textSize(C.TEXT_SIZE.STANDARD);
  s.fill(C.COLOR.BLACK);
  s.strokeWeight(C.LINE_WEIGHT.STANDARD);
};