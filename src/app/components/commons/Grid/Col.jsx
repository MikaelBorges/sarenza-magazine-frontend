import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './Col.module.scss';

const responsiveClass = (breakPoint, values) => {
  if (values) {
    return classnames({
      [styles[`col-${breakPoint}-${values.span}`]]: values.span,
      [styles[`offset-${breakPoint}-${values.offset}`]]: values.offset && values.offset.toString(), // avoid 0 value to be null
      [styles[`order-${breakPoint}-${values.order}`]]: values.order
    });
  }
  return '';
};

const Col = ({ children, span, offset, order, sm, md, lg, xl, extraClasses }) => {
  return (
    <div
      className={classnames(
        extraClasses,
        {
          [styles[`col-${span}`]]: span,
          [styles[`offset-${offset}`]]: offset,
          [styles[`order-${order}`]]: order
        },
        responsiveClass('sm', sm),
        responsiveClass('md', md),
        responsiveClass('lg', lg),
        responsiveClass('xl', xl)
      )}>
      {children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.node,
  span: PropTypes.number,
  offset: PropTypes.number,
  order: PropTypes.number,
  sm: PropTypes.instanceOf(Object),
  md: PropTypes.instanceOf(Object),
  lg: PropTypes.instanceOf(Object),
  xl: PropTypes.instanceOf(Object),
  extraClasses: PropTypes.string
};

Col.defaultProps = {
  children: '',
  span: 1,
  offset: undefined,
  order: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  extraClasses: undefined
};

export default Col;
