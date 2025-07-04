import React from 'react';

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function App() {
  const handleClick = (label) => {
    console.log(`Button clicked: ${label}`);
  };

  return (
    <div>
      <h1>Click a Button</h1>
      <Button label="Button 1" onClick={() => handleClick('Button 1')} />
      <Button label="Button 2" onClick={() => handleClick('Button 2')} />
      <Button label="Button 3" onClick={() => handleClick('Button 3')} />
    </div>
  );
}

export default App;
