import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import Profile from "../components/profile";

export default () => (
    <>
        <Helmet>
            <title>Chandrima Agnihotri | Story</title>
        </Helmet>
        <Layout>
            <Profile />
        </Layout>
    </>
);
