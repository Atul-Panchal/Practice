// CartItem.js
import React from 'react';

const CartItem = ({ item, removeItem }) => {
  const { id, name } = item;

  return (
    <li>
      <span>{name}</span>
      <button onClick={() => removeItem(id)}>Remove</button>
    </li>
  );
};

export default CartItem;
