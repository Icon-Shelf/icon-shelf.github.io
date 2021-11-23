import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Button } from "../atoms/button";

const Hero = () => {
  return (
    <section className="m-auto max-w-screen-xl pb-12 md:px-6 md:pb-20">
      <div className="flex flex-col text-center">
        <div className="order-2 mt-8 md:order-1 md:mt-14">
          <h1 className="text-white m-auto font-medium mx-6 text-mobile-h1 md:text-desktop-h1 md:text-5xl">
            The icon manager for web developer
          </h1>

          <p className="mt-4 m-auto text-desktop-subheading text-body md:mt-2 md:px-20">
            All your icons in one place, easily copyable as code.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-5">
            <Button type="primary" size="large" className="w-64">
              Download its free!
            </Button>
            <a
              href="https://github.com/MrRobz/icon-shelf"
              target="_blank"
              rel="noreferrer"
            >
              <Button size="large" className="w-64">
                Github
              </Button>
            </a>
          </div>
        </div>

        <div className="flex order-1 px-8 mt-12 rounded-2xl md:order-2 md:px-0">
          <StaticImage
            src="../../images/home-page/hero-screenshot.png"
            className="pt-4 m-auto rounded-md shadow-lg object-fill"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
            objectFit="fill"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
