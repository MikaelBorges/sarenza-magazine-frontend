import React, { useState } from 'react';
import Image from '@/components/commons/Image/Image';
import styles from './ProductCards.module.scss';

const ProductCards = ({ pcid, url_cta, url_image, url_text }) => {
  const [favoriteStatus, setFavoriteStatus] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setFavoriteStatus(!favoriteStatus);
  }

  return (
    <div className={styles.card} key={pcid}>
      <a href={url_cta} className={styles.link} role="button" tabIndex={-1}>
        <div className={styles.cardSubcontainer}>
          {url_image && (
            <Image src={url_image} alt="image-product-line" />
          )}
          {url_cta && (
            <span
              className={`button darkseid pictenza pictenza-basket ${styles.gellule}`}
              href={url_cta}
              role="button"
              tabIndex={-1}
            >
              <span className={styles.onlyText}>{url_text}</span>
            </span>
          )}
          {pcid && (
            <span
              className={`pictenza pictenza-favorites ${styles.favoriteCard} ${
                favoriteStatus ? styles.pictenzaFavoritesSelect : ''
              }`}
              data-pcid={pcid}
              onClick={(e) => handleClick(e)}
              role="button"
              tabIndex={-2}
            >
            </span>
          )}
        </div>
      </a>
    </div>
  );
};

export default ProductCards;
