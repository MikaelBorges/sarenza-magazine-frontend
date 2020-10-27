import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './ShoppingCard.mobile.module.scss';

const ShoppingCardMobile = ({
  cardImage,
  stateLabel,
  titleProduct,
  descriptionProduct,
  urlProduct,
  pcid
}) => {
  const [favoriteStatus, setFavoriteStatus] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    setFavoriteStatus(!favoriteStatus);
  }

  return (
    <li className={styles.card}>
      <a href={urlProduct} className={styles.cardLink} role="button" tabIndex={-1}>
        <div className={styles.cardImageContainer}>
          <img className={styles.cardImage} src={cardImage} alt={titleProduct} />
          {pcid && (
            <span
              className={`pictenza pictenza-favorites ${styles.favoriteCard} ${
                favoriteStatus && styles.pictenzaFavoritesSelect
              }`}
              data-pcid={pcid}
              onClick={(e) => handleClick(e)}
              onKeyDown={(e) => handleClick(e)}
              role="button"
              tabIndex={-2}
            />
          )}
        </div>
        <div className={styles.cardTextContainer}>
          {stateLabel && <span className={styles.stateLabel}>{stateLabel}</span>}
          <span className={styles.titleProduct}>{titleProduct}</span>
          <span className={styles.descriptionProduct}>{descriptionProduct}</span>
        </div>
      </a>
    </li>
  );
};

ShoppingCardMobile.propTypes = {
  cardImage: PropTypes.string,
  stateLabel: PropTypes.string,
  titleProduct: PropTypes.string,
  descriptionProduct: PropTypes.string,
  urlProduct: PropTypes.string,
  pcid: PropTypes.string
};

ShoppingCardMobile.defaultProps = {
  cardImage: '',
  stateLabel: '',
  titleProduct: '',
  descriptionProduct: '',
  urlProduct: '',
  pcid: ''
};

export default ShoppingCardMobile;
