import React from "react";
import ReactDOM from "react-dom";
import "./assets/style/index.scss";
import App from "./App";
import { AppProvider } from "./useGlobalContext";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
