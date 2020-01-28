import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Profile = () => {
    const ProfilePara = styled.p`
        margin-top: 1em;
        max-width: 35em;

        &:first-of-type {
            margin-top: 0;
        }

        &:last-of-type {
            margin-bottom: 1em;
        }
    `;

    const BrandName = styled.span`
        font-family: "Bodoni72SmallcapsBook";
    `;

    return (
        <>
            <section 
                css={css`
                    display: flex;
                    flex-flow: column nowrap;
                    justify-content: center;
                    align-items: center;
                `}
            >
                <h2
                    css={css`
                        margin: 1em auto 0em;
                        font-weight: 500;
                        text-transform: uppercase;
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
                    She started her career by earning her tutelage under
                    celebrated designers and pioneers of the Indian Fashion
                    industry like Abu Jani, Sandeep Khosla and Rohit Bal.
                </ProfilePara>
                <ProfilePara>
                    After working with Rohit Bal as a senior designer for 6
                    years, she decided to take the leap towards her ambition and
                    launched her own label in 2019 armed with hard earned
                    learning coupled with an innovative approach.
                </ProfilePara>
                <ProfilePara>
                    Through her label, she believes in sustaining the folklore
                    and ubiquitous culture of India by seamlessly incorporating
                    its crafts in her collections and bringing them to life
                    globally.
                </ProfilePara>
                <ProfilePara>
                    The label
                    <BrandName>Chandrima</BrandName>
                    celebrates diversity in cultures and craft forms by creating
                    ready-to-wear Women's wear that is for the urban woman of
                    today.
                </ProfilePara>
                <ProfilePara>
                    The brand embodies the idea of India itself. It is a blend
                    of Indian handloom and craft, and international style that
                    stands for modern elegance and craftsmanship stemmed in the
                    diversity and unity of the country.
                </ProfilePara>
            </section>
        </>
    );
};

export default Profile;
