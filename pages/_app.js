import Background from "../components/Background";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Background />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
