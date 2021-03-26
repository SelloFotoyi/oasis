import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

const Review = ({checkoutToken, order, shippingData}) => {
  return (
    <div className='review'>
      <h2 className='review__title'>Order summary</h2>
      <ul className='review__items'>
        {checkoutToken.live.line_items.map((product) => (
          <li
            className='review__items__item'
            style={{padding: '10px 0'}}
            key={product.name}
          >
            <span className='name'>{product.name}</span>
            <span className='qty'>{`Quantity: ${product.quantity}`}</span>

            <p className='price'>{product.line_total.formatted_with_symbol}</p>
          </li>
        ))}
      </ul>
      <p className='review__amount'>
        Subtotal: {checkoutToken.live.subtotal.formatted_with_symbol}
      </p>
      <p className='review__amount'>
        Shipping: {shippingData.shippingOption.formatted_with_symbol}
      </p>
      <p className='review__amount total'>
        {`Total: R${
          checkoutToken.live.subtotal.raw + shippingData.shippingOption.raw
        }.00`}
      </p>
      <Link to='/cart' className='review-btn'>
        <button>Back to cart</button>
      </Link>
    </div>
  );
};

export default Review;
