import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimesCircle} from '@fortawesome/free-regular-svg-icons';

const GalleryModal = ({imgSrc, setIsModal}) => {
  return (
    <div className='gallery__modal'>
      <div>
        <FontAwesomeIcon
          icon={faTimesCircle}
          onClick={() => setIsModal(false)}
          className='icon'
        />
        <img src={imgSrc} alt='img' />
      </div>
    </div>
  );
};

export default GalleryModal;
