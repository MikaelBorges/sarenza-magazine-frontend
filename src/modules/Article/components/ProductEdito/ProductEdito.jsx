import React, { useRef } from 'react';
import styles from './ProductEdito.module.scss';
import useOnScreen from 'utils/useOnScreen';
import useGTM, { TrackEvent } from 'utils/useGTM';
import ProductEditoCard from './ProductEditoCard/ProductEditoCard';

const ProductEdito = ({ Title, Text, Vignette, CTA }) => {
  const trackCTA = useRef();
  const isVisible = CTA ? useOnScreen(trackCTA) : false;

  const trackGTM = (CTA, eventName) => {
    let obj = {
      id: CTA.id,
      name: CTA.label,
      position: 'Product EDITO'
    };
    useGTM(obj, eventName);
  };

  isVisible ? trackGTM(CTA, TrackEvent.PromotionPrint) : null;

  return Title && Text && Vignette ? (
    <section className={styles.productEdito}>
      <div className={styles.wrapperText}>
        <h2 className={styles.title}>{Title}</h2>
        <p className={styles.text}>{Text}</p>
        {CTA && (
          <a href={CTA.link} className={styles.link} ref={trackCTA} onClick={() => {
            trackGTM(CTA, TrackEvent.PromotionClick);
          }}>
            {CTA.label}
          </a>
        )}
      </div>
      <div className={styles.wrapperVignettes}>
        {Vignette.map((item) => {
          return <ProductEditoCard {...item} key={item.pcid} />
        })}
      </div>
    </section>
  ) : null;
};

export default ProductEdito;
