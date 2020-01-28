import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import ComingSoon from "../components/comingSoon";
import Social from "../components/social";

export default () => (
    <>
        <Helmet>
            <title>Chandrima Agnihotri | Fashion Designer</title>
        </Helmet>
        <Layout>
            <ComingSoon />
            <Social />
        </Layout>
    </>
)

