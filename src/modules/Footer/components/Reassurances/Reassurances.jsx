import PropTypes from 'prop-types';
import React from 'react';

const Reassurances = ({ data }) => {
  return <li className={`pictenza ${data.icon}`}>{data.text}</li>;
};

Reassurances.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string
};

Reassurances.defaultProps = {
  icon: '',
  text: ''
};

export default Reassurances;
