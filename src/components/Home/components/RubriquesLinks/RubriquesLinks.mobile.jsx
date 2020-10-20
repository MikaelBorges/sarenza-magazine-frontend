import React from 'react';

import { LinkButton } from '@/components/commons/Links';

import styles from './RubriquesLinks.module.mobile.scss';

const RubriquesLinks = ({ rubriques }) => {
  return (
    <>
      <LinkButton link="/" extraClasses={[styles.rubriquesLinks]}>
        Tous les articles
      </LinkButton>
      {rubriques.map((rubrique) => (
        <LinkButton
          link={`/rubriques/${rubrique.url}`}
          extraClasses={[styles.rubriquesLinks]}
          key={rubrique.name}>
          {rubrique.name}
        </LinkButton>
      ))}
    </>
  );
};

export default RubriquesLinks;
