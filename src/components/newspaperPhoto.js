import React from "react";
import newsPaperPhoto from "../images/newspaper.svg"
import { css } from "@emotion/core";

const NewsPaper = () => (
    <img
        src={newsPaperPhoto}
        alt="Newspaper SVG"
        css={css`
            width: 100vw;

            @media screen and (min-width: 992px) {
                width: 50vw;
            }
        `}
    />
);

export default NewsPaper;