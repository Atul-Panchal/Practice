// ShoppingCart.js
import React, { useState } from 'react';
import CartItem from './CartItem';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItemToCart = () => {
    if (newItem.trim() !== '') {
      setCartItems([...cartItems, { id: Date.now(), name: newItem }]);
      setNewItem('');
    }
  };

  const removeItemFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={addItemToCart}>Add Item</button>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            removeItem={removeItemFromCart}
          />
        ))}
      </ul>
      <p>Total Items: {cartItems.length}</p>
      <p>Subtotal: ${cartItems.length * 10}</p>
    </div>
  );
};

export default ShoppingCart;
