import type { AppProps } from "next/app";

import "../styles/globals.scss";
import CursorProvider from "../context/CursorContext";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <CursorProvider>
      <Component {...pageProps} />
    </CursorProvider>
  );
}

export default MyApp;
