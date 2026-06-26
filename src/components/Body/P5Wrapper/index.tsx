import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import sketch from "./sketch";
import actionTypes from "../../../redux/actionTypes";
import type { State } from "../../../constants/types";
import { PALETTE } from "../../../constants/palette";

const styles = {
  base: {
    backgroundColor: PALETTE.surface,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: `0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.1)`,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    height: 710,
    padding: 20,
  },
  sketch: {
    height: 670,
    width: 520,
    borderRadius: 8,
    overflow: "hidden" as const,
  },
};

type Props = State & { addNoteAt: (string: number, fret: number) => void };

class P5Wrapper extends Component<Props> {
  canvas: any;

  componentDidMount() {
    this.canvas = new (window as any).p5(sketch, "canvas-container");
    this.canvas.props = this.props;
    this.canvas.onNoteClick = this.props.addNoteAt;
  }

  shouldComponentUpdate(nextProps: Props): boolean {
    this.canvas.props = nextProps;
    this.canvas.onNoteClick = nextProps.addNoteAt;
    return false;
  }

  componentWillUnmount() {
    this.canvas.remove();
  }

  render() {
    return (
      <div style={styles.base}>
        <div id="canvas-container" style={styles.sketch} />
      </div>
    );
  }
}

const mapStateToProps = (state: State) => state;
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  addNoteAt: (string: number, fret: number) =>
    dispatch({ type: actionTypes.ADD_NOTE_AT, string, fret }),
});

export default connect(mapStateToProps, mapDispatchToProps)(P5Wrapper);
