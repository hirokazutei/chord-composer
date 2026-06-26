import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import actionTypes from "../../../../redux/actionTypes";
import { PALETTE } from "../../../../constants/palette";
import DEFAULT_STYLE from "../../../../constants/styles";
import type { ChordNote, State } from "../../../../constants/types";

const COL_WIDTHS = [52, 52, 52, 52];

const styles = {
  border: {
    ...DEFAULT_STYLE.border,
    padding: "12px 10px",
  },
  title: {
    ...DEFAULT_STYLE.title,
  },
  view: {
    margin: "8px 0",
  },
  // Header row
  headerRow: {
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "center",
    marginBottom: 6,
    paddingLeft: 32, // offset for the order buttons column
  },
  headerCell: {
    color: PALETTE.textMuted,
    fontSize: 10,
    fontWeight: "700" as const,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    textAlign: "center" as const,
    margin: 0,
  },
  // Note rows
  noteRow: {
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "center",
    marginBottom: 5,
    gap: 4,
  },
  orderButtons: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 2,
    width: 24,
    flexShrink: 0,
  },
  orderBtn: {
    ...DEFAULT_STYLE.button,
    flex: "none",
    width: 24,
    height: 18,
    fontSize: 8,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    minWidth: "unset",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: 6,
    color: PALETTE.textPrimary,
    fontSize: 14,
    fontWeight: "500" as const,
    textAlign: "center" as const,
    padding: "4px 0",
    outline: "none",
    transition: "border-color 0.15s",
  },
  fingerInput: {
    backgroundColor: "rgba(99,102,241,0.12)",
    border: "1px solid rgba(99,102,241,0.3)",
    borderRadius: 6,
    color: PALETTE.accent,
    fontSize: 14,
    fontWeight: "600" as const,
    textAlign: "center" as const,
    padding: "4px 0",
    outline: "none",
    transition: "border-color 0.15s, background-color 0.15s",
    cursor: "text",
  },
  deleteBtn: {
    ...DEFAULT_STYLE.button,
    flex: "none",
    width: 24,
    height: 38,
    fontSize: 11,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    color: "#f87171",
    borderColor: "rgba(248,113,113,0.2)",
    backgroundColor: "rgba(248,113,113,0.08)",
    minWidth: "unset",
  },
  addRow: {
    display: "flex",
    marginTop: 8,
  },
  addBtn: {
    ...DEFAULT_STYLE.button,
    flex: 1,
    height: 32,
    fontSize: 12,
    letterSpacing: "0.06em",
  },
};

type StateProps = { customChordNotes: Array<ChordNote> };
type Props = { dispatch: Dispatch<AnyAction> } & StateProps;

class NoteSelectors extends Component<Props> {
  dispatch = (type: string, index: number, extra?: object) => {
    this.props.dispatch({ type, index, ...extra });
  };

  render() {
    const { customChordNotes } = this.props;
    const colW = COL_WIDTHS;

    return (
      <div style={styles.view}>
        <div style={styles.border}>
          <h3 style={styles.title}>Notes</h3>

          <div style={styles.headerRow}>
            <span style={{ ...styles.headerCell, width: colW[0] }}>String</span>
            <span style={{ ...styles.headerCell, width: colW[1] }}>Fret</span>
            <span style={{ ...styles.headerCell, width: colW[2] }}>Finger</span>
            <span style={{ ...styles.headerCell, width: colW[3] }}>Barre</span>
          </div>

          {customChordNotes.map((note, i) => (
            <div style={styles.noteRow} key={i}>
              <div style={styles.orderButtons}>
                <button
                  style={styles.orderBtn}
                  onClick={() => this.dispatch(actionTypes.MOVE_NOTE, i, { direction: -1 })}
                  title="Move up"
                >▲</button>
                <button
                  style={styles.orderBtn}
                  onClick={() => this.dispatch(actionTypes.MOVE_NOTE, i, { direction: 1 })}
                  title="Move down"
                >▼</button>
              </div>

              <input
                style={{ ...styles.input, width: colW[0] }}
                type="number"
                min={0}
                onChange={e => this.dispatch(actionTypes.CHANGE_NOTE_STRING, i, { value: e.target.value })}
                value={note.string}
              />
              <input
                style={{ ...styles.input, width: colW[1] }}
                type="number"
                min={0}
                onChange={e => this.dispatch(actionTypes.CHANGE_NOTE_FRET, i, { value: e.target.value })}
                value={note.fret ?? ""}
              />
              <input
                style={{ ...styles.fingerInput, width: colW[2] }}
                type="text"
                maxLength={2}
                placeholder="–"
                onChange={e => this.dispatch(actionTypes.CHANGE_NOTE_FINGER, i, { value: e.target.value })}
                value={note.finger ?? ""}
                title="Click to set finger number"
              />
              <input
                style={{ ...styles.input, width: colW[3] }}
                type="number"
                min={0}
                placeholder="–"
                onChange={e => this.dispatch(actionTypes.CHANGE_NOTE_BARRE, i, { value: e.target.value })}
                value={note.barre ?? ""}
              />

              <button
                style={styles.deleteBtn}
                onClick={() => this.dispatch(actionTypes.DELETE_NOTE, i)}
                title="Delete note"
              >✕</button>
            </div>
          ))}

          <div style={styles.addRow}>
            <button
              style={styles.addBtn}
              onClick={() => this.props.dispatch({ type: actionTypes.ADD_NOTE })}
            >
              + Add Note
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State): StateProps => ({
  customChordNotes: state.customChordNotes,
});

export default connect(mapStateToProps)(NoteSelectors);
