import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import HeaderNav from "./header-nav";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="h-full w-full">
      <Helmet title={pageTitle} defer={false} />

      <HeaderNav />

      <main className="">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
