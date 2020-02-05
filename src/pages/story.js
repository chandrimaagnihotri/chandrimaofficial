import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import StoryContainer from "../components/storyContainer";

export default () => (
    <>
        <Helmet>
            <title>Chandrima Agnihotri | Story</title>
        </Helmet>
        <Layout>
            <StoryContainer />
        </Layout>
    </>
);
