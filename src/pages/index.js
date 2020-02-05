import React from "react";
import Layout from "../components/layout";
import ComingSoon from "../components/comingSoon";
import SEO from "../components/seo";

export default () => (
    <>
        <SEO title="Home" />
        <Layout>
            <ComingSoon />
        </Layout>
    </>
);

