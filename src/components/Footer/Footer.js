import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer-container'>
        <h1>TO</h1>
        <div className='footer-container__sub'>
          <div className='footer-container__sub__links'>
            <a href='' className='footer-container__sub__links__link'>
              Resource
            </a>
            <Link to='/about' className='footer-container__sub__links__link'>
              About
            </Link>
            <a href='' className='footer-container__sub__links__link'>
              Author
            </a>
          </div>
          <div className='footer-container__sub__socials'>
            <FontAwesomeIcon icon={faTwitter} className='icon' />
            <FontAwesomeIcon icon={faGithub} className='icon' />
            <FontAwesomeIcon icon={faLinkedinIn} className='icon' />
          </div>
        </div>
      </section>
      <p>&copy; Sello Fotoyi | 2021</p>
    </footer>
  );
};

export default Footer;
