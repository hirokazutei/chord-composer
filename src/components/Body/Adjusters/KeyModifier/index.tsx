import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { INDEX_CHORD } from "../../../../constants/keys";
import KEYS from "../../../../constants/keys";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import DEFAULT_STYLE from "../../../../constants/styles";
import type { State } from "../../../../constants/types";

const styles = {
  border: {
    ...DEFAULT_STYLE.border,
  },
  button: {
    ...DEFAULT_STYLE.button,
    fontSize: 14,
    minHeight: 40,
  },
  buttonSelected: {
    ...DEFAULT_STYLE.button,
    fontSize: 14,
    minHeight: 40,
    backgroundColor: PALETTE.accent,
    borderColor: PALETTE.accent,
    color: PALETTE.white,
    boxShadow: `0 0 12px ${PALETTE.accentGlow}`,
  },
  buttonDisabled: {
    ...DEFAULT_STYLE.button,
    fontSize: 14,
    minHeight: 40,
    opacity: 0.35,
    cursor: "not-allowed",
  },
  row: {
    display: "flex",
    flex: 1,
    flexDirection: "row" as const,
    gap: 4,
    marginBottom: 4,
  },
  title: {
    ...DEFAULT_STYLE.title,
  },
  view: {
    margin: "8px 0",
  },
};

type StateProps = { currentChord: string; currentKey: string; isUkulele: boolean };
type Props = { dispatch: Dispatch<AnyAction> } & StateProps;

class KeyModifier extends Component<Props> {
  changeChord = (chord: string, disabled: boolean) => {
    if (disabled) return;
    this.props.dispatch({ type: actionTypes.CHANGE_CHORD, chord });
  };

  isDisabled = (chordKey: string): boolean => {
    if (!this.props.isUkulele) return false;
    const keyData = (KEYS as any)[this.props.currentKey];
    if (!keyData) return false;
    const chordData = keyData[chordKey];
    if (!chordData) return false;
    return !chordData.chordNotes?.ukulele || chordData.chordNotes.ukulele.length === 0;
  };

  renderChordButton = (chord: { chord: string; display: string }) => {
    const disabled = this.isDisabled(chord.chord);
    const selected = this.props.currentChord === chord.chord;
    const style = disabled
      ? styles.buttonDisabled
      : selected
      ? styles.buttonSelected
      : styles.button;
    return (
      <button
        onClick={() => this.changeChord(chord.chord, disabled)}
        key={chord.chord}
        style={style}
        title={disabled ? "Not available for ukulele" : undefined}
      >
        {chord.display}
      </button>
    );
  };

  render() {
    return (
      <div style={styles.view}>
        <div style={styles.border}>
          <h3 style={styles.title}>Chord</h3>
          <div style={styles.row}>
            {INDEX_CHORD.slice(0, 5).map(chord => this.renderChordButton(chord))}
          </div>
          <div style={styles.row}>
            {INDEX_CHORD.slice(5, 10).map(chord => this.renderChordButton(chord))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => {
  const { currentChord, currentKey } = state;
  const isUkulele = state.settings?.instrument?.text === "ukulele";
  return { currentChord, currentKey, isUkulele };
};

export default connect(mapStateToProps)(KeyModifier);
