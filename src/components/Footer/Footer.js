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
        <Link to='/' className='footer-container__home'>
          TO
        </Link>
        <div className='footer-container__sub'>
          <div className='footer-container__sub__links'>
            <a
              href='https://typewriterdatabase.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='footer-container__sub__links__link'
            >
              Resource
            </a>
            <Link to='/about' className='footer-container__sub__links__link'>
              About
            </Link>
            <a
              href='https://www.linkedin.com/in/sello-fotoyi-79132672/'
              target='_blank'
              rel='noopener noreferrer'
              className='footer-container__sub__links__link'
            >
              Author
            </a>
          </div>
          <div className='footer-container__sub__socials'>
            <a
              href='https://github.com/SelloFotoyi'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faGithub} className='icon' />
            </a>

            <a
              href='https://www.linkedin.com/in/sello-fotoyi-79132672/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedinIn} className='icon' />
            </a>
          </div>
        </div>
      </section>
      <p>&copy; Sello Fotoyi | 2021</p>
    </footer>
  );
};

export default Footer;
