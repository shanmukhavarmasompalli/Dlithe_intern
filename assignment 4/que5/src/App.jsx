import React, { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false); // false = OFF

  const handleClick = () => {
    setIsOn(prev => !prev); // toggle the state
  };

  return (
    <div style={containerStyle}>
      <button onClick={handleClick} style={buttonStyle}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

function App() {
  return (
    <div style={centerStyle}>
      <h1>Toggle Switch</h1>
      <Toggle />
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

const containerStyle = {
  marginTop: '20px',
};

const buttonStyle = {
  fontSize: '20px',
  padding: '10px 20px',
  borderRadius: '8px',
  border: '2px solid #333',
  backgroundColor: 'black',
  cursor: 'pointer',
};

export default App;
