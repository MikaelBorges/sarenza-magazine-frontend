import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
import React from 'react';

import { LinkText } from '../Links';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  };
  return (
    <>
      <div
        className={styles.breadcrumb}
        onClick={handleClick}
        onKeyPress={handleClick}
        role="button"
        tabIndex="-1">
        <LinkText link="/">Retour</LinkText>
      </div>
      <div className={styles.breadcrumb}>
        <LinkText link="https://www.sarenza.com">Accueil</LinkText>
      </div>
      <div className={styles.breadcrumb}>
        <LinkText link="/">Magazine</LinkText>
      </div>
      

      {Object.keys(router.query).map((urlKey, i) => {
        return urlKey !== 'isMobile' ? (
          <div key={`${urlKey}${i}`} className={styles.breadcrumb}>
            <a href={`/${router.query[urlKey]}`} >
              {router.query[urlKey].replace(/-/g, ' ')}
            </a>
          </div>
        ) : null;
      })}
    </>
  );
};
// key={`${urlKey}${i}`}
// Breadcrumb.propTypes = {
//   breadcrumbs: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string,
//       link: PropTypes.string
//     })
//   )
// };

// Breadcrumb.defaultProps = {
//   breadcrumbs: []
// };

export default Breadcrumb;
