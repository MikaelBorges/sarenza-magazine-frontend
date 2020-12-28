import React from 'react';
import Image from '@/components/commons/Image/Image';
import Markdown from 'markdown-to-jsx';
import styles from './IdentityFiche.module.scss';

const IdentifyFiche = (data) => {
    return data && data ? (
       
        <div className={styles.container}>
            <div className={styles.picture}>
                {data.Image.url && (
                <Image src={data.Image.url} alt={data.Image.alt} />
                )}
            </div>
            {data.Text && (
            <Markdown className={styles.textContainer} style={{backgroundColor:data.backgroundColor}} options={{ forceInline: false }}>{data.Text}</Markdown>
            )}
        </div>
    ) : null
};

export default IdentifyFiche;