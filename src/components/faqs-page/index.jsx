import * as React from "react";
import Article from "./Article";

const FaqsPage = ({ data }) => {
  return (
    <section className="py-12 md:py-20 m-auto max-w-screen-lg px-6 md:mx-auto mb-24">
      <h1 className="text-white m-auto font-medium mx-6 text-mobile-h1 text-center md:text-desktop-h1 md:text-5xl">
        FAQs
      </h1>
      <p className="mt-4 m-auto text-desktop-subheading text-body text-center md:mt-2 md:px-20">
        Answers to most frequent questions.
      </p>

      <div className="mt-10 flex flex-col gap-5">
        {data.allMdx.nodes.map((node) => (
          <Article key={node.id} node={node} />
        ))}
      </div>
    </section>
  );
};

export default FaqsPage;
