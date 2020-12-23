import Markdown from 'markdown-to-jsx';
import React from 'react';
import styles from './DuoQRImage.module.scss';

const DuoQRImage = ({ Title, Text, Image }) => {
  return (
    <div className={styles.duoQR}>
        <div className={styles.imageContainer}>
            <img className={styles.image} src={Image.url} alt={Image.alt} />
        </div>
        <div className={styles.textContainer}>
            <h2 className={`title-edito2 ${styles.mainTitle}`}>{Title}</h2>
            <Markdown
            options={{
              overrides: {
                p: { props: { className: styles.paragraph } },
                h1: { props: { className: 'title-edito2' } },
                h2: { props: { className: 'title-edito2' } },
                h3: { props: { className: 'title-edito2' } },
                h4: { props: { className: 'title-edito2' } },
                h5: { props: { className: 'title-edito2' } },
                h6: { props: { className: 'title-edito2' } }
              }
            }}>
            {Text}
            </Markdown>
        </div>
    </div>
  );
};

export default DuoQRImage;
