import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "store/store";
import { GlobalStyles, StyleApp } from "./ui";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <StyleApp />
    <App />
  </Provider>,
);
