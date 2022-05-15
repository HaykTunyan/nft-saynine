import { Fragment } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/index.scss";
import "../styles/pagination.scss";
import "../styles/animations.scss";

const classes = {
  root: "flex flex-col min-h-screen",
  main: "flex-1",
};

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>SayNine</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/saynine_favicon.svg" />
        <meta
          property="og:image"
          content="https://saynine.ai/_next/image?url=%2Fimages%2Fhome_page%2Fautomation_tools.svg&w=384&q=75"
        />
      </Head>
      <div className={classes.root}>
        <Header />
        <main className={classes.main}>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}

export default MyApp;
