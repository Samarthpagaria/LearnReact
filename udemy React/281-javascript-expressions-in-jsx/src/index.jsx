import React from "react";
import ReactDOM from "react-dom";
const fname = "Samarth";
const lname = "Pagaria";
const number = Math.floor(Math.random() * 100);
console.log(number);

ReactDOM.render(
  <div>
    <h1>Your name is :{`${fname} ${lname}`}</h1>
    <h3>Your lucky number is :{number}</h3>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
