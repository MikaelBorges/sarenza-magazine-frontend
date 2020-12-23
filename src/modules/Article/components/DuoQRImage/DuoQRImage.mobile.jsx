import Markdown from 'markdown-to-jsx';
import React from 'react';
import styles from './DuoQRImage.mobile.module.scss';

const DuoQRImageMobile = ({ Title, Text, Image }) => {
  return (
    <div className={styles.duoQR}>
        <h2 className={`title-edito2 ${styles.mainTitle}`}>{Title}</h2>
        <img className={styles.image} src={Image.url} alt={Image.alt} />
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
    </div>
  );
};

export default DuoQRImageMobile;
