import parse from 'html-react-parser';
// import PropTypes from 'prop-types';
import React from 'react';

const Votes = ({ data }) => {
  return (
    <a
      href={data.link}
      className="votes ea-tracker gtm-click"
      data-ea
      data-track-label
      target="_blank"
      rel="noreferrer">
      {parse(data.label)}
    </a>
  );
};

// Votes.propTypes = {
//     link: PropTypes.string,
//     label: PropTypes.string
// };

export default Votes;
