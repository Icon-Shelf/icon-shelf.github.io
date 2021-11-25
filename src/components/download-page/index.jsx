import * as React from "react";
import DownloadList from "./DownloadList";

const DownloadPage = () => {
  return (
    <section className="py-12 md:py-20 m-auto max-w-screen-xl px-6 md:mx-auto mb-24">
      <h1 className="text-white m-auto font-medium mx-6 text-mobile-h1 text-center md:text-desktop-h1 md:text-5xl">
        Download Icon Shelf
      </h1>
      <p className="mt-4 m-auto text-desktop-subheading text-body text-center md:mt-2 md:px-20">
        You are one step away from improving your web development speed!
      </p>

      <DownloadList />
    </section>
  );
};

export default DownloadPage;
