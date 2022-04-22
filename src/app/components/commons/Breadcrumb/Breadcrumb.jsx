import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { LinkText } from '../Links';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = ({ article, rubriques }) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  };
  const urlKeys = Object.keys(router.query).filter(
    (param) => param === 'rubriqueName' || param === 'slug'
  );
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
        {urlKeys.length == 0 ? (
          <h1 className={styles.h1}>Magazine</h1>
        ) : (
          <LinkText link="/">Magazine</LinkText>
        )}
      </div>

      {urlKeys.map((urlKey, i) => {
        return urlKey !== 'isMobile' ? (
          <div key={`${urlKey}${i}`} className={styles.breadcrumb}>
            {urlKeys.length === i + 1 && !article ? (
              <h1 className={styles.h1} link={`/${router.query[urlKey]}`}>
                {getLabel(urlKey, article, rubriques, router)}
              </h1>
            ) : (
              <LinkText link={`/${router.query[urlKey]}`} disabled={urlKeys.length === i + 1}>
                {getLabel(urlKey, article, rubriques, router)}
              </LinkText>
            )}
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
function getLabel(urlKey, article, rubriques, router) {
  if (article) {
    if (urlKey === 'slug') return article.title;
    if (urlKey === 'rubriqueName') return article.rubrique.rubrique;
  }
  if (rubriques) {
    if (urlKey === 'rubriqueName') {
      return rubriques.header.rubriques.find((r) => router.query[urlKey] === r.url)?.name;
    }
  }
  return router.query[urlKey].replace(/-/g, ' ');
}
