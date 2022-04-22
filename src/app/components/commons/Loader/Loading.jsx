import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../Icon';
import * as ICONS from '../Icon/constants';
import styles from './Loading.module.scss';

export const ANIM_TYPE = {
  SPINNER: 'spinner',
  DOTS: 'dots'
};

const Loader = ({ noPadding, animationType, size, cssClass }) => {
  return (
    <div
      className={classnames(styles.loader, {
        [styles.noPadding]: noPadding
      })}>
      {animationType === ANIM_TYPE.SPINNER && (
        <Icon name={ICONS.SPINNER} cssClass={classnames(styles.spinner, cssClass)} width={size} />
      )}
      {animationType === ANIM_TYPE.DOTS && (
        <div className={styles.dots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
      )}
    </div>
  );
};

Loader.propTypes = {
  noPadding: PropTypes.bool,
  animationType: PropTypes.string
};

Loader.defaultProps = {
  noPadding: false,
  animationType: ANIM_TYPE.SPINNER
};

export default Loader;
