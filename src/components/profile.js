import React from "react";
import { css } from "@emotion/core";
import BrandProfile from "./brandProfile";

const Profile = () => (
    <section
        css={css`
            margin: 0rem 1.25rem 1rem;

            @media screen and (min-width: 576px) {
                display: flex;
                flex-flow: row nowrap;
                justify-content: center;
                align-items: flex-start;
                margin: 0 1.5rem 1.25rem;
            }

            @media screen and (min-width: 768px) {
                display: flex;
                flex-flow: row wrap;
                justify-content: center;
                align-items: flex-start;
                margin: 0 0 1.5rem 0;
            }

            @media screen and (min-width: 992px) {
                margin: 0 0 1.75rem 0;
            }

            @media screen and (min-width: 1200px) {
                margin: 0 0 2rem 0;
            }
        `}
    >
        <BrandProfile />
    </section>
);

export default Profile;
