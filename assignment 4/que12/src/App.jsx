import React from 'react';

// Child component
function ProductsList({ products }) {
  return (
    <div>
      <h2>Products:</h2>
      {products.map(product => (
        <div key={product.id} style={{ padding: '8px', borderBottom: '1px solid #ccc' }}>
          {product.name}
        </div>
      ))}
    </div>
  );
}

// Parent component
function App() {
  const productData = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone' },
    { id: 3, name: 'Headphones' }
  ];

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Product List Example</h1>
      <ProductsList products={productData} />
    </div>
  );
}

export default App;
