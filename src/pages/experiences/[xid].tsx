import { useEffect, FC } from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { utils } from "../../hooks";
import { ExperiencePageProps } from "../../ts/page-props";
import { getAllExperiences, getContentById } from "../../hooks/contentful";
import InfoCard from "../../components/ui/InfoCard";

import clsx from "clsx";

// import Section from "../../components/ui/Section@Iw";
// import BookingRequestForm from "../../components/Bytes/Forms/BookingRequestForm";
// import Media from "../../components/Bits/Media";
// import FeaturesRow from "../../components/Bytes/featuresRow";
import Type from "../../components/core/Type";
import Layout from "../../components/layout";
import BookingRequestForm from "../../components/ui/Forms/BookingRequest";
import Section from "../../components/core/Section";
import Media from "../../components/ui/Media";
// import Map from "../../components/Bits/Map";
// import Glider from "../../components/Bits/Glider";
// import GridList from "../../components/Bits/List/gridlist";
// import InfoCard from "../../components/Bytes/Cards/InfoCard";

// import icons from "../../components/Bits/Icons";

interface Experiences {
  items: Experience[];
  sys: { type: "Array" };
  total: number;
  skip: number;
  limit: number;
}
interface Experience {
  sys: { id: string };
  fields: object;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const { items }: Experiences = await getAllExperiences("bookable");
  return {
    paths: items?.map(({ sys }) => `/experiences/${sys.id}`) ?? "/experiences",
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async ({ params = { xid: "" }, preview = false }) => {
  const experience = await getContentById(params.xid);
  const meta = {
    title: experience.fields.name,
    description: "Experince the Virign Islands like never before.",
    scene: "xid",
  };
  return {
    props: { preview, experience, meta },
  };
};

const Experience: FC<ExperiencePageProps> = ({ auth, experience }) => {
  const media = utils.parseMediaToObjectArray(experience?.fields.media);
  //TODO: pass in Auth to page.
  // const { session } = auth;

  // const [experience, setExperience] = useState({});
  // const [itemsToDisplay, setItemsToDisplay] = useState(2);

  const router = useRouter();
  if (!router.isFallback && !experience.sys.id) {
    return <div>Error....</div>;
  }
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  useEffect(() => {
    // window.addEventListener("load", updateCarouselDisplay);
    // window.addEventListener("resize", updateCarouselDisplay);
    // function updateCarouselDisplay(event) {
    //   // setItemsToDisplay(window.innerWidth);
    // }
  }, []);
  const room = {
    title: "Master Bed room",
    icon: "/media/icons/jeep.png",
    label: "This is a king bed",
    note: "This room has the best view in the enire house.",
    type: "main-king",
  };
  const xROOM_TEST = [room, room, room, room, room];
  // const features = [
  //   { name: "Guests", qty: entry.fields.passengers },
  //   { name: "Beds", qty: entry.fields.cabins },
  //   { name: "Baths", qty: entry.fields.heads },
  //   // { name: "Length", qty: `${entry.fields.length} Feet` },
  // ];
  //TODO: Fix TS issue within the BookingRequestFrom experience object.

  const getReqForm = () => {
    if (experience !== undefined && "rate" in experience.fields) {
      return <BookingRequestForm experience={experience.fields} />;
    }
  };

  return (
    <div className="flex mx-auto sm:px-12 md:px-16 items-center justify-center min-w-full xl:px-10">
      <div className="sm:flex mx-auto w-full exp-wrap">
        <div className="flex-grow sm:mr-4">
          <div className="wrapper mx-4">
            <Section>
              <Media type="multi" media={media} />
            </Section>
            <Section>
              <div className="mt-3 ">
                <Type variant="title">2 Bedroom Suite</Type>
                <p className=" -mt-1 text-gray-300">St James's Club Morgan Bay </p>
                <div>
                  <div className="mt-4 pl-0 w-full flex flex-wrap ">
                    <div className="list-style-none m-0 mr-4   ">
                      <Type variant="base">5 Guests </Type>
                    </div>
                    <div className="list-style-none m-0 mr-4   ">
                      <Type variant="base">2 Beds </Type>
                    </div>
                    <div className="list-style-none m-0 mr-4   ">
                      <Type variant="base">2 Baths </Type>
                    </div>
                  </div>
                </div>
              </div>
            </Section>
            <Section>
              <div className="mb-6 flex-grow-0 w-full">
                <div>
                  <div className="flex flex-row">
                    <div className="mr-4 flex w-1/2 ">
                      <div className="">
                        <Type variant="bold">Check in after:</Type> <Type variant="base">3:00 PM</Type>
                      </div>
                    </div>
                    <div className="flex Exp_times_wrap__2RLA8 w-1/2">
                      <div>
                        <Type variant="bold">Check out before:</Type> <Type variant="base">11:00 AM</Type>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Type variant="base">{experience.fields.description}</Type>
                  </div>
                </div>
              </div>
            </Section>
            {1 ? (
              <Section title="Rooms">
                <div className={clsx("sm:-mr-2 sm:-ml-2 flex flex-wrap container")}>
                  {xROOM_TEST.map((room, idx) => (
                    <InfoCard key={idx} idx={idx + 1} type={room.type} />
                  ))}
                </div>
              </Section>
            ) : null}
            {/* <Section>hello</Section> */}
          </div>
        </div>
        <div className="mb-32 sm:mb-0 req-form-wrap mx-3 flex-1  ">{getReqForm()}</div>
      </div>
      {/* {true ? <BookingRequestForm experience={experience} /> : "Loading..."} */}
    </div>
  );
};
export default Experience;

/**TODO: The layout
 * 
 * <div className={classes.exp_wrap}>
        <Grid container className={classes.root}>
          <Grid className={classes.experiencewrap} item xs={12} md={8}>
            <Section media bottomBorder={false}>
              <Media media={entry.fields.media} />{" "}
              <div className={classes.titleRoot}>
                <Type type="title">{entry.fields.name}</Type>
                <p style={{ marginTop: -3, color: "#A9B4CC" }}>
                  {/* <span>
                    <img style={{ height: 18, width: 24, marginBottom: -4 }} src="/media/icons/location.svg" />
                  </span> 
                  {entry.fields.place}{" "}
                </p>
                <div>
                  <FeaturesRow features={features} />
                </div>
              </div>
            </Section>
            <Section>
              <div className={styles.times_root}>
                <div className={clsx("flex", styles.times_wrap)}>
                  <span>
                    {" "}
                    <Type type="bold">Check in after:</Type>
                  </span>
                  <span>
                    {" "}
                    <Type type="base">3:00 PM</Type>
                  </span>
                </div>
                <div className={clsx("flex", styles.times_wrap)}>
                  <span>
                    {" "}
                    <Type type="bold">Check out before:</Type>
                  </span>
                  <span>
                    {" "}
                    <Type type="base">11:00 AM</Type>
                  </span>
                </div>
              </div>
              <div className={clsx(styles.description, "mt16")}>
                <Type type="base">{entry.fields.description}</Type>
              </div>
            </Section>
            {entry.fields.spaces ? (
              <Section heading="Rooms">
                <div className={clsx(styles.rooms_wrap, "container")}>
                  {entry.fields.spaces.map((type, idx) => (
                    <InfoCard key={idx} idx={idx + 1} type={type} />
                  ))}
                </div>
              </Section>
            ) : null}

            <Section heading="Amenities">
              <GridList items={entry.fields.amenities} />
            </Section>
            {entry.sys.contentType.sys.id === "cars" ? null : (
              <Section heading="Location">
                <Map location={entry.fields.location} />
              </Section>
            )}
            {entry.fields.rules !== undefined ? (
              <Section heading="Rules">
                <GridList items={entry.fields.rules} />
              </Section>
            ) : null}
            {related.length > 0 ? null : (
              <Section heading="See more">
                <Grid className={clsx(classes.experiencewrap, classes.mobile_carousel)} container>
                  <Glider
                    showDetails={true}
                    data={related}
                    nav={false}
                    options={{
                      type: "carousel",
                      startAt: 0,
                      perView: 2,
                    }}
                  />
                </Grid>
               <Grid className={clsx(classes.experiencewrap, classes.carousel)} container>
                  <Glider
                    showDetails={true}
                    data={related}
                    nav={true}
                    options={{
                      type: "carousel",
                      startAt: 0,
                      perView: 3,
                    }}
                  />
                </Grid> 
              </Section>
            )}
          </Grid>
          <Grid className={classes.sideroot} item xs={12} md={4}>
            {process.env.NODE_ENV == "productioni" ? null : <BookingRequestForm session={session} experience={entry.fields} />}
          </Grid>
        </Grid>
        <div className={classes.mobile_bottom_spacer}></div>
      </div>
 * 
 */

// export async function getServerSideProps({ params: { xid } }) {
//   try {
//     let experiences = await getExperiences(xid);
//     const { entry, related } = experiences;
//     return { props: { entry, related } };
//   } catch (error) {
//     console.log(error);
//   }

// let userAgent;
// if (req) {
//   userAgent = req.headers["user-agent"];
// } else {
//   userAgent = navigator.userAgent;
// }
// const parser = new UAParser();
// parser.setUA(userAgent);
// const result = parser.getResult();
// const deviceType = (result.device && result.device.type) || "desktop";
// }

/**
 * "name", "maxguests", "image", "media", "heads", "toilets", "body", "overview", "description", "rate", "location", "passengers", "showers", "length", "beam", "draft", "water", "engine", "air", "fuelCap", "fuelType", "crewed", "hull", "power", "cabins"
 */

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     margin: "auto",
//   },
//   exp_wrap: {
//     maxWidth: 1195,
//     margin: "auto",
//   },
//   sticky: {
//     position: "-webkit-sticky",
//     position: "sticky",
//     top: 118,
//     alignSelf: "flex-start",
//     // marginRight: 64,
//   },
//   sideroot: {
//     // overflowX: "hidden",
//     // overflowY: "auto",
//     position: "-webkit-sticky",
//     position: "sticky",
//     top: 85,
//     height: "100%",
//     paddingLeft: 16,
//     paddingRight: 16,

//     // height: "100vh",
//     // overflow: "scroll",
//     "&::-webkit-scrollbar": {
//       display: "none",
//     },
//     "& > div": {
//       // minHeight: "100%",
//     },
//   },

//   experiencewrap: {
//     // marginRight: "auto",
//     paddingRight: 16,
//     paddingLeft: 16,
//     maxWidth: 764,
//   },

//   body: {
//     maxHeight: "300px",
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//     display: "-webkit-box",
//     "-webkit-line-clamp": 2 /* number of lines to show */,
//     "-webkit-box-orient": "vertical",
//   },

//   roomsWrapper: {
//     marginRight: "-8px",
//     marginLeft: "-8px",
//   },
//   boxRoot: {
//     // width: 196,
//     // height: 150,
//     border: "1px solid #eaeaea",
//     borderRadius: 8,
//   },
//   boxWrapper: {
//     alignItems: "center",
//   },
//   boxInner: {
//     padding: 24,
//   },
//   amenities: {
//     overflow: "hidden",
//     display: "grid",
//     paddingLeft: 0,
//     gridTemplateColumns: "1fr 1fr 1fr",
//     "& li": {
//       listStyleType: "none",
//       marginBottom: 12,
//     },
//   },
//   icon: {
//     // color: "#62c7fd",
//     icon: { marginRight: 16 },
//   },
//   titleRoot: {
//     // arginBottom: theme.spacing(2),
//     marginTop: 12,
//   },
//   mobile_bottom_spacer: {
//     height: 168,
//   },
//   [theme.breakpoints.up("md")]: {
//     mobile_bottom_spacer: {
//       display: "none",
//     },
//   },

//   [theme.breakpoints.up("sm")]: {
//     mobile_carousel: {
//       display: "none",
//     },
//     carousel: { display: "block" },
//   },
//   [theme.breakpoints.down("md")]: {
//     mobile_carousel: {
//       display: "block",
//     },
//     carousel: { display: "none" },
//     experiencewrap: {
//       // marginRight: "auto",
//       maxWidth: 382,
//     },
//   },
// }));
