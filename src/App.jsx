import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { PALETTE } from "./constants/palette";

const styles = {
  app: {
    backgroundColor: PALETTE.background,
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "hidden",
  },
};

const App = () => (
  <div style={styles.app}>
    <Header />
    <Body />
  </div>
);

export default App;
