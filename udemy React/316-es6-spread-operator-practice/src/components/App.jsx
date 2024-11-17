import React, { useState } from "react";

function App() {
  const [inputText, setInptText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInptText(newValue);
  }
  function handleClick(event) {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInptText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitems) => (
            <li>{todoitems}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
