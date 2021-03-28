import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Products from '../Products';

const ProductInfo = ({product, setProduct, addToCart}) => {
  const [mainImg, setMainImg] = useState(product.media.source);
  const history = useHistory();

  useEffect(() => {
    document.querySelector('#product-description').innerHTML =
      product.description;
    document.title = `${product.name} | Typescript Oasis`;
  }, []);

  return (
    <div className='product-info'>
      <section className='current'>
        <div className='current__images'>
          <div className='current__images__main'>
            <img src={mainImg} alt='main-img' />
          </div>
          <div className='current__images__assets'>
            {product.assets.map((asset) => (
              <div
                className='current__images__assets__asset'
                onClick={() => setMainImg(asset.url)}
                key={asset.id}
              >
                <img src={asset.url} alt='other-img' />
              </div>
            ))}
          </div>
        </div>
        <div className='current__info'>
          <h1>{product.name}</h1>
          <p id='product-description'></p>
          <span>
            <button onClick={() => addToCart(product.id, 1)}>
              Add to cart
            </button>
            <button onClick={() => history.goBack()}>Back to shop</button>
          </span>
        </div>
      </section>
    </div>
  );
};

export default ProductInfo;
