import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import NewsArticles from "../components/newsArticles";


export default () => (
    <>
        <Helmet>
            <title>Chandrima Agnihotri | Press</title>
        </Helmet>
        <Layout>
            <NewsArticles />            
        </Layout>
    </>
);
