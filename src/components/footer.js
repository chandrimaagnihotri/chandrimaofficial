import React from "react";
import { css } from "@emotion/core";

const Footer = () => (
    <footer>
        <p
            css={css`
                font-size: 0.75em;
                letter-spacing: 0.1em;
                width: 100vw;
                text-align: center;
                color: hsla(0, 0%, 10%, 1);
            `}
        >
            &#9400; 2020 | Designed by
            <a
                css={css`
                    color: hsla(0, 0%, 10%, 1);
                    margin-left: 0.5rem;

                    &:active {
                        color: hsla(0, 0%, 10%, 1);
                    }
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