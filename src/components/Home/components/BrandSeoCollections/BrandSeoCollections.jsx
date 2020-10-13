import React from 'react';

import Heading from '../../../../app/components/commons/Heading/Heading';
import styles from './BrandSeoCollection.module.scss';
import Tile from './components/Tile';

const BrandSeoCollections = ({ title, data }) => {
  return (
    data && (
      <>
        <Heading level={2}>{title}</Heading>
        <div className={styles.description}>
          {data.map((item) => {
            return (
              <Tile
                backgroundUrl={item.backgroundUrl}
                title={item.title}
                description={item.description}
                key={item.title}
              />
            );
          })}
        </div>
      </>
    )
  );
};

export default BrandSeoCollections;
