import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {commerce} from '../../lib/commerce';
import AddressForm from './CheckoutForm/AddressForm';
import PaymentForm from './CheckoutForm/PaymentForm';
import CheckoutTracker from './CheckoutTracker/CheckoutTracker';
import Confirmation from './Confirmation';
import Review from './Review';

const Checkout = ({cart, order, handleCaptureCheckout, error, refreshCart}) => {
  const step = ['Address', 'Payment'];
  const [checkoutStep, setCheckoutStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const history = useHistory();

  useEffect(() => {
    document.title = 'Checkout | Typewriter Oasis';
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: 'cart',
        });
        setCheckoutToken(token);
      } catch {
        history.push('/');
      }
    };
    generateToken();
  }, []);

  const Form = () =>
    checkoutStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        handleCaptureCheckout={handleCaptureCheckout}
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        prevStep={prevStep}
        nextStep={nextStep}
        timeout={timeout}
      />
    );

  const nextStep = () => setCheckoutStep((prevStep) => prevStep + 1);
  const prevStep = () => setCheckoutStep((prevStep) => prevStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 5000);
  };

  return (
    <div className='checkout'>
      <CheckoutTracker checkoutStep={checkoutStep} isFinished={isFinished} />
      {checkoutToken && checkoutStep === 1 && (
        <Review
          checkoutToken={checkoutToken}
          order={order}
          shippingData={shippingData}
        />
      )}
      {checkoutStep === step.length ? (
        <Confirmation
          shippingData={shippingData}
          order={order}
          handleCaptureCheckout={handleCaptureCheckout}
          isFinished={isFinished}
          error={error}
          refreshCart={refreshCart}
        />
      ) : (
        checkoutToken && <Form />
      )}
    </div>
  );
};

export default Checkout;
