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

    const n = voicings.length;
    const current = currentVoicingIndex < 0 ? 0 : currentVoicingIndex;

    return (
      <div style={styles.view}>
        <div style={styles.border}>
          <h3 style={styles.title}>Voicing</h3>
          <div style={styles.row}>
            <button
              style={styles.button}
              onClick={() => this.changeVoicing((current - 1 + n) % n)}
            >
              ↑
            </button>
            <button
              style={styles.button}
              onClick={() => this.changeVoicing((current + 1) % n)}
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
