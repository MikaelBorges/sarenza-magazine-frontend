import Document, { Head, Html, Main, NextScript } from 'next/document';
import ContextHelper from '../utils/ContextHelper';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const ct = new ContextHelper(ctx);
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isMobile: ct.context.device.mobile };
  }

  render() {
    const isMobile = this.props && this.props.isMobile;
    return (
      <Html>
        <Head>
          {!isMobile ? (
            <>
              <link
                rel="stylesheet"
                href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/home.default.min.css"
              />
              <link
                rel="stylesheet"
                href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/animation.default.min.css"
              />
              <link
                rel="stylesheet"
                href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/landing.default.min.css"
              />
            </>
          ) : (
            <>
              <link
                rel="stylesheet"
                href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/home.mobile.min.css"
              />
              <link
                href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/animation.mobile.min.css"
                rel="stylesheet"
              />
              <link
                rel="stylesheet"
                href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/landing.mobile.min.css"
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
