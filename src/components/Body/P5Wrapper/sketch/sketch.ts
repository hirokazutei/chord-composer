import * as CONST from "../../../../constants";

/***
 * Apply Preset Settings for Non-Custom Renders
 * @param {Object} settings - Render Settings
 * @param {Object} chordNotes - The notes being rendered
 */
export const applyPresetSettings = (
  settings: any,
  chordNotes: any[]
) => {
  const { frets, startingFret } = settings;
  if (!chordNotes.length) {
    return settings;
  }
  const noteFrets = chordNotes.map(chordNote => chordNote.fret);
  const lowestFret = noteFrets.reduce((min: any, fret: any) => {
    if (!fret || !min) {
      return fret ? fret : min;
    }
    return min < fret ? min : fret;
  });
  const minFret = lowestFret ? lowestFret : 1;
  const highestFret = noteFrets.reduce((max: any, fret: any) => {
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
 * Render the Background Neck
 * @param {Sketch} sketch - P5JS Sketch
 * @param {Object} settings - Render settings
 */
export const renderNeck = (sketch: any, settings: any) => {
  standerdizeRenderSetting(sketch);
  const { frets, startingFret, instrument } = settings;
  const { strings } = instrument;

  // Render Frets
  const fretSpacing = CONST.NECK_HEIGHT / frets;
  for (let fret = 0; fret <= frets; fret++) {
    const weight =
      fret === 0 && startingFret === 1
        ? CONST.LINE_WEIGHT.thick
        : CONST.LINE_WEIGHT.standard;
    const capAdjust =
      fret === 0 && startingFret === 1
        ? CONST.CAP_ADJUST.thick
        : CONST.CAP_ADJUST.standard;
    sketch.strokeWeight(weight);
    sketch.line(
      CONST.NECK_WIDTH_MARGIN + capAdjust,
      CONST.TOP_SPACE + fretSpacing * fret,
      CONST.WIDTH - CONST.NECK_WIDTH_MARGIN - capAdjust,
      CONST.TOP_SPACE + fretSpacing * fret
    );
  }

  // Render Strings
  const stringSpacing = CONST.NECK_WIDTH / (strings - 1);
  for (let string = 0; string < strings; string++) {
    sketch.line(
      CONST.NECK_WIDTH_MARGIN + stringSpacing * string,
      CONST.TOP_SPACE,
      CONST.NECK_WIDTH_MARGIN + stringSpacing * string,
      CONST.TOP_SPACE + fretSpacing * frets
    );
  }
};

/**
 * Render Chord Name
 * @param {Sketch} sketch - P5JS Sketch
 * @param {list} chordNames - List of Chord Names
 */
export const renderChordName = (sketch: any, chordNames: any[]) => {
  standerdizeRenderSetting(sketch);
  let spacing = findTextStartingX(sketch, chordNames);
  if (!chordNames) {
    return;
  }
  for (let index = 0; index < chordNames.length; index++) {
    const chordName = chordNames[index];
    const { key, sharp, flat, aux } = chordName;
    // Main Chord
    sketch.textSize(CONST.TEXT_SIZE.standard);
    sketch.text(`${key}`, spacing, CONST.TEXT_HEIGHT);
    spacing += sketch.textWidth(key);

    // Sharp Flat
    sketch.textSize(CONST.TEXT_SIZE.subtext);
    const sharp_flat_spacing =
      key === "A" ? CONST.SPACING.flat_sharp : CONST.SPACING.flat_sharp_close;
    sketch.text(
      `${sharp ? "♯" : ""}${flat ? "♭" : ""}`,
      spacing - sharp_flat_spacing,
      CONST.TEXT_HEIGHT - CONST.SPACING.flat_sharp_height
    );

    // Aux Text
    if (aux) {
      sketch.text(`${aux}`, spacing, CONST.TEXT_HEIGHT);
      spacing += sketch.textWidth(aux);
    }

    // Add Dash
    if (chordNames.length !== 0 && index + 1 < chordNames.length) {
      sketch.textSize(CONST.TEXT_SIZE.standard);
      sketch.text(`/`, spacing + CONST.SPACING.dash, CONST.TEXT_HEIGHT);
      spacing += sketch.textWidth("/") + CONST.SPACING.dash;
    }
  }
};

/**
 * Find The Starting X Position
 * @param {Sketch} sketch - P5JS Sketch
 * @param {list} chordNames - List of Chord Names
 */
export const findTextStartingX = (
  sketch: any,
  chordNames: any[]
) => {
  let x = 0;
  if (!chordNames) {
    return;
  }
  for (let index = 0; index < chordNames.length; index++) {
    const chordName = chordNames[index];
    const { key, aux } = chordName;
    // Main Chord
    sketch.textSize(CONST.TEXT_SIZE.standard);
    x += sketch.textWidth(key);
    if (aux) {
      sketch.textSize(CONST.TEXT_SIZE.subtext);
      x += sketch.textWidth(aux);
    }
    if (index) {
      sketch.textSize(CONST.TEXT_SIZE.standard);
      x += sketch.textWidth("/");
    }
  }
  const startingX = (CONST.WIDTH - x) / 2;
  return startingX;
};

/**
 * Render Chord Notes
 * @param {Sketch} sketch - P5JS ketch
 * @param {array} chordNotes - List of Chord Notes
 * @param {Object} settings - Render Settings
 */
export const renderChordNotes = (
  sketch: any,
  chordNotes: any[],
  settings: any
) => {
  const { frets, instrument, startingFret } = settings;
  const { strings } = instrument;
  const openChords = new Array(instrument.strings).fill(false);
  const stringSpacing = CONST.NECK_WIDTH / (strings - 1);
  const fretSpacing = CONST.NECK_HEIGHT / frets;

  // Render Notes
  sketch.fill(CONST.COLOR.black);
  for (let chordNote of chordNotes) {
    const { string: noteString, fret: noteFret } = chordNote;
    const normalizedFret = noteFret ? noteFret - (startingFret - 1) : 0;
    if (isVisibleOnNeck(chordNote, startingFret, frets, instrument.strings)) {
      if (normalizedFret) {
        sketch.ellipse(
          CONST.NECK_WIDTH_MARGIN + stringSpacing * noteString,
          CONST.TOP_SPACE + fretSpacing * (normalizedFret - 0.5),
          CONST.SIZE.note
        );
      }
    }
    // Record Open/Close Chorse
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
      if (isVisibleOnNeck(chordNote, startingFret, frets, instrument.strings)) {
        for (let note of [noteString, maxBarre]) {
          sketch.ellipse(
            CONST.NECK_WIDTH_MARGIN + stringSpacing * note,
            CONST.TOP_SPACE + fretSpacing * (normalizedFret - 0.5),
            20
          );
        }
        sketch.rect(
          CONST.NECK_WIDTH_MARGIN + stringSpacing * noteString,
          CONST.TOP_SPACE +
            fretSpacing * (normalizedFret - 0.5) +
            CONST.SIZE.note,
          CONST.NECK_WIDTH_MARGIN + stringSpacing * maxBarre,
          CONST.TOP_SPACE +
            fretSpacing * (normalizedFret - 0.5) -
            CONST.SIZE.note
        );
      }
      // Record Open/Close Chorse
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
    if (isVisibleOnNeck(chordNote, startingFret, frets, instrument.strings)) {
      const normalizedFret = noteFret ? noteFret - (startingFret - 1) : 0;
      const maxBarre = barre ? (barre < strings ? barre : strings - 1) : 0;
      const fretSpacing = CONST.NECK_HEIGHT / frets;
      const x =
        CONST.NECK_WIDTH_MARGIN -
        CONST.SPACING.finger +
        (barre
          ? (stringSpacing * (noteString + maxBarre)) / 2
          : stringSpacing * noteString);
      const y =
        CONST.TOP_SPACE +
        fretSpacing * (normalizedFret ? normalizedFret - 0.5 : 0) +
        CONST.TEXT_SIZE.finger / 3;
      sketch.fill(CONST.COLOR.white);
      if (finger) {
        sketch.textSize(CONST.TEXT_SIZE.finger);
        sketch.text(finger, x, y);
      }
    }
  }

  // Render Open/Close Note
  if (!openChords) {
    return;
  }
  for (let index = 0; index < openChords.length; index++) {
    const openChord = openChords[index];
    if (openChord) {
      sketch.fill(CONST.COLOR.white);
      sketch.ellipse(
        CONST.NECK_WIDTH_MARGIN + stringSpacing * index,
        CONST.TOP_SPACE - CONST.SPACING.openNote,
        CONST.SIZE.openNote
      );
    } else if (openChord === false) {
      sketch.fill(CONST.COLOR.black);
      sketch.textSize(CONST.TEXT_SIZE.closedNote);
      sketch.text(
        "X",
        CONST.NECK_WIDTH_MARGIN +
          stringSpacing * index -
          CONST.SPACING.closedNoteH,
        CONST.TOP_SPACE - CONST.SPACING.closedNoteV
      );
    }
  }
};

/**
 * Render Starting Fret Text
 * @param {Sketch} sketch - P5JS Sketch
 * @param {Object} settings - the setting
 */
export const renderStartingFretText = (sketch: any, settings: any) => {
  const { startingFret } = settings;
  if (startingFret === 1) {
    return;
  }
  sketch.fill(CONST.COLOR.black);
  sketch.textSize(CONST.TEXT_SIZE.starting_fret);
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
    // NONE
  }
  sketch.text(
    `${startingFret}${suffix}`,
    CONST.WIDTH - CONST.SPACING.startingFretTextH,
    CONST.TOP_SPACE + CONST.SPACING.startingFretTextV
  );
};

/**
 * Checks If The Note Visible on Neck
 * @param {Object} chordNote - Chord Note object
 * @param {number} startingFret - Starting fret
 * @param {number} frets - Number of rendered frets
 * @param {number} strings - Number of rendered Strings
 */
export const isVisibleOnNeck = (
  chordNote: any,
  startingFret: number,
  frets: number,
  strings: number
): boolean => {
  const { string: noteString, fret: noteFret } = chordNote;
  return !(
    noteString >= strings ||
    noteFret < startingFret ||
    noteFret >= startingFret + frets
  );
};

/**
 * Standardizing Render Settings
 * @param {Sketch} sketch - P5JS Sketch
 */
export const standerdizeRenderSetting = (sketch: any) => {
  sketch.textSize(CONST.TEXT_SIZE.standard);
  sketch.fill(CONST.COLOR.black);
  sketch.strokeWeight(CONST.LINE_WEIGHT.standard);
};
