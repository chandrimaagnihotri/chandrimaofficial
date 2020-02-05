import React from "react";
import pressPhoto from "../images/newspaper.svg"
import { css } from "@emotion/core";

const PressArticlePhoto = () => (
    <img
        src={pressPhoto}
        alt="Newspaper SVG"
        css={css`
            width: 100vw;

            @media screen and (min-width: 992px) {
                width: 50vw;
            }
            
            @media screen and (min-width: 1366px) {
                width: 40vw;
            }
            
            @media screen and (min-width: 1920px) {
                width: 50vw;
            }
        `}
    />
);

export default PressArticlePhoto;