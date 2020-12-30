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
              <div className={styles.imageContainer}>
                {card.url_image && (
                  <Image src={card.url_image} alt="image-product-line" />
                )}
                {card.url_cta && (
                  <a
                    className={`button darkseid pictenza pictenza-basket ${styles.gellule}`}
                    href={card.url_cta}
                    role="button"
                    tabIndex={-1}
                  >
                    <span className={styles.onlyText}>{card.url_text}</span>
                  </a>
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
            </div>
          );
        })}

          {/* <div className={styles.vignette}>
            <div className={styles.imageContainer}>
              <Image src="https://cdn.sarenza.net/_img/productsv4/0000264771/0000264771_484173_09_504x690.jpg" alt="image-product-line" />
              <a className={`button darkseid pictenza pictenza-basket ${styles.gellule}`}>
                <span className={styles.onlyText}>Voir tous les produits</span>
              </a>
              <span
                className={`pictenza pictenza-favorites ${styles.favoriteCard} ${
                  favoriteStatus ? styles.pictenzaFavoritesSelect : ''
                }`}
                data-pcid="6"
                onClick={(e) => handleClick(e)}
                role="button"
                tabIndex={-2}
              >
              </span>
            </div>
          </div> */}

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
