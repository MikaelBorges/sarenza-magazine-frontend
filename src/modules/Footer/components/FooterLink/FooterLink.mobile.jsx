// import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import React from 'react';

const FooterLinkMobile = ({ data }) => {
  return (
    <li>
      {/* Ajouter au premier élément remote-popin */}
      <a href={data.href} data-content={data.content} className="ea-tracker gtm-click">
        {parse(data.text)}
      </a>
    </li>
  );
};

// FooterLink_mobile.propTypes = {
//     urls: PropTypes.string.isRequired,
//     ids: PropTypes.string.isRequired,
//     contents: PropTypes.string.isRequired
// };

export default FooterLinkMobile;
