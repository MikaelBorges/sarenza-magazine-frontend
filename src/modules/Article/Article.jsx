/* eslint-disable no-irregular-whitespace */

import PropTypes from 'prop-types';
import React from 'react';
import parse from 'html-react-parser';
import Banner from './components/Banner/Banner';
import styles from './Article.module.scss';
import { getComponent } from './config/LoadableComponent';
import Breadcrumb from '@/components/commons/Breadcrumb/Breadcrumb';
import ReadMore from './components/ReadMore/ReadMore';

const Article = ({ article, recentArticle }) => {
  return article ? (
    <div className={styles.article}>
      <div className={styles.boxBreadcrumb}>
        <Breadcrumb
          breadcrumbs={[
            {
              link: 'http://localhost:3000/',
              label: 'Retour'
            },
            {
              link: 'https://www.sarenza.com',
              label: 'Accueil'
            },
            {
              link: 'http://localhost:3000/',
              label: 'Magazine'
            },
            {
              link: 'http://localhost:3000/',
              label: `${article.title}`
            }
          ]}
        />
      </div>
      <Banner
        subTitleOptional={parse(article.subtitle)}
        srcImage={article.image.large}
        altImage="image de l'article"
        subTitleBanner={parse(article.title)}
        author={article.author}
        publishDate={article.publishDate}
        updateDate={article.updatedDate}
      />
      {article.modules.map((item) => {
        return getComponent(item);
      })}
      {recentArticle && <ReadMore articles={recentArticle} />}{' '}
    </div>
  ) : (
    <div>Loading</div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    author: PropTypes.string
  })
};

Article.defaultProps = {
  article: {}
};

export default Article;
