import PropTypes from 'prop-types';
import React from 'react';

import { LinkText } from '../Links';

const Breadcrumb = ({ breadcrumbs }) => {
  return breadcrumbs.map((breadcrumb) => {
    return (
      <LinkText link={breadcrumb.link} key={breadcrumb.label}>
        {breadcrumb.label}
      </LinkText>
    );
  });
};

Breadcrumb.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string
    })
  )
};

Breadcrumb.defaultProps = {
  breadcrumbs: []
};

export default Breadcrumb;
