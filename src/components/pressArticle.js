import React from "react";
import { css } from "@emotion/core";

const PressArticle = props => {
    return (
        <div
            css={css`
                display: flex;
                flex-flow: column wrap;
                justify-content: center;
                align-self: stretch;
                box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.12),
                    0 1px 2px hsla(0, 0%, 0%, 0.24);
                border-radius: 0.5rem;
                padding: 1rem;
                margin-top: 1rem;

                &:first-of-type {
                    margin-top: 0.5rem;
                }
            `}
        >
            <h4
                css={css`
                    margin-bottom: 0.5rem;
                `}
            >
                {props.header}
            </h4>
            <a
                css={css`
                    color: hsla(0, 0%, 10%, 1);
                    hyphens: auto;
                    font-size: 1rem;
                `}
                target="_blank"
                rel="noopener noreferrer"
                href={props.url}
            >
                {props.description}
            </a>
        </div>
    );
};

export default PressArticle;
