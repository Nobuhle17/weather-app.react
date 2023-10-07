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
  </StrictMode>
);
