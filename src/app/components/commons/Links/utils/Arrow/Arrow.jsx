import PropTypes from 'prop-types';
import React from 'react';

import ChevronDown from '@/components/commons/Icon/svg/ChevronDown';
import ChevronRight from '@/components/commons/Icon/svg/ChevronRight';

import { ARROW_DIRECTION } from '../../constants';
import styles from './Arrow.module.scss';

const Arrow = ({ direction }) => {
  const arrowSize = '10px';

  switch (direction) {
    case ARROW_DIRECTION.DOWN:
      return (
        <>
          <span className={styles.arrow}>
            <ChevronDown width={arrowSize} height={arrowSize} />
          </span>
        </>
      );
    default:
      return (
        <>
          <span className={styles.arrow}>
            <ChevronRight width={arrowSize} height={arrowSize} />
          </span>
        </>
      );
  }
};

Arrow.propTypes = {
  direction: PropTypes.string
};

Arrow.defaultProps = {
  direction: ARROW_DIRECTION.RIGHT
};

export default Arrow;
