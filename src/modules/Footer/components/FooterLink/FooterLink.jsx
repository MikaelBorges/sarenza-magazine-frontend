// import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import React from 'react';

const FooterLink = ({ data }) => {
  return (
    <li>
      <a href={data.href} data-content={data.content} className={data.class} data-ea>
        {parse(data.text)}
      </a>
    </li>
  );
};

// FooterLink.propTypes = {
//     urls: PropTypes.string.isRequired,
//     ids: PropTypes.string.isRequired,
//     contents: PropTypes.string.isRequired
// };

export default FooterLink;
