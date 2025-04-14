import './App.css'
import React, { useState } from 'react';

function App() {
  let [count, setCount] = useState(0)

  const addvalue = () => {
    if (count < 20){
      setCount(count + 1)
    }
    
  }

  const removeValue = () => {
    if (count > 0){
      setCount(count - 1)
    }
    
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {count}</h2>

      <button onClick = {addvalue}>add - 1</button>
      <br/>

      <button onClick = {removeValue}>remove - 1</button>
    </>
  )
}

export default App
