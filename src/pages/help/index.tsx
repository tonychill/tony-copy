import { FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "../../components/layout";
import { getContentByType, getContentById } from "../../hooks/contentful";
import { ContentByTypeResponse } from "./[hid]";
/**
 *
 */

interface HelpPageProps {
  articles: ContentByTypeResponse;
}

const meta = {
  title: "Help Center",
  description: "Welcome to the help center. ",
};

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getContentByType("help");

  return {
    props: { articles },
  };
};
const HelpCenter: FC<HelpPageProps> = ({ articles }) => {
  const { items } = articles;

  return (
    <Layout meta={meta}>
      <section className="flex mx-auto sm:px-12 md:px-16 items-center justify-center min-w-full xl:px-10">
        <div className="flex mx-auto w-full exp-wrap">
          <div className="sticky h-96 top-24 mx-3 bg-blue-300 flex-1 col-span-4 ">
            <h3>Page form</h3>
          </div>
          <div className="flex-grow bg-blue-50 mr-4">
            <h3>Welcome to the help center.</h3>
            {items.map((article, idx) => (
              <div key={idx}>{article.fields.title}</div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HelpCenter;
