import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { INDEX_MODES } from "../../../constants/keys";
import { INSTRUMENTS } from "../../../constants/index";
import actionTypes from "../../../redux/actionTypes";
import { PALETTE } from "../../../constants/palette";
import DEFAULT_STYLE from "../../../constants/styles";
import type { Modes, State } from "../../../constants/types";

const styles = {
  border: {
    ...DEFAULT_STYLE.border,
    flexDirection: "column",
  },
  button: {
    ...DEFAULT_STYLE.button,
    fontSize: 13,
    minHeight: 44,
    minWidth: 110,
  },
  buttonSelected: {
    ...DEFAULT_STYLE.button,
    fontSize: 13,
    minHeight: 44,
    minWidth: 110,
    backgroundColor: PALETTE.accent,
    borderColor: PALETTE.accent,
    color: PALETTE.white,
    boxShadow: `0 0 16px ${PALETTE.accentGlow}`,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 6,
  },
  title: {
    ...DEFAULT_STYLE.title,
  },
  view: {
    margin: "8px 0",
  },
};

type StateProps = { currentMode: Modes };
type Props = Dispatch;

class ModeChanger extends Component<Props> {
  changeMode = (mode: string) => {
    this.props.dispatch({ type: actionTypes.CHANGE_MODE, mode });
  };

  render() {
    return (
      <div style={styles.view}>
        <div style={styles.border}>
          <h3 style={styles.title}>Mode</h3>
          <div style={styles.buttons}>
            {INDEX_MODES.slice(0, 4).map(mode => (
              <button
                onClick={() => this.changeMode(mode.value)}
                key={mode.value}
                style={
                  this.props.currentMode === mode.value
                    ? styles.buttonSelected
                    : styles.button
                }
              >
                {mode.display}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => {
  const { settings, custom } = state;
  if (custom) return { currentMode: "custom" };
  if (settings.instrument.text === INSTRUMENTS.guitar.text)
    return { currentMode: INSTRUMENTS.guitar.text };
  if (settings.instrument.text === INSTRUMENTS.ukulele.text)
    return { currentMode: INSTRUMENTS.ukulele.text };
  return { currentMode: "custom" };
};

export default connect(mapStateToProps)(ModeChanger);
