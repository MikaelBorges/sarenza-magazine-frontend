import parse from 'html-react-parser';
// import PropTypes from 'prop-types';
import React from 'react';

const VotesMobile = ({ data }) => {
  return (
    <a
      href={data.link}
      className="votes ea-tracker gtm-click"
      data-ea
      data-track-label
      // target="_blank"
      // rel="noopener"
    >
      {parse(data.label)}
    </a>
  );
};

// VotesMobile.propTypes = {
//     link: PropTypes.string,
//     label: PropTypes.string
// };

export default VotesMobile;
