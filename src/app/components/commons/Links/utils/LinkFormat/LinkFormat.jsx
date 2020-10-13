/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { LINK_TYPE } from '../../constants';
import styles from './LinkFormat.module.scss';

const LinkFormat = ({ type, disabled, children, onClick, baseStyle, specificStyle }) => {
  return (
    <span
      className={classnames(
        {
          [styles[`${type}LinkFormat`]]: !baseStyle || baseStyle.length === 0,
          [styles[specificStyle]]: specificStyle,
          [styles.fullATag]: type === LINK_TYPE.BUTTON,
          [styles.pointerCursor]: !disabled,
          [styles.disabled]: disabled
        },
        ...baseStyle
      )}
      onClick={onClick}>
      {children}
    </span>
  ); //  type="button"
};

LinkFormat.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  baseStyle: PropTypes.arrayOf(
    PropTypes.string
  ) /* if it is not empty, it describes another
      basic style which should replace the default one */,
  specificStyle: PropTypes.string
};
LinkFormat.defaultProps = {
  type: LINK_TYPE.TEXT,
  disabled: false,
  children: null,
  onClick: () => {},
  baseStyle: [],
  specificStyle: ''
};

export default LinkFormat;
