import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        src="https://plus.unsplash.com/premium_photo-1669842613532-1f0947aa6fa6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1711869090248-c71910429169?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1725025423001-7c4badaf14ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </div>
    <h1 style={{ color: "crimson" }}>
      {/* the first braces beacuseto be interpreted orrectly its should be inside
      curly braces and the secont inner braces is bcauz the style property only
      accepts js object so inorder to make its object it is inside braces */}
      next Lecture :learning about inline styling and how to do it{" "}
    </h1>
  </div>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
