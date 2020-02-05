import React from "react";
import Layout from "../components/layout";
import StoryContainer from "../components/storyContainer";
import SEO from "../components/seo";

export default () => (
    <>
        <SEO title="Story" />
        <Layout>
            <StoryContainer />
        </Layout>
    </>
);
