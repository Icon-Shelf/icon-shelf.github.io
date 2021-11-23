import * as React from "react";
import { FeatureBlock } from "./FeatureBlock";
import {
  HandIcon,
  BeakerIcon,
  CodeIcon,
  ShareIcon,
  DesktopComputerIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/outline";

const FeaturesCardBlocks = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="m-auto max-w-screen-xl px-6 md:mx-auto">
        <h2 className="mx-6 font-medium text-center text-mobile-h2 md:text-desktop-h2 md:mx-0">
          But wait, there's more.
        </h2>

        <div className="mt-6">
          <div className="flex flex-col md:flex-row">
            <FeatureBlock
              img={<HandIcon className="w-6" />}
              heading={"1. Drag andDrop"}
              description={
                "Easily drag icons from Iconset to your design tool."
              }
            />
            <FeatureBlock
              img={<BeakerIcon className="w-6" />}
              heading={"2. Optimize SVGs"}
              description={
                "Use our SVG optimizer to make icons production-ready."
              }
            />
            <FeatureBlock
              img={<CodeIcon className="w-6" />}
              heading={"3. Customizable copy"}
              description={
                "Get the icon embed code for React, Vue,  Svelte and Ember."
              }
            />
          </div>
          <div className="md:flex">
            <FeatureBlock
              img={<ShareIcon className="w-6" />}
              heading={"4. Sync with the team"}
              description={
                "Connect collections folder to Github, Drive... and be in sync."
              }
            />
            <FeatureBlock
              img={<DesktopComputerIcon className="w-6" />}
              heading={"5. Cross Platform"}
              description={
                "Icon Shelf works great on macOS, Windows and Linux computers."
              }
            />
            <FeatureBlock
              img={<CurrencyDollarIcon className="w-6" />}
              heading={"6. Free to use"}
              description={"Icon Shelf is a free and open source tool."}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCardBlocks;
