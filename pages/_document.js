import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,300;8..144,400;8..144,500;8..144,700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          data-goatcounter="https://alec.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
        <script
          src="https://tinylytics.app/embed/C_4s7QmLfzpBqEmiLZkQ.js"
          defer
        ></script>
      </Html>
    );
  }
}

export default MyDocument;
