import React from 'react';
import {Link} from 'react-router-dom';

const Nav = ({isMobileMenuOpen, setIsMobileMenuOpen}) => {
  return (
    <>
      <div className='mobile-nav'>
        <Link to='/' className='mobile-nav__logo'>
          TO
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
