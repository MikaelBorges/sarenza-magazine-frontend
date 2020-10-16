import PropTypes from 'prop-types';
import React from 'react';

const ReassurancesMobile = ({ data }) => {
  return <li className={`pictenza ${data.icon}`}>{data.text}</li>;
};

ReassurancesMobile.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string
};

ReassurancesMobile.defaultProps = {
  icon: '',
  text: ''
};

export default ReassurancesMobile;
