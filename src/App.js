import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
function App() {
  const [size, setSize] = useState(50);
  const handleClick = () => {
    setSize(size + 10);
  };
  return (
      <div>
        <div
            style={{
              width: `${size}px`,
              height: `${size}px`,
              background: 'green',
              borderRadius: '50%'
            }}
            onClick={handleClick}
        ></div>
      </div>
  );
}

export default App;
