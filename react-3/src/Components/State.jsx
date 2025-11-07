import './State.css'
import { useState} from 'react'


// states update are asynchronous 
// you need to user updater function for multiple state updates 
function State() {

  // State to hold the step value
  const [step, setStep] = useState(1);

  // State to hold the count value
  const [count, setCount] = useState(0);

  // increment Twiece 
  const IncrementTwice = () => {
    // setCount(count+step);
    // setCount(count+step); // its taking asynchronous update so both will take the same value of count
    setCount((prevCount) => prevCount + step);  // its calling arrow function two times with updated value of count
    setCount((prevCount) => prevCount + step);
  };

  const Increment = () => {
    if(count<10 && count+step<=10){
      setCount(count + step);
    } else{
      alert("Count cannot be more than 10");
    }
  };

  const Decrement = () => {
    if(count>0 && count-step>=0){
      setCount(count - step);
    } else{
      alert("Count cannot be less than 0");
    }
  };

  return (
    <>
    <div className="app-container">
      <h1>Counter value: {count} </h1>

      <input type="number"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value))}/>

      <button 
        onClick={Increment}>Increment
      </button>
      <button
        onClick={Decrement}>Decrement
      </button>
      <button onClick={IncrementTwice}>Increment Twice</button>
    </div>
    </>
  )
};

export default State;
