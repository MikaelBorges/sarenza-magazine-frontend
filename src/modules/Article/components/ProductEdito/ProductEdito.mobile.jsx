import React from 'react';
import styles from './ProductEdito.mobile.module.scss';

const ProductEdito = ({ Title, Text, Vignette, CTA }) => {
  console.log(Vignette);
  return Title && Text && Vignette ? (
    <section className={styles.productEdito}>
      <div className={styles.wrapperText}>
        <h2 className={styles.title}>{Title}</h2>
        <p className={styles.text}>{Text}</p>
      </div>
      <div className={styles.wrapperVignettes}>
        {Vignette.map((item) => {
          console.log(item);
          return (
            <a href={item.url} className={styles.url}>
              <div className={styles.vignette} key={item.id}>
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
