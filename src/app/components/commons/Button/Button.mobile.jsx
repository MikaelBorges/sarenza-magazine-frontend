import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Icon from '../Icon';
import * as ICONS from '../Icon/constants';
import Loading, { ANIM_TYPE } from '../Loader/Loading';
import Status from '../Status';
import STATUS_TYPE from '../Status/constants';
import styles from './Button.mobile.module.scss';

const Button = ({
  disabled,
  onClick,
  onKeyDown,
  onFocus,
  onBlur,
  onEnter,
  onLeave,
  customClass,
  iconName,
  iconWidth,
  iconHeight,
  iconAfter,
  title,
  children,
  dataTestid,
  isLoading,
  isLoaded,
  stopLoaderFn,
  whiteTheme
}) => {
  const childrenLabel = children && <span className={styles.buttonLabel}>{children}</span>;
  // eslint-disable-next-line react/prop-types
  const ButtonIcon = ({ cssClass }) => (
    <Icon name={iconName} width={iconWidth} height={iconHeight} cssClass={cssClass} />
  );
  const chidrenWithIcon = iconName ? (
    <>
      {iconAfter ? (
        <>
          {childrenLabel}
          <ButtonIcon cssClass={styles.iconAfter} />
        </>
      ) : (
        <>
          <ButtonIcon cssClass={styles.iconBefore} />
          {childrenLabel}
        </>
      )}
    </>
  ) : (
    <>{childrenLabel}</>
  );

  const cssClasses = classnames(styles.button, styles.default, customClass, {
    [styles.disabled]: disabled,
    [styles.hasLoader]: isLoading || isLoaded,
    [styles.whiteTheme]: whiteTheme
  });

  useEffect(() => {
    if (isLoaded) {
      setTimeout(() => stopLoaderFn(), 3000);
    }
  }, [isLoaded, stopLoaderFn]);

  if (onClick || onKeyDown) {
    // eslint-disable-next-line no-nested-ternary
    const buttonStatus = isLoading
      ? STATUS_TYPE.WARNING
      : isLoaded
      ? STATUS_TYPE.SUCCESS
      : undefined;
    return (
      <Status
        type={buttonStatus}
        renderElement={(statusCssClasses) => (
          <button
            type="button"
            title={title}
            onFocus={onFocus}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onClick={!isLoading && !isLoaded ? onClick : () => {}}
            disabled={disabled}
            className={cssClasses.concat(' ', statusCssClasses)}
            data-testid={dataTestid}>
            {isLoading && (
              <>
                <Loading
                  noPadding
                  animationType={ANIM_TYPE.SPINNER}
                  cssClass={styles.iconBefore}
                  size="16px"
                />
                <span className={styles.buttonLabel}>Chargement...</span>
              </>
            )}
            {isLoaded && (
              <>
                <Icon name={ICONS.CHECKED} cssClass={styles.iconBefore} width="16px" />
                <span className={styles.buttonLabel}>C&rsquo;est bon !</span>
              </>
            )}
            {!isLoading && !isLoaded && chidrenWithIcon}
          </button>
        )}
      />
    );
  }

  return <>Lien en erreur</>;
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  onEnter: PropTypes.func,
  onLeave: PropTypes.func,
  customClass: PropTypes.string,
  iconName: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  iconAfter: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
  dataTestid: PropTypes.string,
  isLoading: PropTypes.bool,
  isLoaded: PropTypes.bool,
  stopLoaderFn: PropTypes.func
};

Button.defaultProps = {
  disabled: false,
  onClick: undefined,
  onFocus: undefined,
  onKeyDown: undefined,
  onBlur: undefined,
  onEnter: undefined,
  onLeave: undefined,
  customClass: null,
  iconName: undefined,
  iconWidth: '10px',
  iconHeight: '12px',
  iconAfter: false,
  children: undefined,
  title: '',
  dataTestid: '',
  isLoading: false,
  isLoaded: false,
  stopLoaderFn: () => {}
};

export default Button;
