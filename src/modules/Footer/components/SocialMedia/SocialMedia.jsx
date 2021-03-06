// import PropTypes from 'prop-types';
import React from 'react';

const SocialMedia = ({ data }) => {
  return (
    <>
      <div className="title-nav">{data && data.title}</div>
      <ul className="list social-media">
        {data &&
          data.socialMediaItem &&
          data.socialMediaItem.map((item) => {
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`ea-tracker gtm-click sprited ${item.label}`}
                  key={item.label}>
                  {item.name}
                </a>
              </li>
            );
          })}
      </ul>
    </>
  );
};

// SocialMedia.propTypes = {
//     title: PropTypes.string.isRequired
// };

export default SocialMedia;
