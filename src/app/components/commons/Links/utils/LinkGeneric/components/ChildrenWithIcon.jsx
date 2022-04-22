import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../../../../Icon';

const ChildrenWithIcon = ({ icon, label }) => {
  return (
    icon && (
      <>
        {icon.name && icon.isAfter && label}
        <Icon name={icon.name} />
        {icon.name && !icon.isAfter && label}
        {!icon.name && !icon.isAfter && label}
      </>
    )
  );
};

ChildrenWithIcon.propTypes = {
  icon: PropTypes.shape({
    name: PropTypes.string,
    isAfter: PropTypes.bool
  }),
  label: PropTypes.node
};

ChildrenWithIcon.defaultProps = {
  icon: {
    name: '',
    isAfter: false
  },
  label: ''
};

export default ChildrenWithIcon;
