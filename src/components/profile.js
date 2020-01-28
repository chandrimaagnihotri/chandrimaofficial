import React from "react";
import { css } from "@emotion/core";
import BrandProfile from "./brandProfile";

const Profile = () => (
    <section
        css={css`
            margin: auto 1.25rem 1rem;

            @media (min-width: 576px) {
                display: flex;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: flex-start;
                margin: auto 2rem 3rem;
            }

            @media (min-width: 769px) {
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: flex-start;
            }
        `}
    >
        <BrandProfile />
    </section>
);

export default Profile;
