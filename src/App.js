import React, {useState, useEffect} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import {commerce} from './lib/commerce';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Nav from './components/Navbar/Nav';
import './sass/App.scss';
import Products from './components/Products/Products';
import ProductInfo from './components/Products/Product/ProductInfo';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import ScrollToTop from './components/ScrollToTop';
import About from './components/About/About';

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  useEffect(() => {
    fetchProducts();
    fecthCart();
  }, []);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const {data} = await commerce.products.list();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      history.push('/');
    }
  };

  const fecthCart = async () => {
    try {
      setCart(await commerce.cart.retrieve());
    } catch (error) {
      history.push('/');
    }
  };

  const addToCart = async (productId, quantity) => {
    try {
      const {cart} = await commerce.cart.add(productId, quantity);
      setCart(cart);
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

  const refreshCart = async () => {
    const res = await commerce.cart.refresh();
    setCart(res);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId);
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  return (
    <div className='App'>
      <ScrollToTop />
      <Nav totalItems={cart.total_items} />

      <Route>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/shop' exact>
            <Products
              products={products}
              setProduct={setProduct}
              isLoading={isLoading}
              addToCart={addToCart}
            />
          </Route>
          <Route path='/product-info' exact>
            {product && (
              <ProductInfo
                product={product}
                setProduct={setProduct}
                addToCart={addToCart}
              />
            )}
          </Route>
          <Route path='/cart' exact>
            <Cart
              cart={cart}
              updateCartQty={updateCartQty}
              removeFromCart={removeFromCart}
              emptyCart={emptyCart}
            />
          </Route>
          <Route path='/checkout' exact>
            <Checkout
              cart={cart}
              order={order}
              handleCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
              refreshCart={refreshCart}
            />
          </Route>
          <Route path='/about' exact component={About} />
          <Route path='/*'>
            <Home />
          </Route>
        </Switch>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
