import * as React from "react";
import { useScrollRestoration } from "gatsby";
import { Helmet } from "react-helmet";
import Footer from "./footer";
import HeaderNav from "./header-nav";

const Layout = ({ pageTitle, children }) => {
  const ulScrollRestoration = useScrollRestoration(`main-layout`);

  return (
    <div className="h-full w-full overflow-auto" {...ulScrollRestoration}>
      <Helmet
        title={pageTitle}
        defer={false}
        htmlAttributes={{
          lang: "en",
        }}
      >
        {/*  Primary Meta Tags  */}
        <title>One of a kind manager for web developer</title>
        <meta name="title" content="The icon manager for web developer" />
        <meta
          name="description"
          content="All your icons in one place, easily copyable as code."
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://icon-shelf.github.io/" />
        <meta
          property="og:title"
          content="The icon manager for web developer"
        />
        <meta
          property="og:description"
          content="All your icons in one place, easily copyable as code."
        />
        <meta property="og:image" content="/meta-preview-hero-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://icon-shelf.github.io/" />
        <meta
          property="twitter:title"
          content="The icon manager for web developer"
        />
        <meta
          property="twitter:description"
          content="All your icons in one place, easily copyable as code."
        />
        <meta property="twitter:image" content="/meta-preview-hero-image.png" />
        <meta
          name="google-site-verification"
          content="3l7I9UyER8EMUiaStECiPx4w6OyFzi_R99F31XqsckE"
        />
      </Helmet>

      <HeaderNav />

      <main className="">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
