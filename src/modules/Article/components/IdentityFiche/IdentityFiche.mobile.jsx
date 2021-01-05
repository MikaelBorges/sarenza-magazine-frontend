import Image from '@/components/commons/Image/Image';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import styles from './IdentityFiche.mobile.module.scss';

const IdentifyFiche = (data) => {
    return data && data ? (
       
        <div className={styles.container}>
            <div className={styles.picture}>
                {data.Picture.url_mobile && (
                <Image src={data.Picture.url_mobile} alt={data.Picture.alt} />
                )}
            </div>

            {data.Text && (
            <Markdown className={styles.textContainer} style={{backgroundColor:data.BackgroundColor}} options={{ forceInline: false }}>{data.Text}</Markdown>
            )}
        </div>

    ) : null
};

export default IdentifyFiche;