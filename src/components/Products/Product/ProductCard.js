import React, {useState, useEffect} from 'react';

const ProductCard = ({product}) => {
  useEffect(() => {
    console.log(product.price.formatted_with_symbol);
  }, []);

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
          <button>Collect</button>
          <button>Details</button>
        </p>
      </div>
      <img src={product.media.source} alt='product-image' />
    </div>
  );
};

export default ProductCard;
