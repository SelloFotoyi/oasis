import React, {useEffect} from 'react';
import LoadGif from '../../components/LoadGif';
import {Link, useHistory} from 'react-router-dom';

const Confirmation = ({
  order,
  handleCaptureCheckout,
  isFinished,
  shippingData,
  refreshCart,
}) => {
  const history = useHistory();

  const goHome = () => {
    refreshCart();
    history.push('/');
  };
  return (
    <div className='confirmation'>
      {isFinished ? (
        <section>
          <h2 className='confirmation__title'>
            Thank you for your purchase, {shippingData.firstName}
          </h2>
          <br />
          <h4 className='confirmation__title'>
            Please check your email for more details.
          </h4>
          <div className='confirmation-btn'>
            {' '}
            <button onClick={goHome}>Back to Home</button>
          </div>
        </section>
      ) : (
        <LoadGif />
      )}
    </div>
  );
};

export default Confirmation;
