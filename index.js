import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

// Get the root DOM element
const rootElement = document.getElementById("root");

// Create a root and render the App inside it
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
