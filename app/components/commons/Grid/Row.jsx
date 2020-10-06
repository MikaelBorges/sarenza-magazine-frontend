import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Row.module.scss';

const Row = ({ children, noGutters, extraClasses }) => {
  return (
    <div
      className={classnames(styles.row, extraClasses, {
        [styles.noGutters]: noGutters
      })}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node,
  noGutters: PropTypes.bool,
  extraClasses: PropTypes.string
};

Row.defaultProps = {
  children: '',
  noGutters: false,
  extraClasses: undefined
};

export default Row;
