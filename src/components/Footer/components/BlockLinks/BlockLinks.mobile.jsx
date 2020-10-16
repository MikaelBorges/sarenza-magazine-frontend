// import PropTypes from 'prop-types';
import React, { useState } from 'react';

const BlockLinksMobile = ({ data }) => {
  const [isActive, setActive] = useState('false');

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        className={isActive ? 'folder' : 'open folder'}
        onClick={handleToggle}
        onKeyDown={handleToggle}
        role="button"
        tabIndex="-1">
        {data.title}
      </div>
      <ul className="fold">
        {data.links.map((item) => {
          return (
            <li key={item.id}>
              <a href={item.href} className="ea-tracker gtm-click" data-ea>
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

// BlockLinksMobile.propTypes = {
//     title: PropTypes.string,
//     label: PropTypes.string
// };

// BlockLinksMobile.defaultProps = {
//     title: '',
//     label: ''
// };

export default BlockLinksMobile;
