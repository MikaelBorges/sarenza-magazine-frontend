import React from 'react';

import Heading from '../../../../../app/components/commons/Heading/Heading';
import styles from './Tile.module.scss';

const Tile = ({ backgroundUrl, title, description }) => {
  return (
    <section className={styles.section}>
      <div>
        <Heading level={3}>{title}</Heading>
        <div className={styles.description}>{description}</div>
      </div>
      <img src={backgroundUrl} alt={title} />
    </section>
  );
};

export default Tile;
