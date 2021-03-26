import Image from '@/components/commons/Image/Image';
import React, { useState, useCallback } from 'react';
import styles from './IframeVideo.module.scss';
import getCookieConsentList from '../../../../utils/getCookieConsentList';

const IframeVideo = ({ image, iframe_url, iframe_page }) => {
  const [play, setPlay] = useState(false);
  const handlePlay = useCallback(() => {
    const cookieConsentList = getCookieConsentList();
    cookieConsentList.includes('Socials') ? setPlay(true) : window.open(iframe_page || iframe_url);
  });
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
          <a className={styles.play} onClick={handlePlay}><span></span></a>
        </>
      )}
    </div>
  );
};

export default IframeVideo;
