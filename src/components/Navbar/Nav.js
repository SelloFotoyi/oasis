import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Nav = ({isMobileMenuOpen, setIsMobileMenuOpen, totalItems}) => {
  return (
    <>
      <div className='mobile-nav'>
        <Link to='/' className='mobile-nav__logo'>
          TO
        </Link>
        <Link to='/cart' style={{textDecoration: 'none'}}>
          <FontAwesomeIcon icon={faShoppingCart} className='mobile-nav__cart' />
          <span className='mobile-nav__cart__items'>{totalItems}</span>
        </Link>
        <div
          className='mobile-nav__btn'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            className={`mobile-nav__btn__burger ${
              isMobileMenuOpen ? 'open' : ''
            }`}
          ></span>
        </div>
      </div>
      <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to='/' className='nav__item logo'>
          TO
        </Link>
        <Link to='/cart'>
          <FontAwesomeIcon icon={faShoppingCart} className='nav__item__cart' />
          <span className='nav__item__cart__items'>{totalItems}</span>
        </Link>
        <Link to='/shop' className='nav__item'>
          Shop
        </Link>
        <Link to='/gallery' className='nav__item'>
          Gallery
        </Link>
      </nav>
    </>
  );
};

export default Nav;
