import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Heading.module.scss';

const Heading = ({ children, level, sectionTitle, noMargin }) => {
  return (
    <h1
      className={classnames(styles[`heading${level}`], {
        [styles.sectionTitle]: sectionTitle,
        [styles.noMargin]: noMargin
      })}>
      {children}
    </h1>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
  level: PropTypes.number,
  sectionTitle: PropTypes.bool,
  noMargin: PropTypes.bool
};

Heading.defaultProps = {
  children: '',
  level: 1,
  sectionTitle: false,
  noMargin: false
};

export default Heading;
