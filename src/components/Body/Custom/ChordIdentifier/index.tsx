import React, { useState } from "react";
import { connect } from "react-redux";
import { PALETTE } from "../../../../constants/palette";
import DEFAULT_STYLE from "../../../../constants/styles";
import { identifyChord, formatGuesses } from "../../../../constants/chordIdentifier";
import type { State } from "../../../../constants/types";

const styles = {
  view: {
    margin: "8px 0",
  },
  border: {
    ...DEFAULT_STYLE.border,
    gap: 10,
  },
  title: {
    ...DEFAULT_STYLE.title,
  },
  row: {
    display: "flex",
    flexDirection: "row" as const,
    gap: 8,
    alignItems: "center" as const,
  },
  btn: {
    ...DEFAULT_STYLE.button,
    padding: "8px 0",
    fontSize: 13,
  },
  result: {
    fontSize: 15,
    fontWeight: "700" as const,
    color: PALETTE.textPrimary,
    letterSpacing: "0.04em",
    flex: 1,
    textAlign: "center" as const,
  },
  resultUnknown: {
    fontSize: 13,
    color: PALETTE.textMuted,
    flex: 1,
    textAlign: "center" as const,
  },
};

type StateProps = {
  customChordNotes: State["customChordNotes"];
  customSettings: State["customSettings"];
};

type Props = StateProps;

const ChordIdentifier = ({ customChordNotes, customSettings }: Props) => {
  const [result, setResult] = useState<string | null>(null);

  const identify = () => {
    const guesses = identifyChord(customChordNotes, customSettings.instrument);
    setResult(formatGuesses(guesses));
  };

  return (
    <div style={styles.view}>
      <div style={styles.border}>
        <h3 style={styles.title}>Identify</h3>
        <div style={styles.row}>
          <button style={styles.btn} onClick={identify}>
            Guess chord
          </button>
          {result !== null && (
            result === "Unknown"
              ? <span style={styles.resultUnknown}>Unknown</span>
              : <span style={styles.result}>{result}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State): StateProps => ({
  customChordNotes: state.customChordNotes,
  customSettings: state.customSettings,
});

export default connect(mapStateToProps)(ChordIdentifier);
