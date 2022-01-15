import * as React from "react";
import Logo from "../atoms/logo";
import { Button } from "../atoms/button";
import { Link } from "gatsby";
import { MenuAlt3Icon } from "@heroicons/react/outline";

const HeaderNav = () => {
  return (
    <nav className="">
      <div className="px-6 pt-6 m-auto max-w-screen-xl md:pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <div className="relative flex items-center gap-10">
            <Link
              className="hidden font-medium text-lg hover:text-blue-500 md:flex"
              to="/faqs"
            >
              FAQ
            </Link>

            <a
              className="hidden font-medium text-lg hover:text-blue-500 md:flex"
              href="https://icon-shelf.frill.co/announcements"
              target={"_blank"}
              rel="noreferrer"
            >
              Updates
            </a>

            <Link className="hidden md:flex" to="/download">
              <Button type="primary" size="small">
                Download
              </Button>
            </Link>

            <div className="visible md:hidden">
              <Button icon={<MenuAlt3Icon className="w-6" />} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
