import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <p>Welcome to the Home page!</p>;
      case 'About':
        return <p>This is the About section.</p>;
      case 'Contact':
        return <p>Email to varma@gmail.com</p>;
      default:
        return null;
    }
  };
  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Dynamic Tabs</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        {['Home', 'About', 'Contact'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 20px',
              backgroundColor: activeTab === tab ? '#4CAF50' : '#f0f0f0',
              color: activeTab === tab ? 'white' : 'black',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        style={{
          padding: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          backgroundColor: 'black'
        }}
      >
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
