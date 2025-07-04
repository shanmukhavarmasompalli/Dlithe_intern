import React from 'react';

function ListItems({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function App() {
  const fruits = ['Apple', 'Banana', 'Cherry'];

  return (
    <div>
      <h1>Fruit List</h1>
      <ListItems items={fruits} />
    </div>
  );
}

export default App;
