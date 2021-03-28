import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';

const CheckoutTracker = ({checkoutStep, isFinished}) => {
  return (
    <div className={`tracker ${checkoutStep === 1 ? 'alternate' : ''}`}>
      <h2 className='tracker__title'>Checkout</h2>
      <div className='tracker__steps'>
        <div
          className={`tracker__steps__step ${
            checkoutStep === 0 ? 'active' : 'complete'
          }`}
        >
          {checkoutStep === 0 ? (
            '1'
          ) : (
            <FontAwesomeIcon icon={faCheck} className='icon' />
          )}
        </div>
        <div className='tracker__steps__line'></div>
        <div
          className={`tracker__steps__step ${
            checkoutStep === 0
              ? 'inactive'
              : !isFinished
              ? 'active'
              : 'complete'
          }`}
        >
          {isFinished ? <FontAwesomeIcon icon={faCheck} /> : '2'}
        </div>
      </div>
      <div className='tracker__texts'>
        <p className='tracker__texts__text'>Address</p>
        <p
          className={`tracker__texts__text ${
            checkoutStep === 0 ? 'inactive' : 'active'
          }`}
        >
          Payment
        </p>
      </div>
    </div>
  );
};

export default CheckoutTracker;
