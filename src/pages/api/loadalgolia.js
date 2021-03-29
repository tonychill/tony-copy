const algoliasearch = require("algoliasearch");
const contentful = require("contentful");
const aclient = algoliasearch("IDU7F9CV9W", "d3a0bea350d2fff6f440374d245575b8");
const index = aclient.initIndex("experiences");

const client = contentful.createClient({
  space: "g5nrk2qtffpm",
  accessToken: "zKNsjO92AmeVn_N82gpDsfFG2c2-yoeh1gavLSSpIrk",
});
let objects = [];
async function getExperiences() {
  try {
    const entries = await client.getEntries({
      content_type: "bookable",
      // "fields.rate[lt]": `${rate}`,
      // select: fields,
    });
    // console.log(entries.items[0].fields);
    let bookables = entries.items;
    for (const item of bookables) {
      let home = {
        objectID: item.sys.id,
        type: item.fields.type,
        name: item.fields.name,
        location: item.fields.place,
        imageUrl: item.fields.media[0].fields.file.url,
        beds: item.fields.cabins,
        baths: item.fields.heads,
        guests: item.fields.passengers,
        description: item.fields.body,
        rate: item.fields.rate,
        amenities: item.fields.amenities,
      };
      objects.push(home);
    }
    index.saveObjects(objects, { autoGenerateObjectIDIfNotExist: false }).then(({ objectIDs }) => {
      // console.log(objectIDs);
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}
getExperiences();
