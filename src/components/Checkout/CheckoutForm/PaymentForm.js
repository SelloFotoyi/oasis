import React from 'react';
import {
  Element,
  CardElement,
  ElementConsumer,
  Elements,
  ElementsConsumer,
} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faAmazonPay,
  faApplePay,
  faGooglePay,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons';
import {faCreditCard} from '@fortawesome/free-solid-svg-icons';
import ScrollToTop from '../../ScrollToTop';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({
  checkoutToken,
  nextStep,
  prevStep,
  shippingData,
  handleCaptureCheckout,
  timeout,
}) => {
  const handleSubmit = async (e, elements, stripe) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log(error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: {
          firstname: shippingData.firstname,
          lastname: shippingData.lastname,
          email: shippingData.email,
        },
        shipping: {
          name: 'Primary',
          street: shippingData.address1,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip_code: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: {
          shipping_method: shippingData.shippingOption,
        },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      handleCaptureCheckout(checkoutToken.id, orderData);
      timeout();
      nextStep();
    }
  };
  return (
    <div className='payment'>
      <ScrollToTop />
      <h3 className='payment__title'>Payment Method</h3>
      <div className='payment__options'>
        <div className='payment__options__option'>
          <FontAwesomeIcon icon={faPaypal} className='icon' />
          <span>Paypal</span>
        </div>
        <div className='payment__options__option'>
          <FontAwesomeIcon icon={faGooglePay} className='icon' />
          <span>Google Pay</span>
        </div>
        <div className='payment__options__option'>
          <FontAwesomeIcon icon={faApplePay} className='icon' />
          <span>Apple Pay</span>
        </div>
        <div className='payment__options__option'>
          <FontAwesomeIcon icon={faAmazonPay} className='icon' />
          <span>Amazon Pay</span>
        </div>
      </div>
      <h2 style={{width: '100%', textAlign: 'center', margin: '1rem 0'}}>OR</h2>
      <div className='payment__card'>
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({elements, stripe}) => (
              <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
                <CardElement />
                <br />
                <br />
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                  <button onClick={prevStep}>Back</button>
                  <button type='submit'>Pay</button>
                </div>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      </div>
    </div>
  );
};

export default PaymentForm;
