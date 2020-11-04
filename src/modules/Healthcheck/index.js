import React from 'react';
import getConfig from "next/config"
import JSONPretty from 'react-json-pretty';

import styles from './Healthcheck.module.scss'

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

function Healthcheck(props) {

    return (
        <div className={styles.container}>
            <JSONPretty themeClassName="custom-json-pretty" data={props} theme={{
                main: 'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
                error: 'line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;',
                key: 'color:#f92672;',
                string: 'color:#fd971f;',
                value: 'color:#a6e22e;',
                boolean: 'color:#ac81fe;',
              }}></JSONPretty>
        </div>
    );
}


export const getServerSideProps = async (ctx) => {
    
    return {
        props: {
            serverRuntimeConfig,
            publicRuntimeConfig
        }
    }
}

export default Healthcheck;