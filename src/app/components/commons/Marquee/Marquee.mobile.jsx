import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Marquee.mobile.module.scss';

const Marquee = ({ marquee }) => {
  return marquee && marquee.text ? (
    <div className={styles.toto}>
      <div
        className={classnames([styles.animate, styles.marquee], {
          [styles.fast]: marquee.fastAnimation,
          [styles.slow]: marquee.slowAnimation,
          [styles['short-text']]: false
        })}>
        <span data-marquee={marquee.text} className={styles.item}>
          {marquee.text}
        </span>
      </div>
    </div>
  ) : null;
};

Marquee.propTypes = {
  fastAnimation: PropTypes.bool,
  slowAnimation: PropTypes.bool,
  text: PropTypes.string
};

Marquee.defaultProps = {
  fastAnimation: false,
  slowAnimation: false,
  text: ''
};
export default Marquee;
