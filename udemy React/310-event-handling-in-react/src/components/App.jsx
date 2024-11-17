import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [ismouseover, setmouseover] = useState(false);

  function handleClick() {
    setHeadingText("Submitted");
  }
  function handleMouseOver() {
    setmouseover(true);
  }
  function handleMouseOut() {
    setmouseover(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onMouseOver={handleMouseOver}
        style={{ backgroundColor: ismouseover ? "black" : "white" }}
        onClick={handleClick}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
