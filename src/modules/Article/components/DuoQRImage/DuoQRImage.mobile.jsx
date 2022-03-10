import Markdown from 'markdown-to-jsx';
import React from 'react';
import styles from './DuoQRImage.mobile.module.scss';
import PropTypes from 'prop-types';

const DuoQRImageMobile = ({ Title, Text, Image }) => {
  return (
    <div className={styles.duoQR}>
      {Title && <h2 className={`title-edito2 ${styles.mainTitle}`}>{Title}</h2>}
      {Image && <img className={styles.image} src={Image.url} alt={Image.alt} />}
      {Text && (
        <Markdown
          className={styles.richTextContainer}
          options={{
            overrides: {
              p: { props: { className: styles.paragraph } },
              h1: { props: { className: `title-edito2 ${styles.secondaryTitles}` } },
              h2: { props: { className: `title-edito2 ${styles.secondaryTitles}` } },
              h3: { props: { className: `title-edito2 ${styles.secondaryTitles}` } },
              h4: { props: { className: `title-edito2 ${styles.secondaryTitles}` } },
              h5: { props: { className: `title-edito2 ${styles.secondaryTitles}` } },
              h6: { props: { className: `title-edito2 ${styles.secondaryTitles}` } }
            }
          }}>
          {Text}
        </Markdown>
      )}
    </div>
  );
};

DuoQRImageMobile.propTypes = {
  Title: PropTypes.string,
  Text: PropTypes.string,
  Image: PropTypes.string
};

DuoQRImageMobile.defaultProps = {
  Title: '',
  Text: '',
  Image: ''
};

export default DuoQRImageMobile;
