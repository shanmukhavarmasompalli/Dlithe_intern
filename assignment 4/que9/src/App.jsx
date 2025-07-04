// src/App.jsx
import React from 'react';

function ClickLogger({ logMessage }) {
  return <button onClick={logMessage}>Log Message</button>;
}

function App() {
  const handleLog = () => {
    console.log("Button was clicked!");
  };

  return (
    <div style={centerStyle}>
      <h1>Function as Prop Example</h1>
      <ClickLogger logMessage={handleLog} />
    </div>
  );
}

const centerStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Arial',
};

export default App;
