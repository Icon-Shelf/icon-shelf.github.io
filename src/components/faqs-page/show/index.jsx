import * as React from "react";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";

const FaqShowPage = ({ data }) => {
  return (
    <section className="py-12 md:py-20 m-auto max-w-screen-lg px-6 md:mx-auto mb-24">
      <div className="text-white m-auto text-center flex items-start">
        <Link to={"/faqs"}>
          <ChevronLeftIcon className="w-10" />
        </Link>
        <h2 className="flex-1 mx-6 font-medium  text-mobile-h2 md:text-desktop-h2 md:text-4xl">
          {data.frontmatter.listIndex}. {data.frontmatter.title}
        </h2>
      </div>

      <div className="mt-10 p-6 bg-mockup-b rounded-2xl">
        <div className="text-body">
          <MDXRenderer>{data.body}</MDXRenderer>
        </div>
      </div>
    </section>
  );
};

export default FaqShowPage;
