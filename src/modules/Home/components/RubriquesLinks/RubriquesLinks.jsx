import React from 'react';
import classnames from 'classnames';
import styles from './RubriquesLinks.module.scss';
import { useRouter } from 'next/router';
import getConfig from "next/config"

const {serverRuntimeConfig} = getConfig()

const RubriquesLinks = ({ rubriques }) => {
  const { query } = useRouter();

  const linkPrefix = serverRuntimeConfig.CDN_PREFIX || '' 

  return (
    <>
      <a href={`${linkPrefix ? `${linkPrefix}` : '/'}`} extraClasses={[classnames(
        styles.rubriquesLinks,
        {
          [styles.active]: !query.rubriqueName
        }
      )]}>
        Tous les articles
      </a>
      {rubriques && rubriques.map((rubrique) => (
        <a
          href={`${linkPrefix ? `${linkPrefix}/` : '/'}${rubrique.url}`}
          extraClasses={[classnames(
            styles.rubriquesLinks,
            {
              [styles.active]: query.rubriqueName === rubrique.url
            }
          )]}
          key={rubrique.name}>
          {rubrique.name}
        </a>
      ))}
    </>
  );
};

export default RubriquesLinks;
