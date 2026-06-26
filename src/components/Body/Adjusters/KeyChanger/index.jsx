import React, { Component } from "react";
import { connect } from "react-redux";
import type { Dispatch } from "redux";
import { INDEX_KEYS } from "../../../../constants/keys";
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
    minWidth: 72,
  },
  buttonSelected: {
    ...DEFAULT_STYLE.button,
    fontSize: 14,
    minHeight: 40,
    minWidth: 72,
    backgroundColor: PALETTE.accent,
    borderColor: PALETTE.accent,
    color: PALETTE.white,
    boxShadow: `0 0 12px ${PALETTE.accentGlow}`,
  },
  row: {
    display: "flex",
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

type StateProps = { currentKey: string };
type Props = Dispatch & StateProps;

class KeyChanger extends Component<Props> {
  changeKey = (key: string) => {
    this.props.dispatch({ type: actionTypes.CHANGE_KEY, key });
  };

  render() {
    return (
      <div style={styles.view}>
        <div style={styles.border}>
          <h3 style={styles.title}>Key</h3>
          <div style={styles.row}>
            {INDEX_KEYS.slice(0, 6).map(key => (
              <button
                onClick={() => this.changeKey(key.key)}
                key={key.key}
                style={
                  this.props.currentKey === key.key
                    ? styles.buttonSelected
                    : styles.button
                }
              >
                {key.display}
              </button>
            ))}
          </div>
          <div style={styles.row}>
            {INDEX_KEYS.slice(6, 12).map(key => (
              <button
                onClick={() => this.changeKey(key.key)}
                key={key.key}
                style={
                  this.props.currentKey === key.key
                    ? styles.buttonSelected
                    : styles.button
                }
              >
                {key.display}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => {
  const { currentKey } = state;
  return { currentKey };
};

export default connect(mapStateToProps)(KeyChanger);
