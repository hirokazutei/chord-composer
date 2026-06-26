import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import DEFAULT_STYLE from "../../../../constants/styles";
import type { ChordNote, State } from "../../../../constants/types";

const styles = {
  addButton: {
    flex: 1,
    height: 30,
    ...DEFAULT_STYLE.button,
  },
  border: {
    ...DEFAULT_STYLE.border,
  },
  noteInput: {
    color: PALETTE.tealDark,
    fontSize: 20,
    margin: 5,
    marginLeft: 15,
    marginRight: 15,
    width: 65,
  },
  deleteButton: {
    height: 25,
    backgroundColor: PALETTE.teal,
    borderRadius: 3,
    border: "none",
    color: PALETTE.white,
    fontWeight: "bold",
    margin: 5,
    marginLeft: 15,
    marginRight: 15,
    width: 65,
  },
  column: {
    alignItems: "center",
    justifyContent: "space-evenly",
    display: "flex",
    flex: 1,
    flesDirection: "column",
  },
  row: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row" as const,
    justifyContent: "space-evenly",
  },
  textSpace: {
    display: "flex",
    fontWeight: 20,
    margin: 5,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "center",
    width: 65,
  },
  text: {
    alignSelf: "center",
    color: PALETTE.teal,
    fontWeight: "normal",
    fontSize: 15,
    transform: "scaleY(1.2)",
  },

  title: {
    ...DEFAULT_STYLE.title,
  },
  view: {
    margin: "10px 5px 10px 5px",
  },
};

type StateProps = {
  customChordNotes: Array<ChordNote>;
};
type Props = { dispatch: Dispatch<AnyAction> } & StateProps;

/**
 * Note Selectors
 * @prop {Props} props - Properties
 * */
class NoteSelectors extends Component<Props> {
  /**
   * On Change Note Fret
   * @param {number} index - Index of Note Changed
   * @param {Event} event - Typing Event
   */
  onChangeNoteFret = (index: number, event: any) => {
    this.props.dispatch({
      index,
      type: actionTypes.CHANGE_NOTE_FRET,
      value: event.target.value,
    });
  };

  /**
   * On Change Note String
   * @param {number} index - Index of String Changed
   * @param {Event} event - Typing Event
   */
  onChangeNoteString = (index: number, event: any) => {
    this.props.dispatch({
      index,
      type: actionTypes.CHANGE_NOTE_STRING,
      value: event.target.value,
    });
  };

  /**
   * On Change Note Finger
   * @param {number} index - Index of Finger Changed
   * @param {Event} event - Typing Event
   */
  onChangeNoteFinger = (index: number, event: any) => {
    this.props.dispatch({
      index,
      type: actionTypes.CHANGE_NOTE_FINGER,
      value: event.target.value,
    });
  };

  /**
   * On Change Note Barre
   * @param {number} index - Index of Barre Changed
   * @param {Event} event - Typing Event
   */
  onChangeNoteBarre = (index: number, event: any) => {
    this.props.dispatch({
      index,
      type: actionTypes.CHANGE_NOTE_BARRE,
      value: event.target.value,
    });
  };

  /**
   * On Delete Note
   * @param {number} index - Index of Note Deleted
   */
  onDeleteNote = (index: number) => {
    this.props.dispatch({
      index,
      type: actionTypes.DELETE_NOTE,
    });
  };

  /**
   * On Add Note
   */
  onAddNote = () => {
    this.props.dispatch({
      type: actionTypes.ADD_NOTE,
    });
  };

  /**
   * Render
   */
  render() {
    return (
      <div style={styles.view}>
        <div style={styles.border}>
          <h3 style={styles.title}>{"NOTES"}</h3>
          <div style={styles.row}>
            <div style={styles.column}>
              <div style={styles.textSpace}>
                <h4 style={styles.text}>STRING</h4>
              </div>
              <div style={styles.textSpace}>
                <h4 style={styles.text}>FRET</h4>
              </div>

              <div style={styles.textSpace}>
                <h4 style={styles.text}>FINGER</h4>
              </div>

              <div style={styles.textSpace}>
                <h4 style={styles.text}>BARRE</h4>
              </div>

              <div style={styles.textSpace}>
                <h4 style={styles.text}>DELETE</h4>
              </div>
            </div>

            {this.props.customChordNotes.map((chordNote, index) => {
              return (
                <div style={styles.column} key={index}>
                  <input
                    style={styles.noteInput}
                    type="text"
                    onChange={this.onChangeNoteString.bind(this, index)}
                    value={this.props.customChordNotes[index].string}
                  />
                  <input
                    style={styles.noteInput}
                    type="text"
                    onChange={this.onChangeNoteFret.bind(this, index)}
                    value={this.props.customChordNotes[index].fret ?? ""}
                  />
                  <input
                    style={styles.noteInput}
                    type="text"
                    onChange={this.onChangeNoteFinger.bind(this, index)}
                    value={
                      this.props.customChordNotes[index].finger
                        ? this.props.customChordNotes[index].finger
                        : ""
                    }
                  />
                  <input
                    style={styles.noteInput}
                    type="text"
                    onChange={this.onChangeNoteBarre.bind(this, index)}
                    value={
                      this.props.customChordNotes[index].barre
                        ? this.props.customChordNotes[index].barre
                        : ""
                    }
                  />
                  <button
                    style={styles.deleteButton}
                    onClick={this.onDeleteNote.bind(this, index)}
                  >
                    X
                  </button>
                </div>
              );
            })}
            <div style={styles.column}>
              <button style={styles.addButton} onClick={this.onAddNote}>
                + ADD ANOTHER NOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => {
  const { customChordNotes } = state;
  return { customChordNotes };
};

export default connect(mapStateToProps)(NoteSelectors);
