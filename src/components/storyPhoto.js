import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { css } from "@emotion/core";

const StoryPhoto = () => {
    const { profilePhoto } = useStaticQuery(graphql`
        query {
            profilePhoto: file(relativePath: { eq: "profile.png" }) {
                sharp: childImageSharp {
                    fluid(grayscale: true) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <Image
            css={css`
                box-shadow: 0 10px 20px hsla(0, 0%, 0%, 0.15),
                    0 3px 6px hsla(0, 0%, 0%, 0.1);

                margin-bottom: 1rem;

                @media screen and (min-width: 576px) {
                    width: 50vw;
                    float: left;
                    margin: 0 1.25rem 0.5rem 0;
                }

                @media screen and (min-width: 768px) {
                    width: 40vw;
                    float: left;
                    margin: 0 1.5rem 0.75rem 0;
                }

                @media screen and (min-width: 992px) {
                    width: 30vw;
                    float: left;
                    margin: 0 1.75rem 1rem 0;
                }

                @media screen and (min-width: 1200px) {
                    width: 25vw;
                    float: left;
                    margin: 0 2rem 0 0;
                }
            `}
            fluid={profilePhoto.sharp.fluid}
            alt="Chandrima Agnihotri"
            fadeIn="soft"
        />
    );
};

export default StoryPhoto;
