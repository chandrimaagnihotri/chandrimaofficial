import React from "react";
import Layout from "../components/layout";
import HomeContainer from "../components/homeContainer";
import SEO from "../components/seo";

export default () => (
    <>
        <SEO title="Home" />
        <Layout>
            <HomeContainer />
        </Layout>
    </>
);

