import * as CONST from "../../../../constants";
import * as tools from "./sketch";

export default function sketch(p: any) {
  p.onSetAppState = () => {};
  p.onNoteClick = (_string: number, _fret: number) => {};

  p.setup = function () {
    p.createCanvas(CONST.WIDTH, CONST.HEIGHT);
  };

  p.draw = function () {
    p.background(CONST.COLOR.white);
    p.strokeCap(p.PROJECT);
    p.ellipseMode(p.RADIUS);
    p.rectMode(p.CORNERS);

    const { custom } = p.props;
    if (!custom) {
      const { chordNames, chordNotes, settings } = p.props;
      const presetSettings = tools.applyPresetSettings(settings, chordNotes);
      tools.renderNeck(p, presetSettings);
      tools.renderChordName(p, chordNames);
      tools.renderChordNotes(p, chordNotes, presetSettings);
      tools.renderStartingFretText(p, presetSettings);
    } else {
      const { customChordNames, customChordNotes, customSettings } = p.props;
      tools.renderNeck(p, customSettings);
      tools.renderChordName(p, customChordNames);
      tools.renderChordNotes(p, customChordNotes, customSettings);
      tools.renderStartingFretText(p, customSettings);
    }
  };

  p.mousePressed = function () {
    if (!p.props.custom) return;
    const { customSettings } = p.props;
    const { frets, startingFret, instrument } = customSettings;
    const { strings } = instrument;

    const mx = p.mouseX;
    const my = p.mouseY;

    // Only respond to clicks inside the neck area
    if (mx < CONST.NECK_WIDTH_MARGIN || mx > CONST.WIDTH - CONST.NECK_WIDTH_MARGIN) return;
    if (my < CONST.TOP_SPACE || my > CONST.TOP_SPACE + CONST.NECK_HEIGHT) return;

    const stringSpacing = CONST.NECK_WIDTH / (strings - 1);
    const fretSpacing = CONST.NECK_HEIGHT / frets;

    const stringIndex = Math.round((mx - CONST.NECK_WIDTH_MARGIN) / stringSpacing);
    const clampedString = Math.max(0, Math.min(strings - 1, stringIndex));

    const normalizedFret = Math.ceil((my - CONST.TOP_SPACE) / fretSpacing);
    const actualFret = normalizedFret + startingFret - 1;

    p.onNoteClick(clampedString, actualFret);
  };
}
