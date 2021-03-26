import React, {useState} from 'react';
import GalleryModal from './GalleryModal';

const Gallery = () => {
  const [isModal, setIsModal] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const openModal = (img) => {
    setImgSrc(img.target.src);
    setIsModal(true);
  };

  return (
    <>
      <h1 className='gallery__title'>Gallery</h1>
      {isModal ? (
        <GalleryModal imgSrc={imgSrc} setIsModal={setIsModal} />
      ) : (
        <div className='gallery'>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/1.jpg'
              alt='img'
            />
          </div>
          <div>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/17.jpg'
              alt='img'
            />
          </div>
          <div className='big'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/18.jpg'
              alt='img'
            />
          </div>
          <div>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/19.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/6.jpg'
              alt='img'
            />
          </div>
          <div>
            <img
              onClick={(e) => openModal(e)}
              onClick={(e) => openModal(e)}
              src='./gallery/sq/20.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/12.jpg'
              alt='img'
            />
          </div>
          <div>
            <img
              onClick={(e) => openModal(e)}
              onClick={(e) => openModal(e)}
              src='./gallery/sq/21.jpg'
              alt='img'
            />
          </div>
          <div className='big'>
            <img
              onClick={(e) => openModal(e)}
              onClick={(e) => openModal(e)}
              src='./gallery/sq/22.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/3.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/4.jpg'
              alt='img'
            />
          </div>
          <div className='big'>
            <img
              onClick={(e) => openModal(e)}
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/8.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/9.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/11.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/14.jpg'
              alt='img'
            />
          </div>
          <div className='tall'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/vertical/9.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/15.jpg'
              alt='img'
            />
          </div>
          <div className='tall'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/vertical/8.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/16.jpg'
              alt='img'
            />
          </div>
          <div className='tall'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/vertical/1.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/17.jpg'
              alt='img'
            />
          </div>
          <div className='tall'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/vertical/3.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/5.jpg'
              alt='img'
            />
          </div>
          <div className='tall'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/vertical/4.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/18.jpg'
              alt='img'
            />
          </div>
          <div>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/16.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/2.jpg'
              alt='img'
            />
          </div>
          <div className='tall'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/vertical/5.jpg'
              alt='img'
            />
          </div>
          <div className='tall'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/vertical/6.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/13.jpg'
              alt='img'
            />
          </div>
          <div className='tall'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/vertical/7.jpg'
              alt='img'
            />
          </div>

          <div>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/1.jpg'
              alt='img'
            />
          </div>
          <div className='big'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/2.jpg'
              alt='img'
            />
          </div>
          <div className='tall'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/vertical/10.jpg'
              alt='img'
            />
          </div>
          <div>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/3.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/7.jpg'
              alt='img'
            />
          </div>
          <div className='tall'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/vertical/11.jpg'
              alt='img'
            />
          </div>
          <div className='big'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/4.jpg'
              alt='img'
            />
          </div>
          <div>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/5.jpg'
              alt='img'
            />
          </div>
          <div>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/6.jpg'
              alt='img'
            />
          </div>
          <div className='big'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/7.jpg'
              alt='img'
            />
          </div>
          <div>
            <img src='./gallery/sq/8.jpg' alt='img' />
          </div>
          <div className='tall'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/vertical/12.jpg'
              alt='img'
            />
          </div>
          <div>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/10.jpg'
              alt='img'
            />
          </div>
          <div>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/11.jpg'
              alt='img'
            />
          </div>
          <div className='big'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/12.jpg'
              alt='img'
            />
          </div>
          <div className='tall'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/vertical/2.jpg'
              alt='img'
            />
          </div>
          <div>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/13.jpg'
              alt='img'
            />
          </div>
          <div>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/14.jpg'
              alt='img'
            />
          </div>
          <div className='long'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/horizontal/10.jpg'
              alt='img'
            />
          </div>
          <div className='big'>
            <img
              onClick={(e) => openModal(e)}
              src='./gallery/sq/15.jfif'
              alt='img'
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
