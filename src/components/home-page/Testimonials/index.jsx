import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import TestimonyCard from "./TestimonyCard";

const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 mb-28">
      <div className="text-center">
        <section className="max-w-xl mx-6 md:m-auto">
          <h5 className="text-base font-bold tracking-wider uppercase text-slate-orange">
            We Love Our Users
          </h5>
          <h2 className="font-medium text-mobile-h2 md:text-desktop-h2 mt-4 md:mt-5">
            And they seem to love us
          </h2>
        </section>

        <section className="mt-8 mx-6 md:mt-14">
          <div className="items-center justify-center max-w-xl m-auto md:max-w-3xl lg:flex space-y-4 lg:space-y-0 lg:space-x-6">
            <TestimonyCard
              testimony="Love it. This helps speed-up my web development flow."
              designation="Abhilash L R, Frontend architect"
            >
              <StaticImage
                src="../../../images/home-page/abhilash-profile.jpeg"
                className="w-16 h-16 rounded-full"
                alt=""
              />
            </TestimonyCard>

            <TestimonyCard
              testimony="Nice tool, I was searching this kind of tool since many years :)"
              designation="Lamenace, User Experience Designer"
            >
              <StaticImage
                src="../../../images/home-page/lamenace-profile.jpeg"
                className="w-16 h-16 rounded-full"
                alt=""
              />
            </TestimonyCard>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
