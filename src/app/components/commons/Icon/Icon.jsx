import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import * as ICONS from './constants';
import styles from './Icon.module.scss';
import Checked from './svg/Checked';
import ChevronDown from './svg/ChevronDown';
import ChevronLeft from './svg/ChevronLeft';
import ChevronRight from './svg/ChevronRight';
import Close from './svg/Close';
import Spinner from './svg/Spinner';

const Icon = ({ name, width, height, title, cssClass }) => {
  let IconComponent;
  switch (name) {
    case ICONS.CHEVRON_RIGHT:
      IconComponent = ChevronRight;
      break;
    case ICONS.CHEVRON_LEFT:
      IconComponent = ChevronLeft;
      break;
    case ICONS.CHEVRON_DOWN:
      IconComponent = ChevronDown;
      break;
    case ICONS.SPINNER:
      IconComponent = Spinner;
      break;
    case ICONS.CHECKED:
      IconComponent = Checked;
      break;
    case ICONS.CLOSE:
      IconComponent = Close;
      break;
    default:
      return '';
  }
  return (
    <div className={classnames(styles.icon, cssClass)} style={{ width, height: height || width }}>
      {IconComponent && (
        <IconComponent
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          role="img"
          width="100%"
          height="100%"
          aria-labelledby={title}
          title={title}
        />
      )}
    </div>
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
  cssClass: PropTypes.string
};

Icon.defaultProps = {
  name: null,
  width: '32px',
  height: undefined,
  title: '',
  cssClass: null
};

export default Icon;
