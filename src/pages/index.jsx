import * as React from "react";
import FeaturesCardBlocks from "../components/home-page/FeaturesCardBlocks";
import FeaturesGridList from "../components/home-page/FeaturesGridList";
import FeaturesStacked from "../components/home-page/FeaturesStacked";
import Hero from "../components/home-page/hero";
import Testimonials from "../components/home-page/Testimonials";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Icon Shelf">
      <Hero />

      <FeaturesGridList />
      <FeaturesStacked />
      <FeaturesCardBlocks />

      <Testimonials />
    </Layout>
  );
};

export default IndexPage;
