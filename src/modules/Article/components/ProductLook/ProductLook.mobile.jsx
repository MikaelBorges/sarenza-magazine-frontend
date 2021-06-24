import React, { useRef } from 'react';
import styles from './ProductLook.mobile.module.scss';
import useOnScreen from 'utils/useOnScreen';
import useGTM, { TrackEvent } from 'utils/useGTM';

const ProductLook = (props) => {
  const trackCTA = useRef();
  const isVisible = useOnScreen(trackCTA);

  const trackGTM = (props, eventName) => {
    let obj = {
      id: props.CTA.id,
      name: props.CTA.label,
      position: 'Product Look',
      strapId: `${props.CTA.id}-${props.CTA.label}-${eventName}`
    };
    useGTM(obj, eventName);
  };

    isVisible ? trackGTM(props, TrackEvent.PromotionPrint) : null;

  const trackCard = useRef();
  const isVisibleCard = useOnScreen(trackCard);

  const trackGTMCard = (props, eventName) => {
    let obj = {
      brand: props.brand,
      category: '',
      name: props.model,
      pid: '',
      price: '',
      id: props.pcid,
      variant: '',
      position: 'position',
      color: '',
      dimension69: '',
      list: 'product look',
      strapId: `${props.id}-${props.model}-${eventName}`
    };
    useGTM(obj, eventName);
  };

  return (
    <section className={styles.productLook}>
      <div className={styles.blockScrollable}>
        <h2 className={styles.title}>{props.Title}</h2>
        <p className={styles.paragraphe}>{props.Text}</p>
      </div>
      <img src={props.Image.url} alt={props.Image.alt} className={styles.poster} />
      <div className={styles.vignettesContainer}>
      
        {props.Vignettes.map((vignette) => {
          return (
            <a
              href={vignette.url}
              className={styles.url}
              key={vignette.id}
              onClick={(e) => {
                e.preventDefault();
                trackGTMCard(vignette, TrackEvent.ProductClick);
              }}
              ref={trackCard}>
              {isVisibleCard ? trackGTMCard(vignette, TrackEvent.ProductPrint) : null}

              <div className={styles.vignette} key={vignette.id} data-pcid={vignette.pcid}>
                <img
                  src={vignette.visuelUrl}
                  alt={`image du produit ${vignette.brand} - ${vignette.model}`}
                  className={styles.imgVignette}
                />
                <div className={styles.containerTxt}>
                  <span className={styles.statuLabel}>{vignette.statusLabel}</span>
                  <span className={styles.brand}>{vignette.brand}</span>
                  <span className={styles.model}>{vignette.model}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
      {props.CTA && (
        <a
          href={props.CTA.link}
          className={styles.link}
          ref={trackCTA}
          onClick={(e) => {
            e.preventDefault();
            trackGTM(props, TrackEvent.PromotionClick);
          }}>
          {props.CTA.label}
        </a>
      )}
    </section>
  );
};

export default ProductLook;
