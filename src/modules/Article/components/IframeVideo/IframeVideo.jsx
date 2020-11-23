import React, { useState,useCallback } from 'react';
import styles from './IframeVideo.module.scss'
import Image from '@/components/commons/Image/Image';

const IframeVideo = ({ image, iframe_url }) => {
    const [play, setPlay] = useState(false);

 const handlePlay = useCallback(
    () => setPlay(true),
     [],
 )

    return (
        <div
            className={styles.video}>
            {play ? (
                <iframe
                    className={styles.iframe}
                    src={iframe_url}
                    frameBorder="0"
                />
            ) : (
                <Image src={image.url} alt={image.alt} onClick={handlePlay} />
            )}
        </div>
    );
};

export default IframeVideo;
