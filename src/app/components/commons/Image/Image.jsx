import PropTypes from 'prop-types';
import React from 'react';

const Image = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
};

Image.defaultProps = {
  src: '',
  alt: '',
  className: ''
};

export default Image;
