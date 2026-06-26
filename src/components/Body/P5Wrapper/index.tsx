import React, { Component } from "react";
import { connect } from "react-redux";
import sketch from "./sketch";
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

type Props = State;

class P5Wrapper extends Component<Props> {
  canvas: any;

  componentDidMount() {
    this.canvas = new (window as any).p5(sketch, "canvas-container");
    this.canvas.props = this.props;
  }

  shouldComponentUpdate(state: State): boolean {
    this.canvas.props = state;
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

export default connect((state: State): State => state)(P5Wrapper);
