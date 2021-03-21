import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import {commerce} from './lib/commerce';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Nav from './components/Navbar/Nav';
import './sass/App.scss';
import Products from './components/Products/Products';
import ProductInfo from './components/Products/Product/ProductInfo';
import Cart from './components/Cart/Cart';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
    fecthCart();
  }, []);
  console.log();

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

  const fecthCart = async () => {
    try {
      setCart(await commerce.cart.retrieve());
    } catch (error) {
      console.log(error.message);
    }
  };

  const addToCart = async (productId, quantity) => {
    try {
      const {cart} = await commerce.cart.add(productId, quantity);
      setCart(cart);
      console.log(cart);
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateCartQty = async (itemId, quantity) => {
    const {cart} = await commerce.cart.update(itemId, {quantity});
    setCart(cart);
  };

  const removeFromCart = async (itemId) => {
    const {cart} = await commerce.cart.remove(itemId);
    setCart(cart);
  };

  const emptyCart = async () => {
    const {cart} = await commerce.cart.empty();
    setCart(cart);
  };

  return (
    <div className='App'>
      <Nav
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        totalItems={cart.total_items}
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
              addToCart={addToCart}
            />
          )}
        </Route>
        <Route exact path='/product-info'>
          {!isMobileMenuOpen && (
            <ProductInfo
              product={product}
              setProduct={setProduct}
              addToCart={addToCart}
            />
          )}
        </Route>
        <Route exact path='/cart'>
          {!isMobileMenuOpen && (
            <Cart
              cart={cart}
              updateCartQty={updateCartQty}
              removeFromCart={removeFromCart}
              emptyCart={emptyCart}
            />
          )}
        </Route>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
