import React, { useContext } from 'react';
import { CartContext } from './CartContext'; // Import the CartContext

const Cart = () => {
  const { state, dispatch } = useContext(CartContext); // Get cart state and dispatch from context

  const handleRemoveItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {state.items.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>Increase Quantity</button>
              <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>Decrease Quantity</button>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
