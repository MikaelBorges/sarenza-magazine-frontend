import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from '@/components/commons/Image/Image';
import styles from './ProductLine.mobile.module.scss';

const ProductLineMobile = ({ ProductCard }) => {

  const [favoriteStatus, setFavoriteStatus] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setFavoriteStatus(!favoriteStatus);
  }

  return (
    <div className={styles.vignetteContainer}>
        {ProductCard.map((card) => {
          return (
            <div className={styles.vignette}>
              <a href={card.url_cta} className={styles.link} role="button" tabIndex={-1}>
                <div className={styles.imageContainer}>
                  {card.url_image && (
                    <Image src={card.url_image} alt="image-product-line" />
                  )}
                  {card.url_cta && (
                    <span
                      className={`button darkseid pictenza pictenza-basket ${styles.gellule}`}
                    >
                      <span className={styles.onlyText}>{card.url_text}</span>
                    </span>
                  )}
                  {card.pcid && (
                    <span
                      className={`pictenza pictenza-favorites ${styles.favoriteCard} ${
                        favoriteStatus ? styles.pictenzaFavoritesSelect : ''
                      }`}
                      data-pcid={card.pcid}
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
        })}

    </div>
  );
};

ProductLineMobile.propTypes = {
  ProductCard: PropTypes.arrayOf(
    PropTypes.shape({
      url_image: PropTypes.string,
      url_cta: PropTypes.string,
      url_text: PropTypes.string,
      pcid: PropTypes.string
    })
  )
};

ProductLineMobile.defaultProps = {
  ProductCard: []
};

export default ProductLineMobile;
