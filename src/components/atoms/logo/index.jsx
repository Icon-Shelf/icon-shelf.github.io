import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <StaticImage
        src={"../../../../public/static/logo/512x512.png"}
        className="w-10 md:w-14"
      />
      <span className="text-2xl font-medium md:text-3xl">Icon Shelf</span>
    </div>
  );
};

export default Logo;
