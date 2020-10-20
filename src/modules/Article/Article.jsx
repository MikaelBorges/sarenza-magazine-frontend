import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Breadcrumb from '@/components/commons/Breadcrumb/Breadcrumb';
import Image from '@/components/commons/Image/Image';
import Text from '@/components/commons/Text';

import styles from './Article.module.scss';
import Description from './components/Description/Description';
import Duo from './components/Duo/Duo';

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
      <Image
        src="https://dummyimage.com/1200x452"
        alt="image de l'article"
        className={styles.bannerImage}
      />

      <div className={styles.wrapper}>
        <div className={styles.description}>
          <div className={styles.hashTitle}>
            <Text secondary>#AirMaxDay !</Text>
          </div>
          <Description
            author={article.author}
            publishDate="11/09/2020"
            updateDate={new Date(article.updated_at).toLocaleDateString('fr-FR')}
          />
        </div>

        <Duo
          title="title1"
          text="text"
          verbatim="verbatim"
          urlImage="https://dummyimage.com/480x658"
          textButton=""
          urlButton=""
        />

        <Duo
          title="title2"
          text="text"
          verbatim="verbatim"
          urlImage="https://dummyimage.com/480x658"
          textButton=""
          urlButton=""
        />

        <Duo
          title="title3"
          text="text"
          verbatim="verbatim"
          urlImage="https://dummyimage.com/480x658"
          textButton=""
          urlButton=""
        />
      </div>
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
