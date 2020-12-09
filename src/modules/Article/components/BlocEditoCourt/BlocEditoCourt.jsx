import React from 'react';
// import PropTypes from 'prop-types';
import styles from './BlocEditoCourt.module.scss';

const BlocEditoCourt = ({ BlockText, Image, Button }) => {
  return BlockText && Image && Button ? (
    <div className={styles.wrapper}>
      <div className={styles.boxButton}>
        <div className={styles.blocText}>
          {BlockText &&
            BlockText.map((item) => {
              return (
                <>
                  <h2 className={styles.title}>{item.Title}</h2>
                  <p className={styles.text}>{item.Text}</p>
                </>
              );
            })}
        </div>
        {Button && (
          <a href={Button.link} className={styles.link}>
            {Button.label}
          </a>
        )}
      </div>
      {Image && (
      <img src={Image.url} className={styles.visual} alt={Image.alt} />
      )
      }
    </div>
  ) : null;
};

// BlocEditoCourt.propTypes = {

// };

export default BlocEditoCourt;
