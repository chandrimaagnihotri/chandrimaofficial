import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import PressContainer from "../components/pressContainer";


export default () => (
    <>
        <Helmet>
            <title>Chandrima Agnihotri | Press</title>
        </Helmet>
        <Layout>
            <PressContainer />            
        </Layout>
    </>
);
