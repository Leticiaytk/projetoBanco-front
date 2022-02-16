import "../styles/globals.css";
import { CartProvider } from "../lib/CardContext";

function MyApp({ Component, pageProps, router }) {
  return (
    <CartProvider>
      <Component {...pageProps} key={router.pathname} />
    </CartProvider>
  );
}

export default MyApp;
