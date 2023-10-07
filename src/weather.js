import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./App.js";

import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
    </div>
    <small>Coded by Nobuhle</small><a href="https://github.com/Nobuhle17/weather-app.react">Open Source</a>
  </StrictMode>
);
