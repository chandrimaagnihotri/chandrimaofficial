import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import CollectionContainer from "../components/collectionContainer";

export default () => (
    <>
        <SEO title="Collection" />
        <Layout>
            <CollectionContainer />
        </Layout>
    </>
);
