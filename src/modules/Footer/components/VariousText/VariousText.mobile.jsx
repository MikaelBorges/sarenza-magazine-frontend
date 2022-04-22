import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import React from 'react';

const VariousTextMobile = ({ data }) => {
  return (
    <>
      {data && (
        <section className={`mobile-app ${!data.background ? 'no-background' : ''}`}>
          <div className="title-level2">
            <span>{parse(data.title)}</span>
          </div>
          <p>{parse(data.text)}</p>
        </section>
      )}
    </>
  );
};

VariousTextMobile.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string
};

VariousTextMobile.defaultProps = {
  title: '',
  text: ''
};

export default VariousTextMobile;
