import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import CartItem from './CartItem';
import {faOpencart} from '@fortawesome/free-brands-svg-icons';

const Cart = ({cart, updateCartQty, removeFromCart, emptyCart}) => {
  return (
    <div className='cart'>
      {cart.line_items.length > 0 ? (
        <h1 className='cart-title'>Your items</h1>
      ) : (
        <div className='cart-null'>
          <FontAwesomeIcon icon={faOpencart} className='cart-null__icon' />
          <h3>
            Cart empty.{' '}
            <Link to='/shop' className='cart-null__text'>
              Go back to shopping
            </Link>
          </h3>
        </div>
      )}

      {cart.line_items.map((item) => (
        <CartItem
          key={item.product_id}
          item={item}
          updateCartQty={updateCartQty}
          removeFromCart={removeFromCart}
        />
      ))}
      {cart.line_items.length > 0 && (
        <h2>Subtotal: {cart.subtotal.formatted_with_symbol}</h2>
      )}
      {cart.line_items.length > 0 && (
        <div className='cart-btns'>
          <button onClick={emptyCart}>Clear cart</button>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
