import React from 'react';
import Product from '../src/Component/Product';
import Cart from '../src/Component/Cart';

const App = () => {
  // Example product list
  const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 599 },
    { id: 3, name: 'Headphones', price: 199 },
  ];

  return (
    <div>
      <h1>My E-Commerce Store</h1>
      
      <div>
        <h2>Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div>
        <h2>Shopping Cart</h2>
        <Cart />
      </div>
    </div>
  );
};

export default App;
