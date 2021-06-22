import React, {useRef} from 'react';
import styles from './ProductEdito.module.scss';
import useOnScreen from 'utils/useOnScreen';
import useGTM, { TrackEvent } from 'utils/useGTM';

const ProductEdito = ({ Title, Text, Vignette, CTA }) => {
    const trackCTA = useRef();
  const isVisible = useOnScreen(trackCTA);

  const trackGTM = (CTA, eventName) => {
    let obj = {
      id: CTA.id,
      name: CTA.label,
      position: 'Product EDITO'
    };
    useGTM(obj, eventName);
  };

  isVisible ? trackGTM(CTA, TrackEvent.PromotionPrint) : null;

      const trackCard = useRef();
      const isVisibleCard = useOnScreen(trackCard);
    
      const trackGTMCard = (vignette, eventName) => {
        let obj = {
          brand: vignette.brand,
          category: '',
          name: vignette.model,
          pid: '',
          price: '',
          id: vignette.pcid,
          variant: '',
          position: 'position',
          color: '',
          dimension69: '',
          list: 'product look'
        };
        useGTM(obj, eventName);
      };

  return Title && Text && Vignette ? (
    <section className={styles.productEdito}>
      <div className={styles.wrapperText}>
        <h2 className={styles.title}>{Title}</h2>
        <p className={styles.text}>{Text}</p>
        {CTA && (
          <a href={CTA.link} className={styles.link} ref={trackCTA} onClick={(e) => {
            e.preventDefault();
            trackGTM(CTA, TrackEvent.PromotionClick);
          }}>
            {CTA.label}
          </a>
        )}
      </div>
      <div className={styles.wrapperVignettes}>
        {Vignette.map((item) => {
          return (
            <a href={item.url} className={styles.url} ref={trackCard}  key={item.id}>
              { isVisibleCard ? trackGTMCard(item, TrackEvent.ProductPrint) : null}
              <div className={styles.vignette} data-pcid={item.pcid}>
                <img
                  src={item.visuelUrl}
                  alt={`image du produit ${item.brand} - ${item.model}`}
                  className={styles.imgVignette}
                />
                <div className={styles.containerTxt}>
                  <span className={styles.statuLabel}>{item.statusLabel}</span>
                  <span className={styles.brand}>{item.brand}</span>
                  <span className={styles.model}>{item.model}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  ) : null;
};

export default ProductEdito;
