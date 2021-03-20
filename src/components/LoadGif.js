import React from 'react';

const LoadGif = () => {
  return (
    <div style={loadStyles}>
      <img
        style={loadImgStyles}
        src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
        alt='Loading...'
      />
    </div>
  );
};

const loadStyles = {
  paddingTop: '3.5rem',
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const loadImgStyles = {
  width: '200px',
  height: '200px',
  objectFit: 'cover',
};

export default LoadGif;
