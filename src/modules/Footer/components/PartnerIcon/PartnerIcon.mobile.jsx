import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const PartnerIconMobile = ({ data }) => {
  let iconGroup = [];

  data && data.forEach((partnerIconItem) => {
    if (!iconGroup.some((item) => item.title === partnerIconItem.title)) {
      iconGroup.push({
        title: partnerIconItem.title,
        id: partnerIconItem.id,
        items: data.filter((item) => item.title === partnerIconItem.title)
      });
    }
  });

  const [isActive, setActive] = useState(false);

  const handleToggle = (id) => {
    setActive({ id, open: !isActive.open });
  };

  return iconGroup.map((item, i) => {
    return (
      <>
        <div
          key={`partnericon-${i}`}
          className={isActive.id === item.id && isActive.open ? 'folder open' : 'folder'}
          onClick={() => handleToggle(item.id)}
          onKeyDown={() => handleToggle(item.id)}
          role="button"
          tabIndex="-1">
          {item.title}
        </div>
        <ul className="fold sprite">
          {item.items.map((partner) => {
            return (
              <li key={partner.id}>
                <a
                  href={partner.href}

                  className={`ea-tracker gtm-click partners-com-${partner.payment} sprited`}
                  shipping={partner.shipping}
                  quality={partner.quality}
                  data-ea>
                  {partner.text}
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  });
};

// PartnerIcon_mobile.propTypes = {};

export default PartnerIconMobile;
