import React from "react";
import contactPhoto from "../images/contact.svg";
import { css } from "@emotion/core";

const ContactPhoto = () => (
    <img
        src={contactPhoto}
        alt="Contact SVG"
        css={css`
            width: 100vw;

            @media screen and (min-width: 768px) {
                width: 40vw;
            }
        `}
    />
);

export default ContactPhoto;
