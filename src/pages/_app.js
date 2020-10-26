import wrapper from '../app/store';
import Page from "../modules/Page"
import styles from './app.module.scss';
import './styles/modules/MainFooter.css';
import './styles/modules/Menu.scss';

// import './styles/Animation.module.scss';
// import './styles/Landing.module.scss';
// import './styles/modules/PartnerPicto.css';
// import './styles/pages/PageMarqueAH17.css';
// import './styles/modules/HeaderAH17.css';
// import './styles/modules/BrandMainNewsAH17.css';
// import '../app/components/_styles/boot.scss';

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