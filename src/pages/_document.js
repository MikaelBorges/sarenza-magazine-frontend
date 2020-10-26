import Document, { Html, Head, Main, NextScript } from 'next/document'
import Meta from "../modules/_pageComponents/Meta"
class Doc extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <Meta />
                    <link
                        rel="stylesheet"
                        href="https://cdn.sarenza.net/website/prod_b/assets/stylesheet/home.default.min.css?v=20201002123450"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Doc