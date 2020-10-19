import React from 'react';
// import PropTypes from 'prop-types';

const PartnerIconMobile = ({ data }) => {
  return (
    <ul className="fold sprite">
      {/* Changer la structure de la data côté strapi pour pouvoir maper aussi sur les li
            il manque aussi les titres correspondants
            */}
      <li>
        <a
          href={data.href}
          key={data.id}
          className={`ea-tracker gtm-click partners-com-${data.payment} sprited`}
          shipping={data.shipping}
          quality={data.quality}
          data-ea>
          {data.text}
        </a>
      </li>
    </ul>
  );
};

// PartnerIcon_mobile.propTypes = {};

export default PartnerIconMobile;
