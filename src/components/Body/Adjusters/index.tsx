import React from "react";
import ModeChanger from "../ModeChanger";
import KeyChanger from "./KeyChanger";
import KeyModifier from "./KeyModifier";

const styles = {
  adjusters: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "start" as const,
    padding: 25,
  },
};

const Adjusters = () => (
  <div style={styles.adjusters}>
    <ModeChanger />
    <KeyChanger />
    <KeyModifier />
  </div>
);

export default Adjusters;
