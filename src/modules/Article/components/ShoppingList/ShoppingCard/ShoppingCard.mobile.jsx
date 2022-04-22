import PropTypes from 'prop-types';
import React, { useState, useRef } from 'react';
import styles from './ShoppingCard.mobile.module.scss';
import useOnScreen from 'utils/useOnScreen';
import useGTM, { TrackEvent } from 'utils/useGTM';

const ShoppingCardMobile = ({
  cardImage,
  stateLabel,
  titleProduct,
  descriptionProduct,
  urlProduct,
  pcid,
  id,
  model
}) => {
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
    <li className={styles.card}>
      <a
        href={urlProduct}
        className={styles.cardLink}
        role="button"
        tabIndex={-1}
        ref={trackProduct}
        onClick={() => {
          trackGTM(TrackEvent.ProductClick);
        }}>
        {isVisible ? trackGTM(TrackEvent.ProductPrint) : null}
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
