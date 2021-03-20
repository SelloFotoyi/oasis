import React from 'react';
import LoadGif from '../LoadGif';
import ProductCard from './Product/ProductCard';

const Products = ({products, isLoading}) => {
  return (
    <>
      {isLoading ? (
        <LoadGif />
      ) : (
        <div className='products'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
