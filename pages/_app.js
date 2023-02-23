import 'tailwindcss/tailwind.css'
import Head from "next/head"
import "../styles/globals.css";

import { config, dom } from "@fortawesome/fontawesome-svg-core";
dom.css()
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
