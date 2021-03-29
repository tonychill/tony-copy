import Head from "next/head";
import { GlobalContext } from "../context";
import { useContext } from "react";
import StoryFeed from "../components/ui/Feed";
import MainCallToAction from "../components/ui/MainCallToAction";

export async function getStaticProps() {
  return {
    props: {
      meta: {
        title: "Tony",
      },
    },
  };
}
const HomePage = () => {
  const { Auth, session } = useContext(GlobalContext);
  return (
    <div className="place-holder">
      <Head>
        <title>Tony</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="main-cta" className="">
        {session !== undefined && session.isAuthenticated === false ? <MainCallToAction /> : null}
        <StoryFeed Auth={Auth} displayCta={true} />
      </div>
    </div>
  );
};

//TODO: use getStaticProps to generate Seo and meta data at build time. They will then be passed to the layout component via the app component pageProps object.

export default HomePage;
