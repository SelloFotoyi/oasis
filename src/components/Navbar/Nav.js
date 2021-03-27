import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Nav = ({totalItems}) => {
  const location = useLocation();

  return (
    <>
      <nav className='nav'>
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
      </nav>
    </>
  );
};

export default Nav;
