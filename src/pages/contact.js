import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import ContactForm from "../components/contactForm";

export default () => (
    <>
        <Helmet>
            <title>Chandrima Agnihotri | Contact</title>
        </Helmet>
        <Layout>
            <ContactForm />
        </Layout>
    </>
);
