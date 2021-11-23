import * as React from "react";

export const FeatureBlock = ({ img, heading, description }) => (
  <div className="flex ml-6 mr-6 md:ml-0 md:w-1/3 mt-8 md:mr-8">
    <div className="w-full text-center p-9 rounded-3xl bg-mockup-b">
      <div className="w-12 h-12 p-3 m-auto rounded-full bg-slate-orange">
        {img}
      </div>
      <h5 className="mt-4 text-xl font-medium"> {heading}</h5>
      <p className="mt-4 font-normal text-desktop-paragraph text-body">
        {" "}
        {description}
      </p>
    </div>
  </div>
);
