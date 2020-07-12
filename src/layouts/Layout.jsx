import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <title>{title ? `Xiler | ${title}` : "Xiler"}</title>
            </Helmet>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
