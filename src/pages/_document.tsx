import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }: { renderPage: any }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App: any) => (props: object) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width" />
          <meta name="og:site_name" content="Giphy" />
          <meta name="og:image" content="" />
          <meta name="og:locale" content="en_US" />
          <meta name="og:card" content="summary" />
          <meta name="og:image:width" content="200" />
          <meta name="og:image:height" content="200" />
          <link rel="icon" type="image/png" href="/static/favicon.ico" />
          {this.props.styleTags}
        </Head>

        <body>
          <div className="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}
