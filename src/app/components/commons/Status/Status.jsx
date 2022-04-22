import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import styles from './Status.module.scss';

const Status = ({ type, isText, isButton, isDark, renderElement }) => {
  return (
    <>
      {renderElement &&
        renderElement(
          classnames([styles.status, styles[type]], {
            [styles.isDark]: isDark,
            [styles.isButton]: isButton,
            [styles.isText]: isText
          })
        )}
    </>
  );
};

Status.propTypes = {
  isDark: PropTypes.bool,
  isText: PropTypes.bool,
  isButton: PropTypes.bool,
  type: PropTypes.string,
  renderElement: PropTypes.func
};

Status.defaultProps = {
  isDark: false,
  isText: false,
  isButton: false,
  type: undefined,
  renderElement: () => {}
};

export default Status;
