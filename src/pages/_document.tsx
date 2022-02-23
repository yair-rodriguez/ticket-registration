import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        {/* // TODO: Remove Font Awesome when TikTok icon available @mui/icons-material */}
        <Script
          src="https://kit.fontawesome.com/7ab46e22d3.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
