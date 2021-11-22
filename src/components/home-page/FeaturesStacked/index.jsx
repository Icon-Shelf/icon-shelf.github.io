import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import FeatureItem from "./FeatureItem";
import {
  ClipboardIcon,
  ClipboardCopyIcon,
  TemplateIcon,
} from "@heroicons/react/outline";
import { Button } from "../../atoms/button";
import ArrowRight from "@heroicons/react/solid/ArrowRightIcon";

const FeaturesStacked = () => {
  return (
    <section className="">
      <div className="pt-20 pb-12 mx-6 max-w-screen-xl md:pt-32 md:pb-24 md:mx-auto md:px-12">
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-center w-full md:w-3/5 md:justify-start">
            <div className="bg-gradient-to-r flex items-center justify-center from-feeling-moody-start to-feeling-moody-end rounded-3xl h-80 w-80 md:w-96 md:h-96">
              <StaticImage
                className="w-64 md:w-72"
                src="../../../images/home-page/context-menu.png"
                alt=""
              />
            </div>
          </div>

          <div>
            <div className="flex w-full lg:justify-end">
              <div className="">
                <h2 className="font-medium leading-tight text-mobile-h2 lg:text-desktop-h2 text-white mt-20 lg:-mt-10">
                  Copy icons as React, Vue, Ember etc code.
                </h2>

                <div className="flex flex-col justify-between mt-12">
                  <FeatureItem
                    className=""
                    desc="Copy to clipboard as import statements for popular frameworks."
                    icon={<ClipboardIcon className="w-6" />}
                  />
                  <FeatureItem
                    className="mt-6"
                    desc="Fully customize “copy to clipboard” text for your project."
                    icon={<ClipboardCopyIcon className="w-6" />}
                  />
                  <FeatureItem
                    className="mt-6"
                    desc="Handy shortcuts for the actions you do most."
                    icon={<TemplateIcon className="w-6" />}
                  />
                </div>

                <div className="mt-14">
                  <Button type="primary" size="large" className="w-full gap-2">
                    Learn more
                    <ArrowRight className="w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesStacked;
