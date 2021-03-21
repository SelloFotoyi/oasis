import React from 'react';

const CartItem = ({item, updateCartQty, removeFromCart}) => {
  return (
    <div className='cart-item'>
      <div className='cart-item__img'>
        <img src={item.media.source} alt={item.product_name} />
      </div>
      <p className='cart-item__name'>{item.product_name}</p>
      <div className='cart-item__qty'>
        <button onClick={() => updateCartQty(item.id, item.quantity - 1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => updateCartQty(item.id, item.quantity + 1)}>
          +
        </button>
      </div>
      <button
        className='cart-item__remove-btn'
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
      <span className='cart-item__total'>
        {item.line_total.formatted_with_symbol}
      </span>
    </div>
  );
};

export default CartItem;
