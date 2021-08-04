import React, { useRef } from 'react';
import styles from './ProductLook.module.scss';
import useOnScreen from 'utils/useOnScreen';
import useGTM, { TrackEvent } from 'utils/useGTM';
import ProductLookCard from './ProductLookCard/ProductLookCard';
import Markdown from 'markdown-to-jsx';


const ProductLook = ({Image, Title, Text, Vignettes, CTA}) => {
  const trackCTA = useRef();
  const isVisible = CTA ? useOnScreen(trackCTA) : false;
  const trackGTM = (CTA, eventName) => {
    let obj = {
      id: CTA.id,
      name: CTA.label,
      position: 'Product Look',
      strapId: `${CTA.id}-${CTA.label}-${eventName}`
    };
    useGTM(obj, eventName);
  };

  isVisible ? trackGTM(CTA, TrackEvent.PromotionPrint) : null;

  return (
    <section className={styles.productLook}>
      <img src={Image.url} alt={Image.alt} className={styles.poster} />
      <div className={styles.blockScrollable}>
        <h2 className={styles.title}>{Title}</h2>
        <Markdown options={{ forceInline: false }}>{Text}</Markdown>
        {Vignettes.map((vignette) => {
            return <ProductLookCard {...vignette} key={`${vignette.pcid}`} />;
          })}
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
