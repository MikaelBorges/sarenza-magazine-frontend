import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as React from 'react';

import { LINK_TYPE } from '../../constants';
import ChildrenWithIcon from './components/ChildrenWithIcon';
import styles from './LinkGeneric.module.scss';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

const LinkGeneric = ({
  type,
  disabled,
  onClick,
  onKeyDown,
  onFocus,
  onBlur,
  onEnter,
  onLeave,
  absolute,
  link,
  noLink,
  noFollow,
  newTab,
  baseLinkStyle,
  componentCustomClass,
  extraClasses,
  extraParameters,
  iconName,
  iconAfter,
  title,
  children,
  dataTestid,
  pagination,
  first,
  last
  
}) => {
  const linkPrefix = serverRuntimeConfig.CDN_PREFIX || '';
  link = absolute ? link : (linkPrefix ? linkPrefix : '') + link;

  const childrenLabel = children && <span className={styles.buttonLabel}>{children}</span>;
  const cssClasses = classnames(
    extraClasses && extraClasses.length > 0 ? extraClasses : null,
    {
      [styles[`${type}LinkFormat`]]: !baseLinkStyle || baseLinkStyle.length === 0,
      [styles.link]: type === LINK_TYPE.TEXT,
      [styles.button]: type === LINK_TYPE.BUTTON,
      [styles.disabled]: disabled,
      [styles.pagination]: pagination,
      [styles.first]: first,
      [styles.last]: last,
      [styles[componentCustomClass]]: componentCustomClass
    },
    ...(baseLinkStyle || [{ 0: 'default' }])
  );

  if (type === LINK_TYPE.TEXT && link) {
    const linkProps = {
      target: newTab ? '_blank' : undefined,
      className: cssClasses,
      ...extraParameters,
      disabled,
      pagination: pagination ? true : undefined,
      first: first ? true : undefined,
      last: last ? true : undefined
    };

    return absolute ? (
      <a
        href={link}
        title={title}
        onFocus={onFocus}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        rel={`noopener noreferrer${noFollow ? ' nofollow' : ''}`}
        {...linkProps}>
        <ChildrenWithIcon icon={{ name: iconName, isAfter: iconAfter }} label={childrenLabel} />
      </a>
    ) : (
      <a href={link} rel={noFollow ? ' nofollow' : undefined} {...linkProps}>
        <ChildrenWithIcon icon={{ name: iconName, isAfter: iconAfter }} label={childrenLabel} />
      </a>
    );
  }

  if (type === LINK_TYPE.BUTTON && (onClick || onKeyDown || link)) {
    if (!noLink) {
      return (
        <a href={link}>
          <button
            type="button"
            title={title}
            onFocus={onFocus}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onClick={onClick}
            disabled={disabled}
            className={cssClasses}
            pagination={pagination}
            first={first}
            last={last}
            data-testid={dataTestid}>
            {iconName ? (
              <ChildrenWithIcon
                icon={{ name: iconName, isAfter: iconAfter }}
                label={childrenLabel}
              />
            ) : (
              childrenLabel
            )}
          </button>
        </a>
      );
    }
    return (
      <button
        type="button"
        title={title}
        onFocus={onFocus}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onClick={onClick}
        disabled={disabled}
        pagination={pagination}
        first={first}
        last={last}
        className={cssClasses}
        data-testid={dataTestid}>
        {iconName ? (
          <ChildrenWithIcon icon={{ name: iconName, isAfter: iconAfter }} label={childrenLabel} />
        ) : (
          childrenLabel
        )}
      </button>
    );
  }

  return <>Lien en erreur</>;
};

LinkGeneric.propTypes = {
  type:
    PropTypes.string /* can be either TEXT (a text link), BUTTON (a button link) or OTHER
    (any other type of component containing a link) */,
  disabled:
    PropTypes.bool /* if true, the item is disabled, the mouse has a forbidden pointer and
    the links do not work */,
    pagination:
    PropTypes.bool,
    first:
    PropTypes.bool,
    last:
    PropTypes.bool,
  onClick: PropTypes.func /* function describing the behaviour of the item when clicked on */,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  onEnter: PropTypes.func,
  onLeave: PropTypes.func,
  absolute:
    PropTypes.bool /* should be set to true if the link is an absolute link (link to
    another website), false if it is a relative link (ReactLink) */,
  link: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]) /* the url towards which the
        user is redirected on click */,
  noFollow: PropTypes.bool,
  newTab: PropTypes.bool,
  noLink: PropTypes.bool,
  baseLinkStyle: PropTypes.arrayOf(
    PropTypes.string
  ) /* describes the basic styling of the link,
        if different from the default one */,
  componentCustomClass:
    PropTypes.string /* adds a classname to the item, which should already
    exist in the item's CSS (ex: instances of linkStyle and buttonStyle) */,
  extraClasses: PropTypes.arrayOf(PropTypes.string),
  extraParameters: PropTypes.objectOf(
    PropTypes.any
  ) /* adds extra parameters to the link (the a
        tag or the ReactLink) if needed, and if it is present (when the link is undefined... there is no
        link) */,
  iconName:
    PropTypes.string /* if defined, adds an arrow with the specified direction at the end of the link */,
  iconAfter: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  dataTestid: PropTypes.string
};

LinkGeneric.defaultProps = {
  type: LINK_TYPE.TEXT,
  // I put undefined values here so that the created objects do not contain null entries
  disabled: false,
  pagination: false,
  onClick: undefined,
  onFocus: undefined,
  onKeyDown: undefined,
  onBlur: undefined,
  onEnter: undefined,
  onLeave: undefined,
  absolute: false,
  noLink: false,
  link: undefined,
  noFollow: false,
  newTab: false,
  baseLinkStyle: [styles.default],
  componentCustomClass: '',
  extraClasses: undefined,
  extraParameters: {},
  iconName: undefined,
  iconAfter: false,
  children: undefined,
  title: '',
  dataTestid: '',
  first:false,
  last:false
};

export default LinkGeneric;
