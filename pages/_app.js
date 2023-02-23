import 'tailwindcss/tailwind.css'
import Head from "next/head"
import "../styles/globals.css";

import {config, dom} from "@fortawesome/fontawesome-svg-core";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <style>{dom.css()}</style>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet"/>
      </Head>
          <Component {...pageProps} />
    </>
        )
}

        export default MyApp
