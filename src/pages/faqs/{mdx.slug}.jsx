import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import FaqShowPage from "../../components/faqs-page/show";

const FAQPost = ({ data }) => {
  return (
    <Layout pageTitle={`Icon Shelf | ${data.mdx.frontmatter.title}`}>
      <FaqShowPage data={data.mdx} />
    </Layout>
  );
};

export const query = graphql`
  query MyQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        listIndex
      }
      body
    }
  }
`;

export default FAQPost;
