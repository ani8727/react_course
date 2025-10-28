import React from 'react'
import '../App.css'

// Function  Rendering

function WelcomeMessage(name){
    return alert("Welcome "+ name);
}

function showAlert(condtion, messages){
    if(condtion){
        return ("Condition is true", messages);
    }
    return null;
}
function App4() {

    const now = new Date();
    const isMorning = now.getHours() < "12";
 
    return (
        <>
        <h1>Function Component</h1>
        <button 
        style={{background: 'green', color: 'red'}} onClick={() => WelcomeMessage("Aniket")}>
            Call function
        </button>

        <h2>Good {isMorning ? "Morning" : "Evening"}!</h2>

        {showAlert(true, "This is a message from showAlert function")}
        </>     
    )
}
export default App4;
