import React from 'react';
import ReactDOM from 'react-dom/client';  // Updated import
import './index.css';
import App from './App';
import { CartProvider } from '../src/Component/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create a root element
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
