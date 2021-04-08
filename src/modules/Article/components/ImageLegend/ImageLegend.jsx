import React from 'react';
import styles from './ImageLegend.module.scss';
import Mardown from 'markdown-to-jsx';

const ImageLegend = (props) => {
  return (
    <div className={styles.ImageLegend}>
      <h2 className={styles.h2}>{props.Title}</h2>
      <p className={styles.p}>{props.Text}</p>
      <div className={styles.containerFlex}>
        <img
          src={props.VerticalImage.url}
          alt={props.VerticalImage.alt}
          className={styles.verticalImage}
        />
        <div className={styles.box}>
          <img
            src={props.OptionalImage.url}
            alt={props.OptionalImage.alt}
            className={styles.optionalImage}
          />
          <h4 className={styles.h4}>{props.OptionalSubtitle}</h4>
          <h2 className={styles.h2}>{props.OptionalTitle}</h2>
          <p className={styles.optionalText}>{props.OptionalText}</p>
          <a href={props.OptionalButton.link} className={styles.button}>
            {props.OptionalButton.label}
          </a>
        </div>
      </div>
      <div className={styles.lastBlock}>
        <h4 className={styles.h4}>{props.LastSubtitle}</h4>
        <h2 className={styles.h2}>{props.LastTitle}</h2>
        <p className={styles.lastText}>{props.LastText}</p>
        <a href={props.LastButton.link} className={styles.button}>
          {props.LastButton.label}
        </a>
        <img src={props.LastImage.url} alt={props.LastImage.alt} className={styles.lastImage} />
      </div>
    </div>
  );
};

export default ImageLegend;
