import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import {commerce} from './lib/commerce';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Nav from './components/Navbar/Nav';
import './sass/App.scss';
import Products from './components/Products/Products';
import ProductInfo from './components/Products/Product/ProductInfo';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log();

  // useEffect(() => {
  //   console.log(isMobileMenuOpen);
  // }, [isMobileMenuOpen]);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const {data} = await commerce.products.list();
      setProducts(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='App'>
      <Nav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Route>
        <Route exact path='/'>
          {!isMobileMenuOpen && <Home />}
        </Route>
        <Route exact path='/shop'>
          {!isMobileMenuOpen && (
            <Products
              products={products}
              setProduct={setProduct}
              isLoading={isLoading}
            />
          )}
        </Route>
        <Route exact path='/product-info'>
          {!isMobileMenuOpen && (
            <ProductInfo product={product} setProduct={setProduct} />
          )}
        </Route>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
