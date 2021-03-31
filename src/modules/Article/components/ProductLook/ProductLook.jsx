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
                return 
            })
        }
      </div>
    </div>
  );
};

export default ProductLook;
