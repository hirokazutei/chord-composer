import React, { useState, useRef, useEffect } from "react";
import { PALETTE } from "../../constants/palette";
import DEFAULT_STYLE from "../../constants/styles";
import * as CONST from "../../constants";
import * as tools from "../Body/P5Wrapper/sketch/sketch";
import { parseChordSequence, isError } from "../../constants/chordParser";
import type { ParsedChord, SuccessChord } from "../../constants/chordParser";

const PREVIEW_W = 156;
const PREVIEW_H = 204;

const styles = {
  overlay: {
    position: "fixed" as const,
    inset: 0,
    backgroundColor: "rgba(8, 11, 20, 0.96)",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    zIndex: 1000,
    display: "flex",
    flexDirection: "column" as const,
  },
  header: {
    display: "flex",
    alignItems: "center" as const,
    justifyContent: "space-between" as const,
    padding: "18px 32px",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
  },
  title: {
    color: PALETTE.textPrimary,
    fontSize: 18,
    fontWeight: "700" as const,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    margin: 0,
  },
  closeBtn: {
    ...DEFAULT_STYLE.button,
    flex: "none",
    width: 36,
    height: 36,
    fontSize: 18,
    display: "flex",
    alignItems: "center" as const,
    justifyContent: "center" as const,
  },
  body: {
    display: "flex",
    flex: 1,
    gap: 24,
    padding: 32,
    overflow: "hidden" as const,
  },
  inputCol: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 12,
    width: 280,
    flexShrink: 0,
  },
  label: {
    ...DEFAULT_STYLE.title,
    margin: 0,
  },
  textarea: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 10,
    color: PALETTE.textPrimary,
    fontFamily: "monospace",
    fontSize: 14,
    lineHeight: 1.7,
    padding: 14,
    resize: "none" as const,
    outline: "none",
  },
  generateBtn: {
    ...DEFAULT_STYLE.button,
    flex: "none",
    padding: "10px 0",
    fontSize: 13,
    backgroundColor: PALETTE.accent,
    borderColor: PALETTE.accent,
    color: PALETTE.white,
    boxShadow: `0 0 12px ${PALETTE.accentGlow}`,
  },
  previewCol: {
    flex: 1,
    display: "flex",
    flexDirection: "column" as const,
    gap: 12,
    overflow: "hidden" as const,
  },
  previewScroll: {
    flex: 1,
    overflowX: "auto" as const,
    overflowY: "hidden" as const,
    display: "flex",
    alignItems: "flex-start" as const,
    gap: 12,
    padding: "4px 4px 12px",
  },
  chordCard: {
    flexShrink: 0,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    gap: 6,
  },
  chordImg: {
    width: PREVIEW_W,
    height: PREVIEW_H,
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.1)",
    objectFit: "contain" as const,
    backgroundColor: "#fff",
    cursor: "pointer",
  },
  chordLabel: {
    color: PALETTE.textMuted,
    fontSize: 11,
    letterSpacing: "0.06em",
  },
  errorCard: {
    flexShrink: 0,
    width: PREVIEW_W,
    height: PREVIEW_H,
    borderRadius: 8,
    border: "1px solid rgba(239,68,68,0.4)",
    backgroundColor: "rgba(239,68,68,0.08)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    padding: 10,
    gap: 6,
  },
  errorRaw: {
    color: "#ef4444",
    fontSize: 12,
    fontWeight: "700" as const,
    textAlign: "center" as const,
  },
  errorMsg: {
    color: PALETTE.textMuted,
    fontSize: 10,
    textAlign: "center" as const,
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end" as const,
    padding: "16px 32px",
    borderTop: "1px solid rgba(255,255,255,0.07)",
    gap: 10,
  },
  downloadBtn: {
    ...DEFAULT_STYLE.button,
    flex: "none",
    padding: "10px 20px",
    fontSize: 13,
  },
  placeholder: {
    color: PALETTE.textMuted,
    fontSize: 13,
    margin: "auto",
    opacity: 0.5,
  },
};

function renderChordToCanvas(notes: any[], names: any[], p: any): HTMLCanvasElement {
  const pg = p.createGraphics(CONST.WIDTH, CONST.HEIGHT);
  const settings = tools.applyPresetSettings(
    { frets: 4, startingFret: 1, instrument: CONST.INSTRUMENTS.guitar },
    notes
  );
  pg.background(255);
  pg.strokeCap(pg.PROJECT);
  pg.ellipseMode(pg.RADIUS);
  pg.rectMode(pg.CORNERS);
  tools.renderNeck(pg, settings);
  tools.renderChordName(pg, names);
  tools.renderChordNotes(pg, notes, settings);
  tools.renderStartingFretText(pg, settings);

  // Copy to a standalone canvas before removing the graphics buffer
  const out = document.createElement("canvas");
  out.width = CONST.WIDTH;
  out.height = CONST.HEIGHT;
  out.getContext("2d")!.drawImage(pg.elt, 0, 0);
  pg.remove();
  return out;
}

async function downloadStrip(canvases: HTMLCanvasElement[]) {
  const GAP = 16;
  const totalW = CONST.WIDTH * canvases.length + GAP * (canvases.length - 1);
  const strip = document.createElement("canvas");
  strip.width = totalW;
  strip.height = CONST.HEIGHT;
  const ctx = strip.getContext("2d")!;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, totalW, CONST.HEIGHT);
  for (let i = 0; i < canvases.length; i++) {
    ctx.drawImage(canvases[i], i * (CONST.WIDTH + GAP), 0);
  }
  strip.toBlob(blob => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "chord-sequence.png";
    a.click();
    URL.revokeObjectURL(url);
  }, "image/png");
}

type Props = { onClose: () => void };

export default function ChordSequence({ onClose }: Props) {
  const [text, setText] = useState("");
  const [parsed, setParsed] = useState<ParsedChord[]>([]);
  const [canvases, setCanvases] = useState<(HTMLCanvasElement | null)[]>([]);
  const p5Ref = useRef<any>(null);

  // Create a headless p5 instance for offscreen rendering
  useEffect(() => {
    const container = document.createElement("div");
    container.style.display = "none";
    document.body.appendChild(container);
    const p = new (window as any).p5((instance: any) => {
      instance.setup = () => { instance.noCanvas(); };
    }, container);
    p5Ref.current = p;
    return () => {
      p.remove();
      document.body.removeChild(container);
    };
  }, []);

  const generate = () => {
    if (!p5Ref.current) return;
    const result = parseChordSequence(text);
    setParsed(result);
    const rendered = result.map(chord =>
      isError(chord) ? null : renderChordToCanvas(chord.notes, chord.names, p5Ref.current)
    );
    setCanvases(rendered);
  };

  const download = () => {
    const valid = canvases.filter((c): c is HTMLCanvasElement => c !== null);
    if (valid.length > 0) downloadStrip(valid);
  };

  const successCount = canvases.filter(Boolean).length;

  return (
    <div style={styles.overlay}>
      <div style={styles.header}>
        <h2 style={styles.title}>Chord Sequence</h2>
        <button style={styles.closeBtn} onClick={onClose}>×</button>
      </div>

      <div style={styles.body}>
        {/* Input column */}
        <div style={styles.inputCol}>
          <span style={styles.label}>Input</span>
          <textarea
            style={styles.textarea}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder={"Symbol mode:\nAm7 Dm7 G7 Cmaj7\n\nNote mode:\nE2:0 B2:1 E3:2 G#3:3 \"E\"\nA2:1 E3:2 A3:3 C#4:4 \"A\""}
            spellCheck={false}
          />
          <button style={styles.generateBtn} onClick={generate}>
            Generate
          </button>
        </div>

        {/* Preview column */}
        <div style={styles.previewCol}>
          <span style={styles.label}>Preview</span>
          <div style={styles.previewScroll}>
            {parsed.length === 0 && (
              <span style={styles.placeholder}>Generated chords will appear here</span>
            )}
            {parsed.map((chord, i) => {
              if (isError(chord)) {
                return (
                  <div key={i} style={styles.errorCard}>
                    <span style={styles.errorRaw}>{chord.raw}</span>
                    <span style={styles.errorMsg}>{chord.error}</span>
                  </div>
                );
              }
              const canvas = canvases[i];
              return (
                <div key={i} style={styles.chordCard}>
                  {canvas && (
                    <img
                      style={styles.chordImg}
                      src={canvas.toDataURL("image/png")}
                      alt={chord.raw}
                      title="Click to download"
                      onClick={() => {
                        const a = document.createElement("a");
                        a.href = canvas.toDataURL("image/png");
                        a.download = `${chord.raw}.png`;
                        a.click();
                      }}
                    />
                  )}
                  <span style={styles.chordLabel}>{chord.raw}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div style={styles.footer}>
        {successCount > 0 && (
          <button style={styles.downloadBtn} onClick={download}>
            Download strip ({successCount} chord{successCount !== 1 ? "s" : ""})
          </button>
        )}
      </div>
    </div>
  );
}
