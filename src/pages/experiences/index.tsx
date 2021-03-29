import { useEffect, useState, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ExperiencesPageProps } from "../../ts/page-props";
import { getAllExperiences } from "../../hooks/contentful";
import Layout from "../../components/layout";
import ExperienceCard from "../../components/ui/ExperienceCard";
import { symlinkSync } from "fs";
// import Spinner from "../../components/ui/Spinner";

export async function getStaticProps() {
  let { items } = await getAllExperiences("bookable");
  // const items = await getExperiences();
  // if (items)
  //   return {
  //     props: { items },
  //   };
  return {
    props: { items },
  };
}

const meta = {
  title: "Plan the perfect trip.",
  description: "",
  scene: "plan",
};
const Experiences: FC<ExperiencesPageProps> = ({ items }) => {
  // const [, , experienceType] = useContext(AppContext);
  const router = useRouter();

  const [experiences, setExperiences] = useState(items);
  // const [search, setSearch] = useState();
  // const [filter, setFilter] = useState({});
  // console.log(experiences);
  useEffect(() => {
    // (async () => {
    //   if (experienceType) {
    //     setExperiences(await getExperiencesOfType(experienceType));
    //   }
    // })();
  }, []);

  if (router.isFallback) {
    return <div style={{ marginTop: 100 }}>Loading...</div>;
  }
  //const images = data?.media?.map((imageLink: any) => imageLink.fields.file.url);

  return (
    <Layout meta={meta}>
      <ul className="p-4">
        {items.map(({ fields, sys }, idx) => (
          <li key={idx}>
            <Link href={`/experiences/${sys.id}`}>
              <a color="blue" key={idx}>
                <ExperienceCard data={fields} />
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Experiences;
/**
 * 
 * 
 *  <Section>
          <Grid container>
            {experiences.length > 0 ? (
              experiences.map((experience) => {
                return (
                  <Grid key={experience.sys.id} className={classes.cardWrap} item xs={12} sm={6} md={4} lg={3}>
                    <Link href="/plan/[xid].jsx" as={`/plan/${experience.sys.id}`}>
                      <a>
                        <section className={classes.section}>
                          <Card className={classes.cardRoot}>
                            <CardMedia className={classes.media} image={experience.fields.media?.[0].fields.file.url} title="Paella dish" />
                          </Card>
                        </section>
                        <section className={classes.section}>
                          <Type variant="subtitle1" component="p">
                            {experience.fields.name}
                          </Type>
                          <Type style={{ marginTop: 4 }} className={classes.features} variant="subtitle2" component="p">
                            {/* <span style={{ marginTop: 4 }}>{experience.fields.cabins}</span>
                            <span>
                              <img src="/media/testing/bed.svg" alt="bed"></img>
                            </span>
                            <span style={{ marginTop: 4 }}>{experience.fields.heads}</span>
                            <span>
                              <img src="/media/testing/bath.svg" alt="bath"></img>
                            </span>
                            <span style={{ marginTop: 4 }}>{experience.fields.passengers}</span>
                            <span>
                              <img src="/media/testing/guests.svg" alt="guests"></img>
                            </span> 
                            </Type>
                            <Type style={{ display: "inline-block", marginTop: 4 }} variant="subtitle1" component="p">
                              {`$${Math.floor(experience.fields.rate / 7)}`}{" "}
                            </Type>
                            <span style={{ fontWeight: 400 }}> /{experience.sys.contentType.sys.id === "cars" ? " day" : " night +"}</span>
                          </section>
                        </a>
                      </Link>
                    </Grid>
                  );
                })
              ) : (
                <Spinner />
              )}
            </Grid>
          </Section>
 */
