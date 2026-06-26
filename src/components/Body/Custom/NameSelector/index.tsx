import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import DEFAULT_STYLE from "../../../../constants/styles";
import type { ChordName, ExtraName, State } from "../../../../constants/types";

const styles = {
  addNameButton: {
    fontSize: 10,
    height: 40,
    width: 215,
    ...DEFAULT_STYLE.button,
    marginLeft: 10
  },
  border: {
    ...DEFAULT_STYLE.border
  },
  buttons: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "centre"
  },
  keyButtons: {
    flex: 1,
    fontSize: 10,
    height: 20,
    width: 20,
    ...DEFAULT_STYLE.button,
    margin: 3
  },
  mainNameInput: {
    color: PALETTE.tealDark,
    fontSize: 30,
    margin: 5,
    width: 70
  },
  row: {
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row" as const
  },
  slash: {
    color: PALETTE.teal,
    fontSize: 40
  },
  subTextInput: {
    color: PALETTE.tealDark,
    fontSize: 10,
    margin: 3,
    width: 70
  },
  title: {
    ...DEFAULT_STYLE.title
  },
  view: {
    margin: "10px 5px 10px 5px"
  },
  removeNameButton: {
    fontSize: 10,
    height: 40,
    width: 30,
    ...DEFAULT_STYLE.button,
    margin: 3,
    marginLeft: 10
  }
};

type StateProps = {
  customChordNames: Array<ChordName>;
  customExtraName: ExtraName;
};
type Props = { dispatch: Dispatch<AnyAction> } & StateProps;

/**
 * Name Selectors
 * @prop {Props} props - Properties
 */
class NameSelectors extends Component<Props> {
  /**
   * On Change Name
   * @param {number} index - Index of Name Changed
   * @param {Event} event - Typing Event
   */
  onChangeName = (index: number, event: any) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_NAME,
      value: { text: event.target.value, index }
    });
  };

  /**
   * On Change Aux TExt
   * @param {number} index - Index of Aux Text Changed
   * @param {Event} event - Typing Event
   */
  onChangeAuxText = (index: number, event: any) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_AUX_TEXT,
      value: { text: event.target.value, index }
    });
  };

  /**
   * On Change Super Symbol
   * @param {string} shift - The Note Shift
   * @param {number} index - Index of Super Symbol Changed
   */
  onChangeSuperSymbol = (shift: string, index: number) => {
    this.props.dispatch({
      type: actionTypes.CHANGE_SUPER_SYMBOL,
      value: { shift, index }
    });
  };

  /**
   * On Chnage Extra Name
   */
  onChangeExtraName = () => {
    this.props.dispatch({
      type: actionTypes.CHANGE_EXTRA_NAME
    });
  };

  /**
   * Render
   */
  render() {
    return (
      <div style={styles.view}>
        <div style={styles.border}>
          <h3 style={styles.title}>NAME</h3>
          <div style={styles.row}>
            <input
              style={styles.mainNameInput}
              type="text"
              onChange={this.onChangeName.bind(this, 0)}
              value={this.props.customChordNames[0].key}
            />
            <div>
              <div style={styles.buttons}>
                <button
                  style={styles.keyButtons}
                  onClick={() => this.onChangeSuperSymbol("flat", 0)}
                >
                  ♭
                </button>
                <button
                  style={styles.keyButtons}
                  onClick={() => this.onChangeSuperSymbol("sharp", 0)}
                >
                  ♯
                </button>
                <button
                  style={styles.keyButtons}
                  onClick={() => this.onChangeSuperSymbol("default", 0)}
                />
              </div>
              <input
                style={styles.subTextInput}
                type="text"
                onChange={this.onChangeAuxText.bind(this, 0)}
                value={this.props.customChordNames[0].aux}
              />
            </div>
            {this.props.customExtraName ? <p style={styles.slash}>/</p> : null}
            {this.props.customExtraName ? (
              <input
                style={styles.mainNameInput}
                type="text"
                onChange={this.onChangeName.bind(this, 1)}
                value={this.props.customChordNames[1].key}
              />
            ) : null}
            <div>
              {this.props.customExtraName ? (
                <div style={styles.buttons}>
                  <button
                    style={styles.keyButtons}
                    onClick={() => this.onChangeSuperSymbol("flat", 1)}
                  >
                    ♭
                  </button>
                  <button
                    style={styles.keyButtons}
                    onClick={() => this.onChangeSuperSymbol("sharp", 1)}
                  >
                    ♯
                  </button>
                  <button
                    style={styles.keyButtons}
                    onClick={() => this.onChangeSuperSymbol("default", 1)}
                  >
                    {" "}
                  </button>
                </div>
              ) : null}
              {this.props.customExtraName ? (
                <input
                  style={styles.subTextInput}
                  type="text"
                  onChange={this.onChangeAuxText.bind(this, 1)}
                  value={this.props.customChordNames[1].aux}
                />
              ) : null}
            </div>
            <div>
              <button
                style={
                  this.props.customExtraName
                    ? styles.removeNameButton
                    : styles.addNameButton
                }
                onClick={this.onChangeExtraName}
              >
                {this.props.customExtraName ? "<" : "ADD NAME"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * Map State to Props
 * @param {State} state - State
 */
const mapStateToProps = (state: State): StateProps => {
  const { customChordNames, customExtraName } = state;
  return { customChordNames, customExtraName };
};

export default connect(mapStateToProps)(NameSelectors);
