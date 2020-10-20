import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Breadcrumb from '@/components/commons/Breadcrumb/Breadcrumb';

import styles from './Article.module.scss';
import Banner from './components/Banner/Banner';

const Article = ({ rubrique, slug }) => {
  const breadcrumbs = [
    {
      label: 'Home',
      link: '/'
    },
    {
      label: rubrique,
      link: `/rubriques/${rubrique}`
    },
    {
      label: slug,
      link: `/${slug}`
    }
  ];
  const [article, setArticle] = useState();

  useEffect(() => {
    const getArticle = async () => {
      await fetch(`${process.env.API_URL}/articles/?url=${slug}`)
        .then((res) => res.json())
        .then((result) => {
          setArticle(result);
        });
    };
    getArticle();
  }, [slug]);

  return article ? (
    <div className={styles.article}>
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <Banner
        srcImage="https://dummyimage.com/1200x452"
        altImage="image de l'article"
        subTitleBanner="#AirMaxDay !"
        author={article.author}
        publishDate="11/09/2020"
        updateDate={new Date(article.updated_at).toLocaleDateString('fr-FR')}
      />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

Article.propTypes = {
  rubrique: PropTypes.string,
  slug: PropTypes.string
};

Article.defaultProps = {
  rubrique: '',
  slug: ''
};

export default Article;
