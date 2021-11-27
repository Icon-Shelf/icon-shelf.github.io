import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import FaqsPage from "../../components/faqs-page";

const FAQPage = ({ data }) => {
  return (
    <Layout pageTitle="Icon Shelf | FAQ">
      <FaqsPage data={data} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___listIndex, order: ASC }) {
      nodes {
        frontmatter {
          title
          listIndex
        }
        id
        excerpt(truncate: true, pruneLength: 210)
        slug
      }
    }
  }
`;

export default FAQPage;
