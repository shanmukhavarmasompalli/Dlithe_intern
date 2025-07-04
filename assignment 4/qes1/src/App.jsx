// App.jsx
import React from 'react';

function Welcome({ name }) {
  return <h2>Hello, {name}!</h2>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
    </div>
  );
}

export default App;
