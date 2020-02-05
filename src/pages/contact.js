import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import ContactContainer from "../components/contactContainer";

export default () => (
    <>
        <Helmet>
            <title>Chandrima Agnihotri | Contact</title>
        </Helmet>
        <Layout>
            <ContactContainer />
        </Layout>
    </>
);
