import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";

function getAlternate(lang, index, url) {
  return (
    <link
      key={index}
      rel="alternate"
      hreflang={lang}
      href={
        lang !== "en"
          ? `https://prototype.xiler.net/${lang}/${url}`
          : `https://prototype.xiler.net/${url}`
      }
    />
  );
}

const Layout = ({ children, title, url, alternates }) => {
  return (
    <>
      <Helmet>
        <title>{title ? `Xiler | ${title}` : "Xiler"}</title>
        {getAlternate("en", 0, url)}
        {alternates &&
          alternates.map((lang, index) => getAlternate(lang, index, url))}
      </Helmet>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
