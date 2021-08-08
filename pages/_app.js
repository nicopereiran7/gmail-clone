import "../styles/globals.css";
import initFirbase from "../authFirebase";
import store from "../app/store";
import { Provider } from "react-redux";

initFirbase();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
