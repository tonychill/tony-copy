import { useEffect, useState, FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { ExperiencePageProps } from "../../ts/page-props";
import { getContent, getAllExperiences } from "../../hooks/contentful";

import clsx from "clsx";
import styles from "./Exp.module.css";

// import Section from "../../components/ui/Section@Iw";
// import BookingRequestForm from "../../components/Bytes/Forms/BookingRequestForm";
// import Media from "../../components/Bits/Media";
// import FeaturesRow from "../../components/Bytes/featuresRow";
import Type from "../../components/core/Type";
import Layout from "../../components/layout";

import { getContentByType, getContentById } from "../../hooks/contentful";

// import Map from "../../components/Bits/Map";
// import Glider from "../../components/Bits/Glider";
// import GridList from "../../components/Bits/List/gridlist";
// import InfoCard from "../../components/Bytes/Cards/InfoCard";

// import icons from "../../components/Bits/Icons";
interface HelpArticlePageProps {
  auth: string;
  article: Article;
}

export interface ContentByTypeResponse {
  items: Article[];
  sys: { type: "Array" };
  total: number;
  skip: number;
  limit: number;
}
export interface Article {
  sys: { id: string };
  fields: { name: string; title: string };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { items }: ContentByTypeResponse = await getContentByType("help");
  const articles = items;
  return {
    paths: articles?.map(({ sys }) => `/help/${sys.id}`) ?? [],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params = { hid: "" }, preview = false }) => {
  const article = await getContentById(params.hid);

  const meta = {
    title: article.fields.topic,
    description: "This is a help article.",
  };
  return {
    props: { preview, article, meta },
  };
};

const HelpArticlePage: FC<HelpArticlePageProps> = ({ auth, article }) => {
  const router = useRouter();

  if (!router.isFallback && !article.sys.id) {
    return <ErrorPage statusCode={404} />;
  }
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  // const [article, setExperience] = useState({});
  //TODO: pass in Auth to page.
  // const { session } = auth;

  useEffect(() => {}, []);

  return (
    <section className="flex mx-auto sm:px-12 md:px-16 items-center justify-center min-w-full xl:px-10">
      <div className="flex mx-auto w-full exp-wrap">
        <div className="flex-grow bg-blue-50 mr-4">
          <h3>{article.fields.title}</h3>
          <div>article</div>
          <div>article</div>
          <div>article</div>
        </div>
        <div className="req-form-wrap mx-3 flex-1 col-span-4 ">Box</div>
      </div>
    </section>
  );
};
export default HelpArticlePage;
