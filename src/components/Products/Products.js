import React, {useEffect} from 'react';
import LoadGif from '../LoadGif';
import ProductCard from './Product/ProductCard';

const Products = ({products, setProduct, isLoading, addToCart}) => {
  useEffect(() => {
    document.title = 'Shop | Typescript Oasis';
  }, []);
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
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
