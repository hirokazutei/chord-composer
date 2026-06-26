import React from "react";
import ModeChanger from "../ModeChanger";
import NameSelector from "./NameSelector";
import NeckSelector from "./NeckSelector";
import NoteSelector from "./NoteSelector";

const styles = {
  custom: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "start" as const,
    maxHeight: "100%",
    overflow: "scroll" as const,
    padding: 25,
  },
};

const Custom = () => (
  <div style={styles.custom}>
    <ModeChanger />
    <NeckSelector />
    <NameSelector />
    <NoteSelector />
  </div>
);

export default Custom;
