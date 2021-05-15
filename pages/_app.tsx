import { globalStyles } from "../styles/globals";
import { AppLogo } from "../components/AppLogo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppLogo />
      {globalStyles}
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
