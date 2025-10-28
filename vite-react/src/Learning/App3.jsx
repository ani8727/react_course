import React from 'react'
import '../App.css'

// Conditional Rendering

function App3() {

    const isLoggedIn = false;
    // if(isLoggedIn){
    //     return <h1>Welcome Back User</h1>;
    // }
    // return <h1>Please Log In</h1>;
    const element = <h1>
        {isLoggedIn ?"Welcome back!" : "Please Login"}
        </h1> 

    const Message = ["1","Message"];   
    return (
        <>
        {element}

        {Message.length > 0 && <h2>You have Message {Message.length} length unread messages.</h2>}

        </>     
    )
}

export default App3;
