import './App.css';
import { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  const resetColor = () => {
    setBackgroundColor('#ffffff');
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <div className="content">
        <h1>🎨 Color Picker App</h1>

        <div className="color-palette">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-box"
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            ></div>
          ))}
        </div>

        <p className="color-code">Current Color: <strong>{backgroundColor}</strong></p>
        <button className="reset-btn" onClick={resetColor}>Reset</button>
      </div>
    </div>
  );
}

export default App;
