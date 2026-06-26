import React from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./redux/reducer";
import App from "./App";

const store = createStore(reducer);

const TheApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = createRoot(document.getElementById("root"));
root.render(<TheApp />);
