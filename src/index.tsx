import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

const container = document.getElementById("root");

if (!container)
  throw new Error("Unable to get container element by provided ID");

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
