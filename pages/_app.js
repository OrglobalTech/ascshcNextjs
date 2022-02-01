import Background from "../components/Background";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Background />
      <div className="flex flex-col bg-fuchsia-800/70  overflow-auto h-screen justify-top place-items-center   ">
      <Component {...pageProps} />

      </div>

      
    </div>
  );
}

export default MyApp;
