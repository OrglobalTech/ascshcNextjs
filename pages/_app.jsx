import Background from "../components/Background";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Background /> */}
      <div className="bg-cover bg-[url('../public/images/hymn_app-bg.jpg')]  py-[50px] md:px-[300px] ">
        <div className=" bg-white/20 md:h-[500px] border shadow-full  rounded-3xl pb-10 ">
          <div className="flex flex-col place-items-center">
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyApp;
