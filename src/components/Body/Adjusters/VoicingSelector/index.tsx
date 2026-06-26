import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import { getVoicings } from "../../../../constants/voicings";
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
    fontSize: 18,
    minHeight: 40,
    flex: 1,
  },
  buttonDisabled: {
    ...DEFAULT_STYLE.button,
    fontSize: 18,
    minHeight: 40,
    flex: 1,
    opacity: 0.25,
    cursor: "not-allowed" as const,
  },
  counter: {
    display: "flex",
    alignItems: "center" as const,
    justifyContent: "center" as const,
    fontSize: 13,
    color: PALETTE.textPrimary,
    minWidth: 36,
    userSelect: "none" as const,
  },
  row: {
    display: "flex",
    flex: 1,
    flexDirection: "row" as const,
    gap: 4,
    alignItems: "center" as const,
  },
  title: {
    ...DEFAULT_STYLE.title,
  },
  view: {
    margin: "8px 0",
  },
};

type StateProps = {
  currentKey: string;
  currentChord: string;
  currentVoicingIndex: number;
  isGuitar: boolean;
};
type Props = { dispatch: Dispatch<AnyAction> } & StateProps;

class VoicingSelector extends Component<Props> {
  changeVoicing = (index: number) => {
    this.props.dispatch({ type: actionTypes.CHANGE_VOICING, index });
  };

  render() {
    const { currentKey, currentChord, currentVoicingIndex, isGuitar } = this.props;
    if (!isGuitar) return null;

    const voicings = getVoicings(currentKey, currentChord);
    if (!voicings) return null;

    const canUp = currentVoicingIndex > 0;
    const canDown = currentVoicingIndex < voicings.length - 1;

    return (
      <div style={styles.view}>
        <div style={styles.border}>
          <h3 style={styles.title}>Voicing</h3>
          <div style={styles.row}>
            <button
              style={canUp ? styles.button : styles.buttonDisabled}
              onClick={() => canUp && this.changeVoicing(currentVoicingIndex - 1)}
            >
              ↑
            </button>
            <span style={styles.counter}>
              {currentVoicingIndex + 1} / {voicings.length}
            </span>
            <button
              style={canDown ? styles.button : styles.buttonDisabled}
              onClick={() => canDown && this.changeVoicing(currentVoicingIndex + 1)}
            >
              ↓
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  currentKey: state.currentKey,
  currentChord: state.currentChord,
  currentVoicingIndex: state.currentVoicingIndex,
  isGuitar: state.settings.instrument.text === "guitar",
});

export default connect(mapStateToProps)(VoicingSelector);
