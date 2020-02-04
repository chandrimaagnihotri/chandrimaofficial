import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import ContactUs from "../components/contactUs";

export default () => (
    <>
        <Helmet>
            <title>Chandrima Agnihotri | Contact</title>
        </Helmet>
        <Layout>
            <ContactUs />
        </Layout>
    </>
);
