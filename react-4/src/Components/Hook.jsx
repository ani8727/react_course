import {useState } from 'react';
import { useEffect } from 'react';

function Hook() {
   const [count, setCount] = useState(0);
   const [anotherValue, setAnotherValue] = useState(0);

//    useEffect(() => {
//      document.title = `Count: ${count}`;
//    }, [count]);

//    const handleIncrement = () => {
//      setCount(count + 1);
//      document.title = `Count: ${count + 1}`;
//    };

    useEffect(() => {
      console.log("UseEffect called");
    }, []);

  return (
    <div>
      <h1>UseEffect Hooks</h1>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <button onClick={() => setAnotherValue(anotherValue)}>Another value</button>
    </div>
  )
}
export default Hook;