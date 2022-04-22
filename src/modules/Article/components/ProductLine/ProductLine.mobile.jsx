import React from 'react';
import styles from './ProductLine.mobile.module.scss';
import ProductCardsMobile from './ProductCards/ProductCards.mobile';

const ProductLineMobile = ({ ProductCard }) => {
  return (
    <div className={styles.vignetteContainer}>
      {ProductCard.map((card) => {
        if (card.url_image) {
          return <ProductCardsMobile {...card} key={card.pcid} />;
        }
      })}
    </div>
  );
};

export default ProductLineMobile;
