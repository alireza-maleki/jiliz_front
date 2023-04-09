import "../styles/globals.css";
import Layout from "../components/header/Layout";

import { RegisterContextProvider } from "../components/contexts/RegisterContext";


function MyApp({ Component, pageProps }) {
  return (


    <RegisterContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RegisterContextProvider>


  );
}

export default MyApp;