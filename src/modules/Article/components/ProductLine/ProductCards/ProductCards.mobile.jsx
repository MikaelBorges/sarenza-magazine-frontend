import React, { useState } from 'react';
import Image from '@/components/commons/Image/Image';
import styles from './ProductCards.mobile.module.scss';

const ProductCardMobile = ({ pcid, url_cta, url_image, url_text }) => {

  const [favoriteStatus, setFavoriteStatus] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setFavoriteStatus(!favoriteStatus);
  }

  return (
    <div className={styles.vignette}>
      <a href={url_cta} className={styles.link} role="button" tabIndex={-1}>
        <div className={styles.imageContainer}>
          {url_image && (
            <div className={styles.imageSubContainer}>
              <Image src={url_image} alt="image-product-line" />
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
              {url_cta && (
                <span
                  className={`button darkseid pictenza pictenza-basket ${styles.gellule}`}
                >
                  <span className={styles.onlyText}>{url_text}</span>
                </span>
              )}
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default ProductCardMobile;
