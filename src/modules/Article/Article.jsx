/* eslint-disable no-irregular-whitespace */

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import Breadcrumb from '@/components/commons/Breadcrumb/Breadcrumb';

import styles from './Article.module.scss';
import Banner from './components/Banner/Banner';
import BlockText from './components/BlockText/BlockText';
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

      <Banner
        subTitleOptional="Besoin d'un conseil ?"
        srcImage="https://dummyimage.com/1200x452"
        altImage="image de l'article"
        subTitleBanner="#AirMaxDay !"
        author={article.author}
        publishDate="11/09/2020"
        updateDate={new Date(article.updated_at).toLocaleDateString('fr-FR')}
      />

      {/* <BannerMobile
        subTitleOptional="Besoin d'un conseil ?"
        srcImage="https://dummyimage.com/500x500"
        altImage="image de l'article"
        subTitleBanner="#AirMaxDay !"
        author={article.author}
        publishDate="11/09/2020"
        updateDate={new Date(article.updated_at).toLocaleDateString('fr-FR')}
      /> */}

      {/* <DuoMobile
        title="title1"
        texts={[
          {text: 'Mon joli texte et un verbatim', type: 'text'},
          {text: 'Fort de nouvelles légendes, le mythe Nike Air continue de briller aux pieds.', type: 'verbatim'},
          {text: 'et la suite de mon texte.', type: 'text'}
        ]}
        urlImage="https://dummyimage.com/500x514"
        altImage="alt"
        textButton="Voir la sélection"
        urlButton="#"
      />

      <BlockTextMobile
        title="titleBlock"
        text="text"
        textVerbatim="Fort de nouvelles légendes, le mythe Nike Air continue de briller aux pieds."
        textButton="Voir la sélection"
        urlButton="#"
      />

      <DuoMobile
        title="title2"
        texts={[
          {text: 'Mon joli texte et un verbatim', type: 'text'},
          {text: 'Fort de nouvelles légendes, le mythe Nike Air continue de briller aux pieds.', type: 'verbatim'},
          {text: 'et la suite de mon texte.', type: 'text'}
        ]}
        urlImage="https://dummyimage.com/500x514"
        altImage="alt"
        textButton="Voir la sélection"
        urlButton="#"
      /> */}

      <Duo
        title="title1"
        texts={[
          { text: 'Mon joli texte et un verbatim', type: 'text' },
          {
            text: 'Fort de nouvelles légendes, le mythe Nike Air continue de briller aux pieds.',
            type: 'verbatim'
          },
          { text: 'et la suite de mon texte.', type: 'text' }
        ]}
        urlImage="https://dummyimage.com/480x658"
        altImage="alt"
        textButton="Voir la sélection"
        urlButton="#"
      />

      <BlockText
        title="titleBlock"
        text="text"
        textPartIsAfter
        textButton="Voir la sélection"
        urlButton="#"
      />

      <Duo
        title="title2"
        texts={[
          { text: 'Mon joli texte et un verbatim', type: 'text' },
          {
            text: 'Fort de nouvelles légendes, le mythe Nike Air continue de briller aux pieds.',
            type: 'verbatim'
          },
          { text: 'et la suite de mon texte.', type: 'text' }
        ]}
        urlImage="https://dummyimage.com/480x658"
        altImage="alt"
        textButton="Voir la sélection"
        urlButton="#"
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