import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import P5Wrapper from "./P5Wrapper";
import Adjusters from "./Adjusters";
import Custom from "./Custom";
import type { State } from "../../constants/types";

const DESIGN_WIDTH = 1110;
const DESIGN_HEIGHT = 780;

const styles = {
  outer: {
    flex: 1,
    overflow: "hidden" as const,
    display: "flex",
    alignItems: "flex-start" as const,
    justifyContent: "center" as const,
  },
  inner: {
    width: DESIGN_WIDTH,
    height: DESIGN_HEIGHT,
    flexShrink: 0,
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "center" as const,
    alignItems: "flex-start" as const,
    padding: 32,
    gap: 24,
    transformOrigin: "top center",
  },
  rightSide: {
    display: "flex",
    flexDirection: "column" as const,
    width: 460,
    flexShrink: 0,
  },
};

type Props = { custom: boolean };

const Body = ({ custom }: Props) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    const update = () => {
      const scaleX = el.clientWidth / DESIGN_WIDTH;
      const scaleY = el.clientHeight / DESIGN_HEIGHT;
      setScale(Math.min(scaleX, scaleY, 1));
    };

    const ro = new ResizeObserver(update);
    ro.observe(el);
    update();
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={outerRef} style={styles.outer}>
      <div style={{ ...styles.inner, transform: `scale(${scale})` }}>
        <P5Wrapper />
        <div style={styles.rightSide}>
          {custom ? <Custom /> : <Adjusters />}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: State): Props => ({ custom: state.custom });

export default connect(mapStateToProps)(Body);
