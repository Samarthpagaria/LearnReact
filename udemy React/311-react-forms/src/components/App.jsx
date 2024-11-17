import React from "react";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [finalname, setfinalname] = useState("");
  function handleChange(event) {
    setName(event.target.value);
  }
  function handleClick() {
    setfinalname(name);
  }
  return (
    <div className="container">
      <h1>Hello {finalname} </h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
