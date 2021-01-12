import React from 'react';
// import PropTypes from 'prop-types';
import styles from './BlocEditoCourt.mobile.module.scss';
import Mardown from 'markdown-to-jsx';

const BlocEditoCourt = ({ Title, Text, Image, Button }) => {
  return Title && Text && Image ? (
    <div className={styles.wrapper}>
      <div className={styles.boxButton}>
        <div className={styles.blocText}>
          <h2 className={styles.title}>{Title}</h2>
          <Mardown options={{ forceInline: false }}>{Text}</Mardown>
        </div>
        {Button && 
          <a href={Button.link} className={styles.link}>
            {Button.label}
          </a>
        }
      </div>
      {Image && <img src={Image.url} className={styles.visual} alt={Image.alt} />}
    </div>
  ) : null;
};

// BlocEditoCourt.propTypes = {

// };

export default BlocEditoCourt;
