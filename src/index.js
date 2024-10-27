import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App/App";
import { WindowProvider } from "./contexts/windowContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WindowProvider>
      <App />
    </WindowProvider>
  </React.StrictMode>
);
