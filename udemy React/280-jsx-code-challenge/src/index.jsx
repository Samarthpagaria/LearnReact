//Create a react app from scratch.
//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <h1>Hello</h1>
      <ul>
        <li>1st element</li>
        <li>2nd element</li>
        <li>3rd element</li>
      </ul>
    </>
  </StrictMode>
);
