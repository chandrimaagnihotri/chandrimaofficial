import React from "react";
import { css } from "@emotion/core";

const Footer = () => (
    <footer>
        <p
            css={css`
                font-size: 0.75em;
                font-weight: 300;
                letter-spacing: 0.1em;
                width: 100vw;
                text-align: center;
                color: #010203;
            `}
        >
            &#9400; 2020 | Designed by
            <a
                css={css`
                    color: #010203;
                    margin-left: 0.5rem;
                `}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.kaushikdivyansh.dev"
            >
                Divyansh Kaushik
            </a>
        </p>
    </footer>
);

export default Footer;