import * as React from "react";
import { Helmet } from "react-helmet";
import HeaderNav from "./header-nav";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="w-full h-full">
      <Helmet title={pageTitle} defer={false} />

      <HeaderNav />

      <main>{children}</main>

      <footer>footer</footer>
    </div>
  );
};

export default Layout;
