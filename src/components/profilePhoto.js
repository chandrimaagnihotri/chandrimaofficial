import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import { css } from "@emotion/core";

const ProfilePhoto = () => {
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
                    0 3px 6px hsla(0, 0%, 0%, 0.1),
                    0 10px 20px hsla(0, 0%, 0%, 0.15),
                    0 3px 6px hsla(0, 0%, 0%, 0.1);

                @media (min-width: 576px) {
                    width: 50rem;
                }

                @media (min-width: 769px) {
                    width: 17rem;
                    float: left;
                    margin: 1rem 2rem 0.5rem 0;
                }

                @media (min-width: 1025px) {
                    width: 20rem;
                    float: left;
                    margin: 1rem 2rem 1rem 0;
                }

                @media (min-width: 1919px) {
                    width: 30rem;
                    float: left;
                    margin: 1rem 2rem 0 0;
                }
            `}
            fluid={profilePhoto.sharp.fluid}
            alt="Chandrima Agnihotri"
            fadeIn="soft"
        />
    );
};

export default ProfilePhoto;
