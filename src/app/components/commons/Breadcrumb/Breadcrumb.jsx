import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { LinkText } from '../Links';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = ({ article }) => {
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
        <LinkText link="https://www.sarenza.com" absolute>
          Accueil
        </LinkText>
      </div>
      <div className={styles.breadcrumb}>
        <LinkText link="/">Magazine</LinkText>
      </div>

      {Object.keys(router.query).map((urlKey, i) => {
        return urlKey !== 'isMobile' ? (
          <div key={`${urlKey}${i}`} className={styles.breadcrumb}>
            <LinkText link={`/${router.query[urlKey]}`}>
              {getLabel(urlKey, article, router)}
            </LinkText>
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

export default connect((state) => {
  return state;
})(Breadcrumb);
function getLabel(urlKey, article, router) {
  if (article) {
    if (urlKey === 'slug') return article.title;
    if (urlKey === 'rubriqueName') return article.rubrique.rubrique;
  }
  return router.query[urlKey].replace(/-/g, ' ');
}
