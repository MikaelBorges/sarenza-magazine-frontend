import React, { useRef } from 'react';
import styles from './ProductLook.mobile.module.scss';
import useOnScreen from 'utils/useOnScreen';
import useGTM, { TrackEvent } from 'utils/useGTM';
import ProductLookCard_mobile from './ProductLookCard/ProductLookCard_mobile';

const ProductLook = (props) => {
  const trackCTA = useRef();
  const isVisible = props.CTA ? useOnScreen(trackCTA) : false;

  const trackGTM = (props, eventName) => {
    let obj = {
      id: props.CTA.id,
      name: props.CTA.label,
      position: 'Product Look'
    };
    useGTM(obj, eventName);
  };

    isVisible ? trackGTM(props, TrackEvent.PromotionPrint) : null;

  return (
    <section className={styles.productLook}>
      <div className={styles.blockScrollable}>
        <h2 className={styles.title}>{props.Title}</h2>
        <p className={styles.paragraphe}>{props.Text}</p>
      </div>
      <img src={props.Image.url} alt={props.Image.alt} className={styles.poster} />
      <div className={styles.vignettesContainer}>
      
        {props.Vignettes.map((vignette) => {
          return <ProductLookCard_mobile {...vignette} key={`${vignette.pcid}`} />
        })}
      </div>
      {props.CTA && (
        <a
          href={props.CTA.link}
          className={styles.link}
          ref={trackCTA}
          onClick={(e) => {
            trackGTM(props, TrackEvent.PromotionClick);
          }}>
          {props.CTA.label}
        </a>
      )}
    </section>
  );
};

export default ProductLook;
