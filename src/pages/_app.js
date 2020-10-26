import wrapper from '../app/store';
import Page from "../modules/Page"
import styles from './app.module.scss';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Page pageStyle={styles.app}>
                <Component {...pageProps} />
            </Page>
        </>
    )
}

export default wrapper.withRedux(App)