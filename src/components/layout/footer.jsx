import * as React from "react";
import Logo from "../atoms/logo";

const Footer = () => {
  return (
    <footer className="flex flex-col h-16 w-full px-6 pb-6 m-auto max-w-screen-xl">
      <div className="flex flex-col gap-2 items-start md:flex-row md:items-center md:gap-3">
        <Logo />
        <div className="text-body md:mt-1 font-extralight">
          A project by{" "}
          <a
            href="https://twitter.com/Robie577"
            className="font-normal hover:text-blue-500"
            target="_blank"
            rel="noreferrer"
          >
            Robin Philip Thomas
          </a>
        </div>
      </div>

      <div className="mt-5 pb-6 border-t border-input">
        <div className="mt-4 text-mockup">Copyright © 2021</div>
      </div>
    </footer>
  );
};

export default Footer;
