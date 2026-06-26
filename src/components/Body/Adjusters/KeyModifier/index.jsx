import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { INDEX_CHORD } from "../../../../constants/keys";
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
    minWidth: 90,
  },
  buttonSelected: {
    ...DEFAULT_STYLE.button,
    fontSize: 14,
    minHeight: 40,
    minWidth: 90,
    backgroundColor: PALETTE.accent,
    borderColor: PALETTE.accent,
    color: PALETTE.white,
    boxShadow: `0 0 12px ${PALETTE.accentGlow}`,
  },
  row: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
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

type StateProps = { currentChord: string };
type Props = Dispatch & StateProps;

class KeyModifier extends Component<Props> {
  changeChord = (chord: string) => {
    this.props.dispatch({ type: actionTypes.CHANGE_CHORD, chord });
  };

  render() {
    return (
      <div style={styles.view}>
        <div style={styles.border}>
          <h3 style={styles.title}>Chord</h3>
          <div style={styles.row}>
            {INDEX_CHORD.slice(0, 4).map(chord => (
              <button
                onClick={() => this.changeChord(chord.chord)}
                key={chord.chord}
                style={
                  this.props.currentChord === chord.chord
                    ? styles.buttonSelected
                    : styles.button
                }
              >
                {chord.display}
              </button>
            ))}
          </div>
          <div style={styles.row}>
            {INDEX_CHORD.slice(4, 8).map(chord => (
              <button
                onClick={() => this.changeChord(chord.chord)}
                key={chord.chord}
                style={
                  this.props.currentChord === chord.chord
                    ? styles.buttonSelected
                    : styles.button
                }
              >
                {chord.display}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => {
  const { currentChord } = state;
  return { currentChord };
};

export default connect(mapStateToProps)(KeyModifier);
