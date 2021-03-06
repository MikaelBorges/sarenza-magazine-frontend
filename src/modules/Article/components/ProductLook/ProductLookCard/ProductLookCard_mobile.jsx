import React, { useState, useRef } from 'react';
import useOnScreen from 'utils/useOnScreen';
import useGTM, { TrackEvent } from 'utils/useGTM';
import styles from './ProductLookCard.mobile.module.scss';

const ProductLookCard_mobile = ({ url, pcid, visuelUrl, brand, model, statusLabel, id }) => {
  const trackCard = useRef();
  const isVisibleCard = useOnScreen(trackCard);

  const trackGTMCard = (eventName) => {
    let obj = {
      brand: brand,
      category: '',
      name: model,
      pid: '',
      price: '',
      id: pcid,
      variant: '',
      position: 'position',
      color: '',
      dimension69: '',
      list: 'product look',
      strapId: `${id}-${model}-${eventName}`
    };
    useGTM(obj, eventName);
  };

  return (
    <a
      href={url}
      className={styles.url}
      onClick={() => {
        trackGTMCard(TrackEvent.ProductClick);
      }}
      ref={trackCard}>
      {isVisibleCard ? trackGTMCard(TrackEvent.ProductPrint) : null}

      <div className={styles.vignette} data-pcid={pcid}>
        <img
          src={visuelUrl}
          alt={`image du produit ${brand} - ${model}`}
          className={styles.imgVignette}
        />
        <div className={styles.containerTxt}>
          <span className={styles.statuLabel}>{statusLabel}</span>
          <span className={styles.brand}>{brand}</span>
          <span className={styles.model}>{model}</span>
        </div>
      </div>
    </a>
  );
};

export default ProductLookCard_mobile;
