import React from 'react'
import './App.css'

function App() {
  const element = <h1>Hello World</h1>;
  return (
    <>
     { element}
     <img src="/vite.svg" className="logo" alt="Vite logo" />
     <p className="read-the-docs">
       Click on the Vite and React logos to learn more
     </p>
    </>
  )
}

export default App;
