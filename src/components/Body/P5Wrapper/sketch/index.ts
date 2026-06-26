import * as CONST from "../../../../constants";
import * as tools from "./sketch";

type DragState =
  | { type: "move"; index: number; origString: number; origFret: number; curString: number; curFret: number }
  | { type: "new"; startString: number; startFret: number; curString: number; curFret: number };

function mouseToPos(mx: number, my: number, settings: any): { string: number; fret: number } | null {
  const { frets, startingFret, instrument } = settings;
  if (mx < CONST.NECK_WIDTH_MARGIN || mx > CONST.WIDTH - CONST.NECK_WIDTH_MARGIN) return null;
  if (my < CONST.TOP_SPACE || my > CONST.TOP_SPACE + CONST.NECK_HEIGHT) return null;
  const stringSpacing = CONST.NECK_WIDTH / (instrument.strings - 1);
  const fretSpacing = CONST.NECK_HEIGHT / frets;
  const str = Math.max(0, Math.min(instrument.strings - 1, Math.round((mx - CONST.NECK_WIDTH_MARGIN) / stringSpacing)));
  const fret = Math.ceil((my - CONST.TOP_SPACE) / fretSpacing) + startingFret - 1;
  return { string: str, fret };
}

function hitTestNotes(mx: number, my: number, notes: any[], settings: any): number {
  const { frets, startingFret, instrument } = settings;
  const stringSpacing = CONST.NECK_WIDTH / (instrument.strings - 1);
  const fretSpacing = CONST.NECK_HEIGHT / frets;
  const threshold = CONST.SIZE.note + 4;
  for (let i = 0; i < notes.length; i++) {
    const { string: s, fret: f } = notes[i];
    if (!f) continue;
    const nf = f - startingFret + 1;
    if (nf <= 0 || nf > frets) continue;
    const nx = CONST.NECK_WIDTH_MARGIN + stringSpacing * s;
    const ny = CONST.TOP_SPACE + fretSpacing * (nf - 0.5);
    if (Math.abs(mx - nx) <= threshold && Math.abs(my - ny) <= threshold) return i;
  }
  return -1;
}

function drawDragOverlay(p: any, drag: DragState, settings: any) {
  const { frets, startingFret, instrument } = settings;
  const stringSpacing = CONST.NECK_WIDTH / (instrument.strings - 1);
  const fretSpacing = CONST.NECK_HEIGHT / frets;

  p.push();
  p.noStroke();

  if (drag.type === "move") {
    const nf = drag.curFret - startingFret + 1;
    if (nf > 0 && nf <= frets) {
      const nx = CONST.NECK_WIDTH_MARGIN + stringSpacing * drag.curString;
      const ny = CONST.TOP_SPACE + fretSpacing * (nf - 0.5);
      p.fill(80, 80, 80, 180);
      p.ellipse(nx, ny, CONST.SIZE.note);
    }
  } else if (drag.type === "new" && drag.startString !== drag.curString) {
    // Horizontal drag preview — show barre
    const nf = drag.startFret - startingFret + 1;
    if (nf > 0 && nf <= frets) {
      const minStr = Math.min(drag.startString, drag.curString);
      const maxStr = Math.max(drag.startString, drag.curString);
      const y = CONST.TOP_SPACE + fretSpacing * (nf - 0.5);
      p.fill(80, 80, 80, 180);
      p.ellipse(CONST.NECK_WIDTH_MARGIN + stringSpacing * minStr, y, CONST.SIZE.note);
      p.ellipse(CONST.NECK_WIDTH_MARGIN + stringSpacing * maxStr, y, CONST.SIZE.note);
      p.rectMode(p.CORNERS);
      p.rect(
        CONST.NECK_WIDTH_MARGIN + stringSpacing * minStr,
        y + CONST.SIZE.note,
        CONST.NECK_WIDTH_MARGIN + stringSpacing * maxStr,
        y - CONST.SIZE.note
      );
    }
  }

  p.pop();
}

export default function sketch(p: any) {
  p.onNoteClick = (_s: number, _f: number, _barre?: number) => {};
  p.onMoveNote = (_index: number, _string: number, _fret: number) => {};

  let drag: DragState | null = null;

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
      if (drag) {
        p.ellipseMode(p.RADIUS);
        drawDragOverlay(p, drag, customSettings);
      }
    }
  };

  p.mousePressed = function () {
    if (!p.props.custom) return;
    const { customSettings, customChordNotes } = p.props;
    const hitIndex = hitTestNotes(p.mouseX, p.mouseY, customChordNotes, customSettings);
    if (hitIndex >= 0) {
      const n = customChordNotes[hitIndex];
      drag = { type: "move", index: hitIndex, origString: n.string, origFret: n.fret, curString: n.string, curFret: n.fret };
    } else {
      const pos = mouseToPos(p.mouseX, p.mouseY, customSettings);
      if (pos) {
        drag = { type: "new", startString: pos.string, startFret: pos.fret, curString: pos.string, curFret: pos.fret };
      }
    }
  };

  p.mouseDragged = function () {
    if (!drag || !p.props.custom) return;
    const pos = mouseToPos(p.mouseX, p.mouseY, p.props.customSettings);
    if (pos) {
      drag.curString = pos.string;
      drag.curFret = pos.fret;
    }
  };

  p.mouseReleased = function () {
    if (!drag || !p.props.custom) return;
    const { customChordNotes } = p.props;
    const d = drag;
    drag = null;

    if (d.type === "move") {
      if (d.curString !== d.origString || d.curFret !== d.origFret) {
        p.onMoveNote(d.index, d.curString, d.curFret);
      }
    } else {
      const sameFret = d.curFret === d.startFret;
      const sameString = d.curString === d.startString;

      if (sameString) {
        // Plain click: add if no duplicate
        const exists = customChordNotes.some((n: any) => n.string === d.startString && n.fret === d.startFret);
        if (!exists) p.onNoteClick(d.startString, d.startFret);
      } else if (sameFret) {
        // Horizontal drag: create barre
        const minStr = Math.min(d.startString, d.curString);
        const maxStr = Math.max(d.startString, d.curString);
        const exists = customChordNotes.some((n: any) => n.string === minStr && n.fret === d.startFret);
        if (!exists) p.onNoteClick(minStr, d.startFret, maxStr);
      } else {
        // Diagonal drag: add at release position
        const exists = customChordNotes.some((n: any) => n.string === d.curString && n.fret === d.curFret);
        if (!exists) p.onNoteClick(d.curString, d.curFret);
      }
    }
  };
}
