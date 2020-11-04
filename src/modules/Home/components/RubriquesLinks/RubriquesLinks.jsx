import React from 'react';
import classnames from 'classnames';
import { LinkButton } from '@/components/commons/Links';

import styles from './RubriquesLinks.module.scss';
import { useRouter } from 'next/router';

const RubriquesLinks = ({ rubriques }) => {
  const { query } = useRouter();


  return (
    <>
      <LinkButton link="/" extraClasses={[classnames(
        styles.rubriquesLinks,
        {
          [styles.active]: !query.rubriqueName
        }
      )]}>
        Tous les articles
      </LinkButton>
      {rubriques && rubriques.map((rubrique) => (
        <LinkButton
          link={`/${rubrique.url}`}
          extraClasses={[classnames(
            styles.rubriquesLinks,
            {
              [styles.active]: query.rubriqueName === rubrique.url
            }
          )]}
          key={rubrique.name}>
          {rubrique.name}
        </LinkButton>
      ))}
    </>
  );
};

export default RubriquesLinks;
