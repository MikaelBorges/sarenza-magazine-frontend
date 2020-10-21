import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button/Button.mobile';
import { CHEVRON_RIGHT } from '../Icon/constants';
import styles from './Display.mobile.module.scss';

const Display = ({ text, button, whiteTheme }) => {
  return (
    text && (
      <section className={classnames(styles.section, { [styles.blueOne]: whiteTheme })}>
        <div className={classnames(styles.title, { [styles.blueOne__title]: whiteTheme })}>
          {text}
        </div>
        <Button iconName={CHEVRON_RIGHT} iconAfter onClick={() => {}} whiteTheme={whiteTheme}>
          {button.label}
        </Button>
      </section>
    )
  );
};

Display.propTypes = {
  whiteTheme: PropTypes.bool
};

Display.defaultProps = {
  whiteTheme: false
};
export default Display;
