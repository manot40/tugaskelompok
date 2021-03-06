import { themeChange } from "theme-change";
import { useEffect } from "react";
import Head from "next/head";
import Foot from "../components/Footer";
import "../assets/style.css";
import "react-toastify/dist/ReactToastify.css";

function App({ Component, pageProps }) {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <>
      <Head>
        <title>Tugas Kelompok Team 1 | MCCA</title>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        />
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        />
      </Head>
      <Component {...pageProps} />
      <Foot />
    </>
  );
}

export default App;
