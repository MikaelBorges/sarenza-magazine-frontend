import React, { useState } from 'react';
import { Image } from './Image/Image';
import styles from 'IframeVideo.scss'

const IframeVideo = ({ src, iframe }) => {
    const [play, setPlay] = useState(!src);
    return (
        <div
            className="video"
            style={styles.video}>
            {play ? (
                <iframe
                    style={styles.iframe}
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
