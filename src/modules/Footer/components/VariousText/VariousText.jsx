import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';

const VariousText = ({ data }) => {
  return (
    <div className="mobile-app no-background">
      <div className="title-level3">
        <span>{parse(data.title)}</span>
      </div>
      <p>{parse(data.text)}</p>
    </div>
  );
};

VariousText.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

VariousText.defaultProps = {
  title: '',
  text: ''
};

export default VariousText;