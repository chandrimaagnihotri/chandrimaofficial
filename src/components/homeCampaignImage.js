import React from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import { css } from "@emotion/core";

const HomeCampaignImage = () => {
    const { imageOne, imageTwo, imageThree } = useStaticQuery(graphql`
        query {
            imageOne: file(relativePath: { eq: "campaign1.jpeg" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            imageTwo: file(relativePath: { eq: "campaign8.jpeg" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            imageThree: file(relativePath: { eq: "campaign7.jpeg" }) {
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
                fadeIn={true}
              
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
                fadeIn={true}
               
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
                fadeIn={true}
                
            />
        </section>
    );
};

export default HomeCampaignImage;
