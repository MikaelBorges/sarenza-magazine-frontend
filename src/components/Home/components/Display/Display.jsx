import React from 'react';

import styles from './Display.module.scss';

const Display = () => {
  return (
    <div className={styles.block}>
      <div className={styles.advice}>Besoin de conseils pour l’entretien de vos chaussures ?</div>
      <div className={styles.ctaDisplay}>Voir nos conseils</div>
    </div>
  );
};

export default Display;
