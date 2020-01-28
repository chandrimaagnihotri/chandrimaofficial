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

                @media (min-width: 576px) {
                    flex-direction: row nowrap;
                }
            `}
        >
            <Image
                css={css`
                    display: none;
                    @media (min-width: 576px) {
                        display: inherit;
                        width: 33.33%;
                    }
                `}
                fluid={imageOne.sharp.fluid}
                fadeIn="soft"
            />
            <Image
                css={css`
                    width: 100%;
                    @media (min-width: 576px) {
                        width: 33.33%;
                        display: inherit;
                    }
                `}
                fluid={imageTwo.sharp.fluid}
                fadeIn="soft"
            />
            <Image
                css={css`
                    display: none;
                    @media (min-width: 576px) {
                        width: 33.33%;
                        display: inherit;
                    }
                `}
                fluid={imageThree.sharp.fluid}
                fadeIn="soft"
            />
            <p
                css={css`
                    position: fixed;
                    z-index: 999;
                    margin: 0 auto;
                    left: 0;
                    right: 0;
                    text-align: center;
                    top: 40%;
                    max-width: 55%; /* Set the width of the positioned div */
                    font-size: 2rem;
                    color: #fffff0;

                    @media (min-width: 576px) {
                        max-width: 55%;
                    }
                `}
            >
                COLLECTION REVEAL DURING LAKMÉ FASHION WEEK 2020
            </p>
        </section>
    );
};

export default ComingSoon;
