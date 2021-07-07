import React, { useRef } from 'react';
import styles from './ProductLook.module.scss';
import useOnScreen from 'utils/useOnScreen';
import useGTM, { TrackEvent } from 'utils/useGTM';

const ProductLook = ({Image, Title, Text, Vignettes, CTA}) => {
  const trackCTA = useRef();
  const isVisible = CTA ? useOnScreen(trackCTA) : false;

  const trackGTM = (CTA, eventName) => {
    let obj = {
      id: CTA.id,
      name: CTA.label,
      position: 'Product Look'
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
          list: 'product look',
          strapId: `${vignette.id}-${vignette.model}-${eventName}`
        };
        useGTM(obj, eventName);
      };

  return (
    <section className={styles.productLook}>
      <img src={Image.url} alt={Image.alt} className={styles.poster} />
      <div className={styles.blockScrollable}>
        <h2 className={styles.title}>{Title}</h2>
        <p className={styles.paragraphe}>{Text}</p>
        {Vignettes.map((vignette) =>    
             (
            <a href={vignette.url} className={styles.url} ref={trackCard} key={vignette.id} onClick={
              ()=>{ 
                trackGTMCard(vignette, TrackEvent.ProductClick) 
            }}>
              { isVisibleCard ? trackGTMCard(vignette, TrackEvent.ProductPrint) : null}
              <div className={styles.vignette} data-pcid={vignette.pcid}>
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
          )
        )}
        {CTA && (
          <a
            href={CTA.link}
            className={styles.link}
            ref={trackCTA}
            onClick={() => {
              trackGTM(CTA, TrackEvent.PromotionClick);
            }}>
            {CTA.label}
          </a>
        )}
      </div>
    </section>
  );
};

export default ProductLook;
