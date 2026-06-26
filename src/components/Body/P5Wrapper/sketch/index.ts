import * as CONST from "../../../../constants";
import * as tools from "./sketch";

export default function sketch(p: any) {
  p.onSetAppState = () => {};

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
}
