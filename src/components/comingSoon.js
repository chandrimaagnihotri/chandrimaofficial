import React from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/core";

const ComingSoon = () => {
    const { imageOne, imageTwo, imageThree } = useStaticQuery(graphql`
        query {
            imageOne: file(relativePath: { eq: "Image1.png" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            imageTwo: file(relativePath: { eq: "Image2.png" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            imageThree: file(relativePath: { eq: "Image3.png" }) {
                sharp: childImageSharp {
                    fluid {
                         ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <section
            css={css`
                display: flex;
                flex-direction: column nowrap;
                justify-content: flex-start;
                margin-bottom: 1rem;
                
                @media screen and (min-width: 576px) {
                    margin-bottom: 1.25rem;
                }

                @media screen and (min-width: 768px) {
                    margin-bottom: 1.5rem;
                }

                @media screen and (min-width: 992px) {
                    margin-bottom: 1.75rem;
                }

                @media screen and (min-width: 1200px) {
                    margin-bottom: 2rem;
                }
            `}
        >
            <Image
                css={css`
                    @media screen and (min-width: 576px) {
                        display: none;
                    }

                    @media screen and (min-width: 768px) {
                        width: 33.33%;
                        display: inherit;
                    }

                    @media screen and (min-width: 768px) and (orientation: portrait) {
                        display: none;
                    }

                    @media screen and (min-width: 992px) {
                        width: 33.33%;
                        display: inherit;
                    }

                    @media screen and (min-width: 992px) and (orientation: portrait) {
                        display: none;
                    }

                    @media screen and (min-width: 1200px) {
                        width: 33.33%;
                    }
                `}
                fluid={imageOne.sharp.fluid}
                fadeIn="soft"
            />
            <Image
                css={css`
                    width: 100%;
                    @media screen and (min-width: 576px) {
                        width: 100%;
                    }

                    @media screen and (min-width: 768px) {
                        width: 33.33%;
                    }

                    @media screen and (min-width: 768px) and (orientation: portrait) {
                        width: 100%;
                    }

                    @media screen and (min-width: 992px) {
                        width: 33.33%;
                    }

                    @media screen and (min-width: 992px) and (orientation: portrait) {
                        width: 100%;
                    }

                    @media screen and (min-width: 1200px) {
                        width: 33.33%;
                    }
                `}
                fluid={imageTwo.sharp.fluid}
                fadeIn="soft"
            />
            <Image
                css={css`
                    @media screen and (min-width: 576px) {
                        display: none;
                    }

                    @media screen and (min-width: 768px) {
                        width: 33.33%;
                        display: inherit;
                    }

                    @media screen and (min-width: 768px) and (orientation: portrait) {
                        display: none;
                    }

                    @media screen and (min-width: 992px) {
                        width: 33.33%;
                        display: inherit;
                    }

                    @media screen and (min-width: 992px) and (orientation: portrait) {
                        display: none;
                    }

                    @media screen and (min-width: 1200px) {
                        width: 33.33%;
                    }
                `}
                fluid={imageThree.sharp.fluid}
                fadeIn="soft"
            />
            <p
                css={css`
                    position: absolute;
                    z-index: 1;
                    margin: 0 auto;
                    left: 0;
                    right: 0;
                    text-align: center;
                    letter-spacing: 0.1rem;
                    top: 45vh;
                    max-width: 80vw;
                    font-size: 1.25rem;
                    color: #fffff0;

                    @media screen and (min-width: 576px) {
                        font-size: 1.5rem;
                        max-width: 60vw;
                    }

                    @media screen and (min-width: 768px) {
                        max-width: 50vw;
                        top: 40vh;
                    }

                    @media screen and (min-width: 768px) and (orientation: portrait) {
                        max-width: 40vw;
                        top: 50vh;
                    }

                    @media screen and (min-width: 992px) {
                        max-width: 35vw;
                        top: 35vh;
                    }

                    @media screen and (min-width: 992px) and (orientation: portrait) {
                        font-size: 2rem;
                        max-width: 35vw;
                        top: 50vh;
                    }

                    @media screen and (min-width: 1200px) {
                        font-size: 1.75rem;
                        max-width: 30vw;
                        top: 45vh;
                    }

                    @media screen and (min-width: 1800px) {
                        font-size: 2rem;
                    }
                `}
            >
                COLLECTION REVEAL DURING LAKMÉ FASHION WEEK 2020
            </p>
        </section>
    );
};

export default ComingSoon;
