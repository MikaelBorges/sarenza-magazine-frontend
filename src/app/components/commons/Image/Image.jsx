import PropTypes from 'prop-types';
import React from 'react';

const Image = ({ src, alt, onClick }) => {
  return (
    <>
      {src ? (
        <img src={src} alt={alt} onClick={onClick} />
      ) : (
        <span>{`Missing picture (404) : ${alt}`}</span>
      )}
    </>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
};

Image.defaultProps = {
  src: '',
  alt: ''
};

export default Image;
