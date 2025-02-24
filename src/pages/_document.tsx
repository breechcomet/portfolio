// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta property="og:title" content="Munashe Moyo's Portfolio" />
                    <meta
                        property="og:description"
                        content="Welcome to my portfolio. Here you will find my journal entries as well as some stuff I have worked on and am currently working on."
                    />
                    <meta
                        property="og:image"
                        content="https://i.ibb.co/VW9MMsxQ/Munashe-Avatar.jpg"
                    />
                    <meta property="og:url" content="https://munashe.top" />
                    <meta property="og:type" content="website" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}