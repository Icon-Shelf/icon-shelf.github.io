import * as React from "react";

const FeatureItem = ({ className, icon, desc }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-orange flex-shrink-0">
        {icon}
      </div>

      <p className="ml-4 text-base text-body font-normal max-w-sm md:max-w-none md:text-desktop-paragraph">
        {desc}
      </p>
    </div>
  );
};

export default FeatureItem;
