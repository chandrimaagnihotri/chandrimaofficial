import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import ProfilePhoto from "./profilePhoto";

const BrandProfile = () => {
    const ProfilePara = styled.p`
        margin-top: 1rem;

        &:first-of-type {
            margin-top: 0.5rem;
        }

        &:last-of-type {
            margin-bottom: 0;
        }

        @media (min-width: 769px) {
            max-width: 45em;
        }

        @media (min-width: 1025px) {
            max-width: 51em;
        }

        @media (min-width: 1919px) {
            max-width: 58rem;
        }
    `;

    const BrandName = styled.span`
        font-family: "Bodoni72SmallcapsBook";
        letter-spacing: 0.2rem;
        margin: auto 0.5rem;
    `;

    return (
        <div
            css={css`
                margin-top: 1rem;

                @media (min-width: 576px) {
                    margin-top: 0;
                }

                @media (min-width: 769px) {
                    margin-top: 0;
                }
            `}
        >
            <ProfilePhoto />
            <h2
                css={css`
                    text-transform: uppercase;
                    margin-top: 1rem;

                    @media (min-width: 576px) {
                        margin-top: 0;
                    }

                    @media (min-width: 769px) {
                        margin-top: 0;
                    }

                    @media (min-width: 1919px) {
                        margin-top: 1rem;
                    }
                `}
            >
                Our Story
            </h2>
            <ProfilePara>
                A graduate of Fashion Design from the country’s pre-eminent
                institution National Institute of Fashion Technology Mumbai,
                Chandrima Agnihotri, is the founder of her eponymous label,
                <BrandName>Chandrima.</BrandName>
            </ProfilePara>
            <ProfilePara>
                She started her career by earning her tutelage under celebrated
                designers and pioneers of the Indian Fashion industry like Abu
                Jani, Sandeep Khosla and Rohit Bal.
            </ProfilePara>
            <ProfilePara>
                After working with Rohit Bal as a senior designer for 6 years,
                she decided to take the leap towards her ambition and launched
                her own label in 2019 armed with hard earned learning coupled
                with an innovative approach.
            </ProfilePara>
            <ProfilePara>
                Through her label, she believes in sustaining the folklore and
                ubiquitous culture of India by seamlessly incorporating its
                crafts in her collections and bringing them to life globally.
            </ProfilePara>
            <ProfilePara>
                The label
                <BrandName>Chandrima</BrandName>
                celebrates diversity in cultures and craft forms by creating
                ready-to-wear Women's wear that is for the urban woman of today.
            </ProfilePara>
            <ProfilePara>
                The brand embodies the idea of India itself. It is a blend of
                Indian handloom and craft, and international style that stands
                for modern elegance and craftsmanship stemmed in the diversity
                and unity of the country.
            </ProfilePara>
        </div>
    );
};

export default BrandProfile;
