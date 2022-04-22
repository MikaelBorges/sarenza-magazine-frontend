import React from 'react';
import Image from '@/components/commons/Image/Image';
import Markdown from 'markdown-to-jsx';
import styles from './IdentityFiche.module.scss';

const IdentifyFiche = (data) => {
  return data && data ? (
    <div className={styles.container}>
      <div className={styles.picture}>
        {data.Picture.url && <Image src={data.Picture.url} alt={data.Picture.alt} />}
      </div>

      {data.Text && (
        <Markdown
          className={styles.textContainer}
          style={{ backgroundColor: data.BackgroundColor }}
          options={{ forceInline: false }}>
          {data.Text}
        </Markdown>
      )}
    </div>
  ) : null;
};

export default IdentifyFiche;
