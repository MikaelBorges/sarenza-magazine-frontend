import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';

import styles from './Text.module.scss';

/**
 *
 * @param {node} children
 * @param {String} wrapperTag
 *
 * Style props
 * @param {Boolean} error
 * @param {Boolean} red
 * @param {Boolean} ellipsis
 * @param {Boolean} small
 * @param {Boolean} medium
 * @param {Boolean} big
 * @param {Boolean} bigger
 * @param {Boolean} huge
 * @param {Boolean} light
 * @param {Boolean} bold
 * @param {Boolean} marquee
 */

const Text = ({ children, wrapperTag, ...props }) => {
  const WrapperTag = wrapperTag;
  const notAStyle = ['wrapperTag', 'children'];
  const keysArray = props && Object.keys(props);
  const stylesArray = keysArray
    .map((key) => (notAStyle.indexOf(key) === -1 && props[key] ? styles[key] : null))
    .filter((style) => !!style);
  return <WrapperTag className={classnames([styles.text, ...stylesArray])}>{children}</WrapperTag>;
};

Text.defaultProps = {
  children: '',
  wrapperTag: 'div'
};

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  wrapperTag: PropTypes.string
};

export default Text;
