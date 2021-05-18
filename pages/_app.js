import { Provider } from "next-auth/client";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
