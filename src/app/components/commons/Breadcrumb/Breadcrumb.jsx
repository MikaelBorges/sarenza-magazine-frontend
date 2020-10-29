import PropTypes from 'prop-types';
import React from 'react';

import { LinkText } from '../Links';
import styles from './Breadcrumb.module.scss';
import { useRouter } from 'next/router';

const Breadcrumb = ({ breadcrumbs }) => {
  

  return breadcrumbs.map((breadcrumb) => {
    const router = useRouter();

  const handleClick = (e) =>{
    e.preventDefault();
    router.back();
  }
    return (
      <>
        <div className={styles.breadcrumb} onClick={breadcrumb.label === "Retour" ? handleClick : null}>
          <LinkText link={breadcrumb.link} key={breadcrumb.label}>
            {breadcrumb.label}
          </LinkText>
        </div>
        <span className={styles.separation}>/</span>
      </>
    );
  });
};

Breadcrumb.propTypes = {
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string
    })
  )
};

Breadcrumb.defaultProps = {
  breadcrumbs: []
};

export default Breadcrumb;
