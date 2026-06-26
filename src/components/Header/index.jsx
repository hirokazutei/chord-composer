import React from "react";
import { PALETTE } from "../../constants/palette";

const styles = {
  header: {
    backgroundColor: PALETTE.header,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    display: "flex",
    alignItems: "center",
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 36,
    paddingRight: 36,
  },
  title: {
    color: PALETTE.textPrimary,
    fontSize: 22,
    fontWeight: "700",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  },
  dot: {
    display: "inline-block",
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: PALETTE.accent,
    marginLeft: 8,
    marginBottom: 2,
    verticalAlign: "middle",
    boxShadow: `0 0 8px ${PALETTE.accentGlow}`,
  },
};

const Header = () => (
  <div style={styles.header}>
    <h1 style={styles.title}>
      Chord Composer
      <span style={styles.dot} />
    </h1>
  </div>
);

export default Header;
