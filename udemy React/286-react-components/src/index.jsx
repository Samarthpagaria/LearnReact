import React from "react";
import ReactDOM from "react-dom";
import Heading from "./components/Heading";
import Lists from "./components/List";

ReactDOM.render(
  <div>
    <Heading />
    <Lists />
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
