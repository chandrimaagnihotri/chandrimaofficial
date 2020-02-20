import React from "react";
import Image from "gatsby-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Header = styled.h2`
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    font-weight: 700;
    color: hsla(0, 0%, 10%, 1);
    text-align: center;

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
`;

const HomeRunway = () => {
    const {
        runway1,
        runway2,
        runway3,
        runway4,
        runway5,
    } = useStaticQuery(graphql`
        query {
            runway1: file(relativePath: { eq: "runway/runway1.jpeg" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            runway2: file(relativePath: { eq: "runway/runway2.jpeg" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            runway3: file(relativePath: { eq: "runway/runway3.jpeg" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            runway4: file(relativePath: { eq: "runway/runway4.jpeg" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            runway5: file(relativePath: { eq: "runway/runway5.jpeg" }) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <>
            <Header>Runway Collection Spring Summer 2020</Header>
            <Header>Lakmè Fashion Week </Header>
            <div
                css={css`
                    @media screen and (min-width: 786px) {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `}
            >
                <Carousel
                    showArrows={true}
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
                >
                    <Image fluid={runway1.sharp.fluid} fadeIn={true} />
                    <Image fluid={runway2.sharp.fluid} fadeIn={true} />
                    <Image fluid={runway3.sharp.fluid} fadeIn={true} />
                    <Image fluid={runway4.sharp.fluid} fadeIn={true} />
                    <Image fluid={runway5.sharp.fluid} fadeIn={true} />
                </Carousel>

                <Link
                    css={css`
                        margin: 1.25rem;
                        font-size: 1rem;
                        text-decoration: none;
                        color: inherit;
                        text-align: center;
                        border-bottom: 0.1rem solid hsla(0, 0%, 40%, .2);
                        -webkit-transition: all 0.3s ease-out;
                        transition: all 0.3s ease-out;
                        letter-spacing: 0.1rem;
                        
                        &:hover {
                            border-bottom: 0.1rem solid hsla(0, 0%, 40%, 1);
                        }

                        &.active {
                            color: inherit;
                        }
                    `}
                    to="/collection/"
                >
                    View Full Collection &rarr;
                </Link>
            </div>
        </>
    );
};

export default HomeRunway;
