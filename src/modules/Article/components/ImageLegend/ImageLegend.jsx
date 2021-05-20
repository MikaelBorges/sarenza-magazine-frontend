import React from 'react';
import styles from './ImageLegend.module.scss';

const ImageLegend = (props) => {
  return (
    <div className={styles.ImageLegend}>
      <h2 className={styles.h2}>{props.Title}</h2>
      <p className={styles.p}>{props.Text}</p>
      <div className={styles.containerFlex}>
      {    props.VerticalImage && (
            <img
          src={props.VerticalImage.url}
          alt={props.VerticalImage.alt}
          className={styles.verticalImage}
        />
          )}      
        {
     props.ImageText && ( 
        <div className={styles.box}>
          <img
            src={props.ImageText.url}
            alt={props.ImageText.alt}
            className={styles.optionalImage}
          />
          <div className={styles.blockText}>
            <h5 className={styles.h5}>{props.ImageText.Subtitle}</h5>
            <h2 className={styles.h2}>{props.ImageText.Title}</h2>
            <p className={styles.optionalText}>{props.ImageText.Paragraph}</p>
            <a href={props.ImageText.Link} className={styles.button}>
              {props.ImageText.Label}
            </a>
          </div>
        </div>
     )}
      </div>
{
     props.ImageTextOptional && ( <div className={styles.lastBlock}>
        <div className={styles.lastBlockText}>
          <h5 className={styles.h5}>{props.ImageTextOptional.Subtitle}</h5>
          <h2 className={styles.h2}>{props.ImageTextOptional.Title}</h2>
          <p className={styles.lastText}>{props.ImageTextOptional.Paragraph}</p>
          <a href={props.ImageTextOptional.Link} className={styles.button}>
            {props.ImageTextOptional.Label}
          </a>
        </div>
        <img
          src={props.ImageTextOptional.url}
          alt={props.ImageTextOptional.alt}
          className={styles.lastImage}
        />
      </div>)}
    </div>
  );
};

export default ImageLegend;
