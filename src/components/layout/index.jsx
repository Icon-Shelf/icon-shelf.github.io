import * as React from "react";
import { useScrollRestoration } from "gatsby";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import HeaderNav from "./header-nav";

const Layout = ({ pageTitle, children }) => {
  const ulScrollRestoration = useScrollRestoration(`main-layout`);

  return (
    <div className="h-full w-full overflow-auto" {...ulScrollRestoration}>
      <Helmet title={pageTitle} defer={false} />

      <HeaderNav />

      <main className="">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
