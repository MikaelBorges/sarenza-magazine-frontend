import React, { useRef } from 'react';
import styles from './ProductEditoCard.mobile.module.scss';
import useOnScreen from 'utils/useOnScreen';
import useGTM, { TrackEvent } from 'utils/useGTM';

const ProductEditoCard_mobile = ({ brand, model, pcid, id, url, visuelUrl, statusLabel }) => {
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
      ref={trackCard}
      key={id}
      onClick={() => {
        trackGTMCard(TrackEvent.ProductClick);
      }}>
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

export default ProductEditoCard_mobile;
