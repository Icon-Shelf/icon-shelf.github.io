import * as React from "react";
import FeaturesGridList from "../components/home-page/FeaturesGridList";
import FeaturesStacked from "../components/home-page/FeaturesStacked";
import Hero from "../components/home-page/hero";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Icon Shelf">
      <Hero />
      <FeaturesGridList />
      <FeaturesStacked />
    </Layout>
  );
};

export default IndexPage;
