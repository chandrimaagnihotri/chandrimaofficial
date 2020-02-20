import React from "react";
import { css } from "@emotion/core";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const CollectionRunway = () => {
    const runwayPhotos = useStaticQuery(graphql`
        query {
            allFile(filter: { relativeDirectory: { eq: "runway" } }) {
                nodes {
                    sharp: childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                    id
                }
            }
        }
    `);

    return (
        <>
            <h2
                css={css`
                    margin-left: 1rem;
                    text-transform: uppercase;
                    letter-spacing: 0.1rem;
                    font-size: 1rem;
                    font-weight: 700;
                    color: hsla(0, 0%, 10%, 1);
                    margin-bottom: .5em;

                    @media screen and (min-width: 576px) {
                        margin-left: 1.25rem;
                    }

                    @media screen and (min-width: 768px) {
                        margin-left: 1.5rem;
                    }

                    @media screen and (min-width: 992px) {
                        margin-left: 1.75rem;
                        font-size: 1.25rem;
                    }

                    @media screen and (min-width: 1200px) {
                        margin-left: 2rem;
                    }
                `}
            >
                Runway Look
            </h2>
            <section
                css={css`
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: center;
                    margin-bottom: 1em;
                    @media screen and (min-width: 786px) {
                        margin: 0 2rem 2rem;
                    }
                `}
            >
                {/* <Carousel
                showThumbs={false}
                infiniteLoop={true}
                interval={3000}
                autoPlay={true}
                showStatus={false}
                css={css`
                    margin: 1rem 0;
                    @media screen and (min-width: 786px) {
                        width: 25%;
                    }
                `}
            > */}

                {runwayPhotos.allFile.nodes.map(photo => (
                    <Image
                        key={photo.id}
                        fluid={photo.sharp.fluid}
                        imgStyle={{
                            padding: "1rem",
                        }}
                        css={css`
                            margin: 0.5rem 1rem;
                            width: 100%;
                            box-shadow: 0 3px 9px hsla(0, 0%, 0%, 0.5);

                            @media screen and (min-width: 786px) {
                                width: 16%;
                                margin: 1rem;
                                transition: 0.2s all ease-in;

                                &:hover {
                                    cursor: pointer;
                                    transform: scale(1.1, 1.1);
                                    z-index: 2;
                                }
                            }
                        `}
                    />
                ))}
                {/* </Carousel> */}
            </section>
        </>
    );
};

export default CollectionRunway;
