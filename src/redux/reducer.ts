import actionTypes from "./actionTypes";
import keys from "../constants/keys";
import { INSTRUMENTS } from "../constants/index";
import type { State } from "../constants/types";

export const initialState = {
  chordNotes: [],
  chordNames: [],
  custom: false,
  settings: {
    frets: 4,
    instrument: INSTRUMENTS.guitar,
    startingFret: 1
  },
  currentKey: "a",
  currentChord: "maj",
  customExtraName: false,
  customChordNotes: [
    { string: 1, fret: 1, finger: "1", barre: 5 },
    { string: 2, fret: 3, finger: "3", barre: null },
    { string: 4, fret: 3, finger: "4", barre: null }
  ],
  customChordNames: [
    {
      key: "A",
      sharp: true,
      flat: false,
      aux: ""
    }
  ],
  customSettings: {
    frets: 4,
    instrument: {
      strings: 6,
      text: "custom"
    },
    startingFret: 1
  },
  warning: ""
};

/**
 * Reducer
 * @param {State} state - State
 * @param {Action} action - Action
 */
export const reducer = (state: State = initialState, action: any): State => {
  const newState = { ...state };
  const newCustomSettings = { ...newState.customSettings };
  const newCustomChordNames = [...newState.customChordNames];
  const newCustomChordNotes = [...newState.customChordNotes];
  switch (action.type) {
    case actionTypes.CHANGE_KEY:
      newState.chordNames = keys[action.key][state.currentChord].chordNames;

      newState.chordNotes =
        keys[action.key][state.currentChord].chordNotes[
          state.settings.instrument.text
        ];
      newState.currentKey = action.key;
      break;
    case actionTypes.CHANGE_CHORD:
      newState.chordNames = keys[state.currentKey][action.chord].chordNames;
      newState.chordNotes =
        keys[state.currentKey][action.chord].chordNotes[
          state.settings.instrument.text
        ];
      newState.currentChord = action.chord;
      break;
    case actionTypes.CHANGE_MODE:
      switch (action.mode) {
        case INSTRUMENTS.guitar.text: {
          newState.settings.instrument = INSTRUMENTS.guitar;
          newState.chordNames =
            keys[state.currentKey][state.currentChord].chordNames;
          newState.chordNotes =
            keys[state.currentKey][state.currentChord].chordNotes[
              INSTRUMENTS.guitar.text
            ];
          newState.custom = false;
          break;
        }
        case INSTRUMENTS.ukulele.text: {
          newState.settings.instrument = INSTRUMENTS.ukulele;
          newState.chordNames =
            keys[state.currentKey][state.currentChord].chordNames;
          newState.chordNotes =
            keys[state.currentKey][state.currentChord].chordNotes[
              INSTRUMENTS.ukulele.text
            ];
          newState.custom = false;
          break;
        }
        default: {
          newState.custom = true;
          break;
        }
      }
      break;
    // CHANGE NAME
    case actionTypes.CHANGE_NAME: {
      newCustomChordNames[action.value.index].key = action.value.text;
      break;
    }
    // CHANGE AUX TEXT
    case actionTypes.CHANGE_AUX_TEXT: {
      newCustomChordNames[action.value.index].aux = action.value.text;
      break;
    }
    // CHANGE SUPER SYMBOL
    case actionTypes.CHANGE_SUPER_SYMBOL: {
      switch (action.value.shift) {
        case "sharp": {
          newCustomChordNames[action.value.index].sharp = true;
          newCustomChordNames[action.value.index].flat = false;
          break;
        }
        case "flat": {
          newCustomChordNames[action.value.index].sharp = false;
          newCustomChordNames[action.value.index].flat = true;
          break;
        }
        default: {
          newCustomChordNames[action.value.index].sharp = false;
          newCustomChordNames[action.value.index].flat = false;
          break;
        }
      }
      break;
    }
    // TOGGLE EXTRA NAME
    case actionTypes.CHANGE_EXTRA_NAME: {
      if (newState.customExtraName) {
        newCustomChordNames.pop();
        newState.customExtraName = false;
      } else {
        newCustomChordNames.push({
          key: "A",
          sharp: false,
          flat: false,
          aux: ""
        });
        newState.customExtraName = true;
      }

      break;
    }
    // CHANGE FRET
    case actionTypes.CHANGE_FRET: {
      if (action.value === 1) {
        if (newCustomSettings.frets < 16) {
          newCustomSettings.frets++;
          newState.warning = "";
        } else {
          newState.warning = "That's way too many frets!";
        }
      } else if (action.value === -1) {
        if (newCustomSettings.frets > 1) {
          newCustomSettings.frets--;
          newState.warning = "";
        } else {
          newState.warning = "You at least need one fret!";
        }
      }
      break;
    }
    // CHANGE FRET
    case actionTypes.CHANGE_STRING: {
      if (action.value === 1) {
        if (newCustomSettings.instrument.strings < 16) {
          newCustomSettings.instrument.strings++;
          newState.warning = "";
        } else {
          newState.warning = "That's way too many strings!";
        }
      } else if (action.value === -1) {
        if (newCustomSettings.instrument.strings > 2) {
          newCustomSettings.instrument.strings--;
          newState.warning = "";
        } else {
          newState.warning = "You at least need one strings!";
        }
      }
      break;
    }

    // CHANGE STARTING FRET
    case actionTypes.CHANGE_STARTING_FRET: {
      if (action.value === 1) {
        if (newCustomSettings.startingFret < 99) {
          newCustomSettings.startingFret++;
          newState.warning = "";
        } else {
          state.warning = "Your instrument has more than 99 frets?!";
        }
      } else if (action.value === -1) {
        if (newCustomSettings.startingFret > 1) {
          newCustomSettings.startingFret--;
          newState.warning = "";
        } else {
          newState.warning = "What the heck is 0th fret!";
        }
      }
      break;
    }
    // CHANGE_NOTE_STRING
    case actionTypes.CHANGE_NOTE_STRING: {
      if (isNaN(action.value)) {
        newState.warning = "Please enter a valid number for the string.";
        break;
      } else if (action.value < 0) {
        newState.warning = "Negative string does not make sense...";
        break;
      } else if (action.value >= newCustomSettings.instrument.strings) {
        newState.warning = `You've only got ${
          newCustomSettings.instrument.strings
        } strings there`;
        break;
      }
      newCustomChordNotes[action.index].string = Number(action.value);
      break;
    }
    // CHANGE_NOTE_FRET
    case actionTypes.CHANGE_NOTE_FRET: {
      if (isNaN(action.value)) {
        newState.warning = "Please enter a valid number for the fret.";
        break;
      } else if (action.value < 0) {
        newState.warning = "Negative fret does not make sense...";
        break;
      }
      newCustomChordNotes[action.index].fret = Number(action.value);
      break;
    }

    // CHANGE_NOTE_FINGER
    case actionTypes.CHANGE_NOTE_FINGER: {
      newCustomChordNotes[action.index].finger = action.value;
      break;
    }
    // CHANGE_NOTE_BARRE
    case actionTypes.CHANGE_NOTE_BARRE: {
      if (isNaN(action.value)) {
        newState.warning = "Please enter a valid number for the fret.";
        break;
      } else if (action.value < 0) {
        newState.warning = "Negative fret does not make sense...";
        break;
      } else if (action.value >= newCustomSettings.instrument.strings) {
        newState.warning = `You've only got ${
          newCustomSettings.instrument.strings
        } strings there`;
        break;
      }
      newCustomChordNotes[action.index].barre = Number(action.value);
      break;
    }

    // ADD_NOTE
    case actionTypes.ADD_NOTE: {
      newCustomChordNotes.push({
        string: 0,
        fret: 0,
        finger: null,
        barre: null
      });
      break;
    }
    // ADD_NOTE_AT
    case actionTypes.ADD_NOTE_AT: {
      newCustomChordNotes.push({
        string: action.string,
        fret: action.fret,
        finger: null,
        barre: null
      });
      break;
    }
    // DELETE_NOTE
    case actionTypes.DELETE_NOTE: {
      newCustomChordNotes.splice(action.index, 1);
      break;
    }
    // MOVE_NOTE
    case actionTypes.MOVE_NOTE: {
      const { index, direction } = action;
      const target = index + direction;
      if (target >= 0 && target < newCustomChordNotes.length) {
        const tmp = newCustomChordNotes[index];
        newCustomChordNotes[index] = newCustomChordNotes[target];
        newCustomChordNotes[target] = tmp;
      }
      break;
    }
    default:
      break;
  }
  return {
    ...newState,
    chordNames: newState.chordNames,
    chordNotes: newState.chordNotes,
    customSettings: newCustomSettings,
    customChordNotes: newCustomChordNotes,
    customChordNames: newCustomChordNames
  };
};
