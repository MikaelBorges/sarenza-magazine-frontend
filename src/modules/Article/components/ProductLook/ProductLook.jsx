import React from 'react';
import styles from './ProductLook.module.scss';

const ProductLook = (props) => {
  return (
    <div className={styles.productLook}>
      <img src={props.Image.url} alt={props.Image.alt} className={styles.poster} />
      <div className={styles.blockScrollable}>
        <h2 className={styles.title}>{props.Title}</h2>
        <p className={styles.paragraphe}>{props.Text}</p>
        {
            props.Vignettes.map((vignette)=>{
                return (
                    <a href={vignette.url} className={styles.url}>
                    <div className={styles.vignette} key={vignette.id}>
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
            })
        }
      </div>
    </div>
  );
};

export default ProductLook;
