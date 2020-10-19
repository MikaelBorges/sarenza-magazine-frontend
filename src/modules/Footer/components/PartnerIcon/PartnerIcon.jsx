import React from 'react';
// import PropTypes from 'prop-types';

const PartnerIcon = ({ data }) => {
  // Regex pour remplacer le camelCase de trustedShops par un tiret
  const dashed = data.payment.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);

  return (
    <li className={data.liClass}>
      <a
        href={data.href}
        key={data.id}
        className={`ea-tracker gtm-click partners-com-${dashed} sprited`}
        shipping={data.shipping}
        quality={data.quality}
        data-ea>
        {data.text}
      </a>
    </li>
  );
};

// PartnerIcon.propTypes = {};

export default PartnerIcon;
