import { createClient } from "contentful";
import ComponentHeroBanner from "../components/blocks/componentHeroBanner/ComponentHeroBanner";
import ComponentProfile from "../components/blocks/componentProfile/ComponentProfile";
import ComponentServiceCard from "../components/blocks/componentServiceCard/ComponentServiceCard";
import ComponentServiceList from "../components/blocks/componentServiceList/ComponentServiceList";
import ComponentVideoBlock from "../components/organisms/componentVideoBlock/ComponentVideoBlock";
const { C_SPACE_ID, C_DELIVERY_KEY } = require("../helpers/contentful-config");

export async function getStaticProps() {
  const client = createClient({
    space: C_SPACE_ID,
    accessToken: C_DELIVERY_KEY,
  });

  const resPage = await client
    .getEntries({
      content_type: "page",
      include: 10,
    })

    .then((entries) => entries.items);

  return {
    props: {
      Page: resPage,
    },
    revalidate: 1,
  };
}

export default function Home({ Page }) {
  const heroBanner = Page[0].fields.components[0].fields;
  const serviceList = Page[0].fields.components[1].fields;
  const videoBlock = Page[0].fields.components[2].fields;
  console.log("Page", Page);
  return (
    <div>
      <ComponentHeroBanner componentData={heroBanner} />
      <ComponentVideoBlock componentData={videoBlock} />
      <ComponentServiceList componentData={serviceList} />
      {/* <ComponentServiceCard servicesList={servicesList} /> */}
      {/* <ComponentProfile data={profileKurt} /> */}
      {/* <ComponentProfile data={profileCompany} /> */}
    </div>
  );
}
