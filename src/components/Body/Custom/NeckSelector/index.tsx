import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import DEFAULT_STYLE from "../../../../constants/styles";
import type { Settings, State } from "../../../../constants/types";

const styles = {
  border: {
    ...DEFAULT_STYLE.border,
  },
  title: {
    ...DEFAULT_STYLE.title,
  },
  view: {
    margin: "8px 0",
  },
  row: {
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 8,
  },
  control: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: 6,
    flex: 1,
  },
  label: {
    color: PALETTE.textMuted,
    fontSize: 10,
    fontWeight: "700" as const,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    margin: 0,
  },
  value: {
    color: PALETTE.textPrimary,
    fontSize: 22,
    fontWeight: "600" as const,
    margin: 0,
    minWidth: 32,
    textAlign: "center" as const,
  },
  stepper: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 2,
  },
  stepBtn: {
    ...DEFAULT_STYLE.button,
    flex: "none",
    width: 28,
    height: 22,
    fontSize: 10,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  valueRow: {
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "center",
    gap: 8,
  },
};

type StateProps = { customSettings: Settings };
type Props = { dispatch: Dispatch<AnyAction> } & StateProps;

class NeckSelectors extends Component<Props> {
  onChangeFret = (step: number) => {
    this.props.dispatch({ type: actionTypes.CHANGE_FRET, value: step });
  };
  onChangeString = (step: number) => {
    this.props.dispatch({ type: actionTypes.CHANGE_STRING, value: step });
  };
  onChangeStartingFret = (step: number) => {
    this.props.dispatch({ type: actionTypes.CHANGE_STARTING_FRET, value: step });
  };

  renderControl(label: string, value: number, onInc: () => void, onDec: () => void) {
    return (
      <div style={styles.control}>
        <span style={styles.label}>{label}</span>
        <div style={styles.valueRow}>
          <span style={styles.value}>{value}</span>
          <div style={styles.stepper}>
            <button style={styles.stepBtn} onClick={onInc}>▲</button>
            <button style={styles.stepBtn} onClick={onDec}>▼</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { frets, startingFret, instrument } = this.props.customSettings;
    return (
      <div style={styles.view}>
        <div style={styles.border}>
          <h3 style={styles.title}>Neck</h3>
          <div style={styles.row}>
            {this.renderControl("Frets", frets, () => this.onChangeFret(1), () => this.onChangeFret(-1))}
            {this.renderControl("Strings", instrument.strings, () => this.onChangeString(1), () => this.onChangeString(-1))}
            {this.renderControl("Start", startingFret, () => this.onChangeStartingFret(1), () => this.onChangeStartingFret(-1))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  customSettings: state.customSettings,
});

export default connect(mapStateToProps)(NeckSelectors);
