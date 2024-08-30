import { useState } from 'react';
import './App.css'

function App() {
  const [counter,setCounter] = useState(0)
  // let counter =5 ;
  function addValue(){
    if(counter<=19){
   setCounter(counter+1)
    }
  }
  function removeValue(){
    if(counter > 1){
    setCounter(counter - 1 );
    }
  }

  return (
    <>
      <h1>Welcome</h1>
      <h2>Counter vlaue : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
