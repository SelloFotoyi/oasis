import React from 'react';

const About = () => {
  return (
    <div className='about'>
      <h1 className='about__title'>
        Typewriter Oasis
        <span>
          <i> (v1.0)</i>
        </span>
      </h1>

      <section className='about__description'>
        <p>
          Typewriter Oasis is a mock typewriters e-commerce web application
          created with react, and integrated with{' '}
          <a
            href='https://commercejs.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-container__sub__links__link'
          >
            Commerce JS
          </a>{' '}
          and{' '}
          <a
            href='https://stripe.com/'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-container__sub__links__link'
          >
            Stripe JS.
          </a>
          The app was created with the intention of demostrating the author's
          ability to implement basis logic and functionality of an e-commerce
          web application.
        </p>
      </section>
      <section className='about__features'>
        <h3 className='about__features__title'>Features</h3>
        <ul>
          <li>Adding an item to cart</li>
          <li>Viewing more details of a selected item</li>
          <li>
            Editing cart (clearing cart, removing a single item from cart and
            altering an item's quantity)
          </li>
          <li>
            Checkout procedure (only stripe checkout via card is enabled, other
            methods are included for visual illustration)
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
