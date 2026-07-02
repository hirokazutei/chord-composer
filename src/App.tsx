import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import ChordSequence from "./components/ChordSequence";
import { PALETTE } from "./constants/palette";

const styles = {
  app: {
    backgroundColor: PALETTE.background,
    display: "flex",
    flexDirection: "column" as const,
    height: "100vh",
    overflow: "hidden" as const,
  },
};

const App = () => {
  const [sequenceOpen, setSequenceOpen] = useState(false);
  return (
    <div style={styles.app}>
      <Header onOpenSequence={() => setSequenceOpen(true)} />
      <Body />
      {sequenceOpen && <ChordSequence onClose={() => setSequenceOpen(false)} />}
    </div>
  );
};

export default App;
