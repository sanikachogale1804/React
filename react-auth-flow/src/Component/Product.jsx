import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Import the CartContext

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext); // Get dispatch from context

  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    };
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
