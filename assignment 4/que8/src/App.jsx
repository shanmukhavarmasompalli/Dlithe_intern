import React from 'react';

function StatusIndicator({ isOnline }) {
  const circleStyle = {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: isOnline ? 'green' : 'red',
    display: 'inline-block',
    marginRight: '8px',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={circleStyle}></div>
      <span>{isOnline ? 'Online' : 'Offline'}</span>
    </div>
  );
}

function App() {
  return (
    <div style={centerStyle}>
      <h1>Status Checker</h1>
      <StatusIndicator isOnline={true} />
      <StatusIndicator isOnline={false} />
    </div>
  );
}

// Center layout
const centerStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Arial',
  gap: '20px',
  backgroundColor: 'black',
};

export default App;
