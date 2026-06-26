import { PALETTE } from "./palette";

const DEFAULT_STYLE = {
  button: {
    backgroundColor: PALETTE.teal,
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.1)",
    color: PALETTE.textMuted,
    flex: 1,
    fontWeight: "600",
    fontSize: 13,
    letterSpacing: "0.05em",
    cursor: "pointer",
    transition: "all 0.15s ease",
  },
  border: {
    backgroundColor: PALETTE.surface,
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    padding: 14,
  },
  title: {
    alignSelf: "flex-start",
    color: PALETTE.textMuted,
    fontWeight: "700",
    fontSize: 11,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    margin: "0 0 10px 4px",
  },
};

export default DEFAULT_STYLE;
