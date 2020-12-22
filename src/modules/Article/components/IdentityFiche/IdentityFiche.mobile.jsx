import Image from '@/components/commons/Image/Image';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import styles from './IdentityFiche.mobile.module.scss';


const IdentifyFiche = (data) => {
    return (
        <div className={styles.container}>
            <div className={styles.picture}>
                <Image src={data.Image.url_mobile} alt={data.Image.alt} />
            </div>
            <Markdown className={styles.textContainer} style={{backgroundColor:data.backgroundColor}} options={{ forceInline: false }}>{data.Text}</Markdown>
        </div>
    )
}

export default IdentifyFiche;