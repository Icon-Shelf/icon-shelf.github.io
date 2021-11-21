import * as React from "react";

const FeatureItem = ({ className, icon, heading, desc }) => (
  <div className={`md:w-1/2 ${className}`}>
    <div className="w-full space-y-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange">
        {icon}
      </div>
      <h3 className="font-semibold text-desktop-h4"> {heading} </h3>
      <p className="font-normal text-desktop-paragraph text-body mr-8">
        {desc}
      </p>
    </div>
  </div>
);

export default FeatureItem;
