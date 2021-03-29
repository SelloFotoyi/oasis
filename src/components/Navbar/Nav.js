import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faExclamationTriangle,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const Nav = ({totalItems}) => {
  const location = useLocation();

  useEffect(() => {
    if (!totalItems) {
      console.log(totalItems);
    }
  }, []);

  return (
    <>
      <nav className='nav'>
        <Link to='/' className='nav__item logo' title='Home'>
          TO
        </Link>

        {totalItems !== undefined ? (
          <Link to='/cart'>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className='nav__item__cart'
              title='Go to cart'
            />
            <span className='nav__item__cart__items'>{totalItems}</span>
          </Link>
        ) : (
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            title='network error'
            className='nav__item__cart'
          />
        )}

        <Link to='/shop' className='nav__item'>
          Shop
        </Link>
      </nav>
    </>
  );
};

export default Nav;
