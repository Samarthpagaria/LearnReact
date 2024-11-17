import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(5);

  function increase() {
    setCount(count + 1); // Update state to increment count
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
