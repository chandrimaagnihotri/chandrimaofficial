import React from "react";
import Layout from "../components/layout";
import ContactContainer from "../components/contactContainer";
import SEO from "../components/seo";

export default () => (
    <>
        <SEO title="Contact" />
        <Layout>
            <ContactContainer />
        </Layout>
    </>
);
