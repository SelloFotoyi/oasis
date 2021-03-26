import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Nav = ({isMobileMenuOpen, setIsMobileMenuOpen, totalItems}) => {
  const location = useLocation();

  return (
    <>
      <div className='mobile-nav'>
        <Link
          to='/'
          className='mobile-nav__logo'
          onClick={() => setIsMobileMenuOpen(false)}
        >
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
        <Link to='/cart' onClick={() => setIsMobileMenuOpen(false)}>
          <FontAwesomeIcon icon={faShoppingCart} className='nav__item__cart' />
          <span className='nav__item__cart__items'>{totalItems}</span>
        </Link>
        <Link
          to='/shop'
          className={`nav__item ${
            location.pathname === '/shop' ? ' active' : ''
          }}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Shop
        </Link>
        <Link
          to='/gallery'
          className={`nav__item ${
            location.pathname === '/gallery' ? 'active' : ''
          }}`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Gallery
        </Link>
      </nav>
    </>
  );
};

export default Nav;
