import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Breadcrumb from '@/components/commons/Breadcrumb/Breadcrumb';
import Image from '@/components/commons/Image/Image';
import Text from '@/components/commons/Text';

import styles from './Article.module.scss';
import Description from './components/Description/Description';

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
    <div>
      <Breadcrumb breadcrumbs={breadcrumbs} />
      <Image src="https://dummyimage.com/1200x452" alt="image de l'article" />
      <div className={styles.description}>
        <Text huge secondary>
          #AirMaxDay !
        </Text>
        <Description
          author={article.author}
          publishDate="11/09/2020"
          updateDate={new Date(article.updated_at).toLocaleDateString('fr-FR')}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.item}>
          <Text huge secondary>
            Nike Air Max !
          </Text>
          <div className={styles.paragraph}>
            <Text big>
              Il y a 33 ans, une certaine petite bulle d’air faisait son apparition, révolutionnant
              la mode, la rue, le sport… Aujourd’hui, fort de nouvelles légendes, le mythe Nike Air
              continue de briller aux pieds de toute la famille, ados, petits et grands : bienvenue
              sur la planète Air ! Il y a 33 ans, une certaine petite bulle d’air faisait son
              apparition, révolutionnant la mode, la rue, le sport… Aujourd’hui, fort de nouvelles
              légendes,
            </Text>
          </div>
          <div className={styles.paragraph}>
            <Text verbatim>
              fort de nouvelles légendes, le mythe Nike Air continue de briller aux pieds.
            </Text>
          </div>
        </div>
        <div className={styles.item}>
          <Image src="https://dummyimage.com/480x658" alt="image de l'article" />
        </div>
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
