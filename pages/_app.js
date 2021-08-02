import "../styles/globals.css";
import initFirbase from "../authFirebase";

initFirbase();

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
