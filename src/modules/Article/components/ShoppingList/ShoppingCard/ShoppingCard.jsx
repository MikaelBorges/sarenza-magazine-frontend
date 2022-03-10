import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';

import styles from './ShoppingCard.module.scss';
import useOnScreen from 'utils/useOnScreen';
import useGTM, { TrackEvent } from 'utils/useGTM';

const ShoppingCard = ({ visuelUrl, url, statusLabel, model, pcid, brand, position, id }) => {
  const [favoriteStatus, setFavoriteStatus] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setFavoriteStatus(!favoriteStatus);
  }

  const trackProduct = useRef();
  const isVisible = useOnScreen(trackProduct);

  const trackGTM = (eventName) => {
    let obj = {
      brand: `${brand}`,
      category: `${''}`,
      name: `${model}`,
      pid: `${''}`,
      price: `${''}`,
      id: `${pcid}`,
      variant: '',
      position: `${position}`,
      color: '',
      dimension69: '',
      list: 'slider-magazine',
      strapId: `${id}-${model}-${eventName}`
    };
    useGTM(obj, eventName);
  };

  return (
    <div
      className={styles.card}
      ref={trackProduct}
      onClick={() => {
        trackGTM(TrackEvent.ProductClick);
      }}>
      {isVisible ? trackGTM(TrackEvent.ProductPrint) : null}
      <a href={url} className={styles.cardLink} role="button" tabIndex={-1}>
        <div className={styles.cardSubcontainer}>
          <img className={styles.image} src={visuelUrl} alt={model} />
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
          <div className={styles.cardTextContainer}>
            {statusLabel && <span className={styles.stateLabel}>{statusLabel}</span>}
            <span className={styles.titleProduct}>{brand}</span>
            <span className={styles.descriptionProduct}>{model}</span>
          </div>
        </div>
      </a>
    </div>
  );
};

ShoppingCard.propTypes = {
  cardImage: PropTypes.string,
  stateLabel: PropTypes.string,
  titleProduct: PropTypes.string,
  descriptionProduct: PropTypes.string,
  urlProduct: PropTypes.string,
  pcid: PropTypes.string
};

ShoppingCard.defaultProps = {
  cardImage: '',
  stateLabel: '',
  titleProduct: '',
  descriptionProduct: '',
  urlProduct: '',
  pcid: ''
};

export default ShoppingCard;
