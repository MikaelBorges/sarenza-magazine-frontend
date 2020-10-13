import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Box.module.scss';

const Box = ({ children, smallMargin, displayColumn, hasError, placeholder }) => (
  <div
    className={classnames(styles.box, {
      [styles.smallMargin]: smallMargin,
      [styles.displayColumn]: displayColumn,
      [styles.error]: hasError
    })}>
    {children || <div className={styles.placeholder}>{placeholder}</div>}
  </div>
);

Box.propTypes = {
  /**
   * Component or Text wrapped on the box
   */
  children: PropTypes.node,
  /**
   * Has small margin
   */
  smallMargin: PropTypes.bool,
  /**
   * display column
   */
  displayColumn: PropTypes.bool,
  /**
   * if has error the background become red
   */
  hasError: PropTypes.bool,
  /**
   * Placeholder of the box if hasnt children
   */
  placeholder: PropTypes.string
};

Box.defaultProps = {
  children: '',
  smallMargin: false,
  displayColumn: false,
  hasError: false,
  placeholder: ''
};

export default Box;
