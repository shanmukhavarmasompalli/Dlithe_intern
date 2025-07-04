import React, { useState } from 'react';


function Product({ product }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '15px',
      maxWidth: '300px'
    }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      {added ? (
        <p style={{ color: 'green' }}>Added to Cart!</p>
      ) : (
        <button onClick={handleAddToCart} style={{ padding: '8px 12px' }}>
          Add to Cart
        </button>
      )}
    </div>
  );
}


function App() {
  const sampleProduct = {
    id: 1,
    name: 'Wireless Headphones',
    price: 59.99
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1>Shop</h1>
      <Product product={sampleProduct} />
    </div>
  );
}

export default App;
