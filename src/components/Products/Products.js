import React from 'react';
import LoadGif from '../LoadGif';
import ProductCard from './Product/ProductCard';

const Products = ({products, setProduct, isLoading}) => {
  return (
    <>
      {isLoading ? (
        <LoadGif />
      ) : (
        <div className='products'>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setProduct={setProduct}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
