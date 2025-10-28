import React from 'react'
import { useState } from "react";
import '../App.css'

function App2() {
  const [showName, setShowName] = useState(false); 
  const element = <h1>Hello World</h1>;
  const name = "Vite + React";
  return (
    <>
     { element}
     <img src="/vite.svg" className="logo" alt="Vite logo" />
     <p className="read-the-docs">
       Click on the Vite and React logos to learn more
     </p>
     <button style={{background: 'green', color: 'white'}} onClick={() => setShowName(true)}>
        {showName ? name : "Click Me"}
      </button>
    </>
  )
}

export default App2;
