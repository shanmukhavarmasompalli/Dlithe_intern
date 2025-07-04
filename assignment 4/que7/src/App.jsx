import React from 'react';

function Card({ children }) {
  return (
    <div style={cardStyle}>
      {children}
    </div>
  );
}

function App() {
  return (
    <div style={centerStyle}>
      <h1>Card with Children</h1>

      <Card>
        <h2>Summer Goal</h2>
        <p>Web Development Internship</p>
        <button style={buttonStyle}>Click Me</button>
      </Card>
    </div>
  );
}

// 🔧 Styling
const centerStyle = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Arial',
  backgroundColor: '#f8f8f8',
  flexDirection: 'column',
  boxSizing: 'border-box',
};


const cardStyle = {
  border: '2px solid #333',
  borderRadius: '10px',
  padding: '20px',
  width: '300px',
  backgroundColor: 'black',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  textAlign: 'center',
};

const buttonStyle = {
  marginTop: '10px',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#007bff',
  color: '#fff',
  cursor: 'pointer',
};

export default App;
