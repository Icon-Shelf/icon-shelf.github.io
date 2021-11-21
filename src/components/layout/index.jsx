import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import HeaderNav from "./header-nav";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <Helmet title={pageTitle} defer={false} />

      <HeaderNav />

      <main className="flex-1 h-full w-full">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
