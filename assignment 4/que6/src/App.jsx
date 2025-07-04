import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return (
    <div style={counterStyle}>
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={decrement} style={buttonStyle}>–</button>
        <button onClick={increment} style={buttonStyle}>+</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div style={centerStyle}>
      <h1>Simple Counter</h1>
      <Counter />
    </div>
  );
}

// 🔧 Styling
const centerStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Arial',
};

const counterStyle = {
  textAlign: 'center',
};

const buttonStyle = {
  fontSize: '24px',
  padding: '10px 20px',
  margin: '0 10px',
  borderRadius: '6px',
  cursor: 'pointer',
};

export default App;
