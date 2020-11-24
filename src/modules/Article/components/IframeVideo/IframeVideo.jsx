import Image from '@/components/commons/Image/Image';
import React, { useState, useCallback } from 'react';
import styles from './IframeVideo.module.scss';

const IframeVideo = ({ image, iframe_url }) => {
  const [play, setPlay] = useState(false);
  const handlePlay = useCallback(() => setPlay(true), []);
  return (
    <div className={styles.video}>
      {play && iframe_url ? (
        <iframe
          className={styles.iframe}
          src={iframe_url}
          frameBorder="0"
          allow="fullscreen; autoplay;"
        />
      ) : (
        <>
          <Image src={image.url} alt={image.alt} onClick={handlePlay} />
          <button className={styles.play} onClick={handlePlay}></button>
        </>
      )}
    </div>
  );
};

export default IframeVideo;
