import React, { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const themeStyles = {
    backgroundColor: darkMode ? '#121212' : '#f0f0f0',
    color: darkMode ? '#ffffff' : '#000000',
    minHeight: '100vh',
    padding: '20px',
    transition: 'all 0.3s ease'
  };

  return (
    <div style={themeStyles}>
      <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
      <p>This is a simple theme toggle using React useState.</p>
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          backgroundColor: darkMode ? '#ffffff' : '#333333',
          color: darkMode ? '#000000' : '#ffffff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default App;
