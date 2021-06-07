import React from 'react';
import styles from './ProductEdito.mobile.module.scss';
import Markdown from 'markdown-to-jsx';

const ProductEdito = ({ Title, Text, Vignette, CTA }) => {
  return Title && Text && Vignette ? (
    <section className={styles.productEdito}>
      <div className={styles.wrapperText}>
        <h2 className={styles.title}>{Title}</h2>
        <Markdown options={{ forceInline: false }}>{Text}</Markdown>
      </div>
      <div className={styles.wrapperVignettes}>
        {Vignette.map((item) => {
          return (
            <a href={item.url} className={styles.url}>
              <div className={styles.vignette} key={item.id} data-pcid={item.pcid}>
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

      {CTA && (
        <a href={CTA.link} className={styles.link}>
          {CTA.label}
        </a>
      )}
    </section>
  ) : null;
};

export default ProductEdito;
