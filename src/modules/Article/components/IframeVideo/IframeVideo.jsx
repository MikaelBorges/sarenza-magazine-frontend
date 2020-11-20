import React, { useState } from 'react';
import styles from './IframeVideo.module.scss'
import Image from '@/components/commons/Image/Image';

const IframeVideo = ({ src, iframe }) => {
    const [play, setPlay] = useState(!src);
    return (
        <div
            className={styles.video}>
            {play ? (
                <iframe
                    className={styles.iframe}
                    src={iframe}
                    frameBorder="0"
                />
            ) : (
                <Image src={src} alt={'Video'} onClick={() => setPlay((p) => !p)} />
            )}
        </div>
    );
};

export default IframeVideo;
