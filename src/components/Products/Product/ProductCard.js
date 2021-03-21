import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const ProductCard = ({product, setProduct, addToCart}) => {
  const history = useHistory();
  useEffect(() => {
    //  console.log(product.price.formatted_with_symbol);
  }, []);

  const toInfo = () => {
    setProduct(product);
    history.push('/product-info');
  };

  return (
    <div className='product-card'>
      <span className='product-card__price'>
        {product.price.formatted_with_symbol}
      </span>
      <div className='product-card__info'>
        <p className='product-card__info__span'>{product.name}</p>
        <p className='product-card__info__span'>
          {' '}
          {product.price.formatted_with_symbol}
        </p>
        <p className='product-card__info__span'>
          <button onClick={() => addToCart(product.id, 1)}>Collect</button>
          <button onClick={toInfo}>Details</button>
        </p>
      </div>
      <img src={product.media.source} alt='product-image' />
    </div>
  );
};

export default ProductCard;
