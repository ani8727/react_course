import './State.css';
import { useState } from 'react';

function State2() {
  const [counters, setCounters] = useState([{ id: 1, value: 0 }]);

  const addCounter = () => {
    const newCounter = { id: counters.length + 1, value: 0 };
    setCounters([...counters, newCounter]);
  };

  const incrementCounter = (id) => {
    setCounters(counters.map(item =>
      item.id === id ? { ...item, value: item.value + 1 } : item
    ));
  };

  const decrementCounter = (id) => {
    setCounters(counters.map(item =>
      item.id === id ? { ...item, value: item.value - 1 } : item
    ));
  };

  return (
    <div className="app-container">
      <h1>Multiple Counters</h1>
      <button onClick={addCounter}>Add Counter</button>
      <ul className="counter-list">
        {counters.map(item => (
          <li key={item.id} className="counter-item">
           <span className="counter-text">
                Counter {item.id}: <strong>{item.value}</strong>
            </span>
            <div>
              <button onClick={() => incrementCounter(item.id)}>+</button>
              <button onClick={() => decrementCounter(item.id)} disabled={item.value === 0}>-</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default State2;
