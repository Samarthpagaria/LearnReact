import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const customStyle = {
  color: "",
};

const time = new Date().getHours();
let greeting;

if (time < 12) {
  greeting = "Good morning";
  customStyle.color = "red";
} else if (time < 18) {
  greeting = "Good afternoon";
  customStyle.color = "green"; // Corrected to green
} else {
  greeting = "Good evening"; // Corrected text to "Good evening"
  customStyle.color = "blue"; // Corrected to blue
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  </StrictMode>
);
