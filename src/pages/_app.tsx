import type { AppProps /*, AppContext */ } from "next/app";

import { Fragment } from "react";
import MobileNavBar from "../components/ui/MobileNavBar";
import Layout from "../components/layout";
import NavBar from "../components/ui/NavBar";
import { GlobalProvider, SearchProvider } from "../context";

import "../../styles/globals.css";
import "react-nice-dates/build/style.css";

const navlinks = [
  { text: "Discover", url: "/" },
  { text: "Experiences", url: "/experiences" },
  // { text: "Trips", url: "/trips" },
  // { text: "Chat", url: "/chat" },
  // { text: "More", url: "/mofe" },
];

function Tony({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalProvider>
        <SearchProvider>
          <MobileNavBar navLinks={navlinks} />
          <NavBar navLinks={navlinks} />
          <Layout {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </SearchProvider>
      </GlobalProvider>
    </Fragment>
  );
}

export default Tony;
