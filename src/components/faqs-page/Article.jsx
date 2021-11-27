import { Link } from "gatsby";
import * as React from "react";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

const Article = ({ node }) => {
  return (
    <article className="flex px-6 py-7 bg-mockup-b rounded-3xl shadow-lg ring-1 ring-gray-800">
      <div className="mr-4">
        <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center font-semibold text-xl text-center align-middle">
          {node.frontmatter.listIndex}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold">
          <Link to={`/faqs/${node.slug}`}>{node.frontmatter.title}</Link>
        </h2>

        <div className="mt-2 text-body">{node.excerpt}</div>

        <Link
          to={`/faqs/${node.slug}`}
          className="flex items-center mt-4 text-sm font-semibold hover:text-blue-500"
        >
          Read more <ArrowSmRightIcon className="w-5" />
        </Link>
      </div>
    </article>
  );
};

export default Article;
