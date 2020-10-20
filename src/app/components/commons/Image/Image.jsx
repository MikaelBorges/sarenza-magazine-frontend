import PropTypes from 'prop-types';
import React from 'react';

const Image = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
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
