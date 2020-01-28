import React from "react";
import { Global, css } from "@emotion/core";
import Header from "./header";
import Footer from "./footer";


const Layout = ({ children }) => {
    return (
        <>
            <Global
                styles={css`
                        html {
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        min-height: 100vh;
                    }

                    /* Box sizing rules */
                    *,
                    *::before,
                    *::after {
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                    }

                    /* Remove list styles on ul, ol elements with a class attribute */
                    ul[class],
                    ol[class] {
                        list-style: none;
                        padding: 0;
                    }

                    /* Remove default margin */
                    body,
                    h1,
                    h2,
                    h3,
                    h4,
                    p,
                    ul[class],
                    ol[class],
                    li,
                    figure,
                    figcaption,
                    blockquote,
                    dl,
                    dd {
                        margin: 0;
                    }

                    body {
                        font-family: system-ui, -apple-system,
                            BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
                            Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
                            "Helvetica Neue", sans-serif;
                        min-height: 100vh;
                        text-rendering: optimizeLegibility;
                        -webkit-font-smoothing: antialiased;
                        -moz-osx-font-smoothing: grayscale;
                        line-height: 1.5;
                        font-size: 1rem;
                    }
                `}
            />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
