import * as React from "react";
import FeatureItem from "./FeatureItem";
import {
  BriefcaseIcon,
  EyeIcon,
  SearchIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import { StaticImage } from "gatsby-plugin-image";

const FeaturesGridList = () => {
  return (
    <section className="mb-14">
      <div className="max-w-screen-xl pt-8 pb-12 mx-6 lg:m-auto md:px-8">
        <div className="w-full md:flex md:justify-center">
          <div className="">
            <h1 className="font-medium leading-snug text-mobile-h2 md:text-desktop-h2 text-white md:text-center md:px-12">
              Connect to your web project’s assets folder and see the magic
              happen.
            </h1>
            <p className="mt-6 font-light text-desktop-subheading text-body md:mt-3 md:text-center">
              Icon Shelf does not add any extra files to the connected assets
              folder.
            </p>
          </div>
        </div>

        <div className="items-center justify-center mt-0 md:flex md:mt-14">
          <div className="flex flex-wrap items-center md:w-2/3">
            <FeatureItem
              className="mt-8 md:mt-0"
              heading="Organize by collections"
              desc="Create collections for various projects and easily switch between them."
              icon={<BriefcaseIcon className="w-6" />}
            />
            <FeatureItem
              className="mt-8 md:mt-0"
              heading="Large icon preview"
              desc="All icons are easily previewable and sorted by date added."
              icon={<EyeIcon className="w-6" />}
            />
            <FeatureItem
              className="mt-8 md:mt-16"
              heading="Searchable icons"
              desc="Can’t find an icon file, just use the search bar in Icon Shelf.
              Use cmd/ctrl+f to quickly focus on search bar."
              icon={<SearchIcon className="w-6" />}
            />
            <FeatureItem
              className="mt-8 md:mt-16"
              heading="Sync icons with team"
              desc="Connect you collections folder with Github, Dropbox... and collaborate with your team. Learn more."
              icon={<ShareIcon className="w-6" />}
            />
          </div>

          <div className="flex items-center justify-center m-auto mt-20 md:m-0 bg-gradient-to-r">
            <div className="h-80 w-80 flex items-center justify-center bg-gradient-to-r from-feeling-moody-start to-feeling-moody-end rounded-3xl md:w-96 md:h-96">
              <StaticImage
                className="w-72 md:w-80"
                src="../../../images/home-page/icons-grid.png"
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridList;
