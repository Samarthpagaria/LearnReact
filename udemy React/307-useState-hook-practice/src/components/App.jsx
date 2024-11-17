import React, { useState } from "react";

function App() {
  setInterval(currentTime, 1000);
  let now = new Date().toLocaleTimeString();

  const [currtime, setcurrTime] = useState(now);
  function currentTime() {
    const newTime = new Date().toLocaleTimeString();
    setcurrTime(newTime);
  }
  return (
    <div className="container">
      <h1>{currtime}</h1>
      <button onClick={currentTime}>Get Time</button>
    </div>
  );
}

export default App;
