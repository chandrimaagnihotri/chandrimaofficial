import React from "react";
import { css } from "@emotion/core";

// 

const Look = ({ photo, description, price }) => {
    return (
        <div
            css={css`
                margin: 0.5rem 1rem;
                box-shadow: 0 3px 9px hsla(0, 0%, 0%, 0.5);
                padding: 1rem;
                @media screen and (min-width: 786px) {
                    width: calc(16% - 1rem);
                    margin: 1rem;
                }
            `}
        >
            <img
                css={css`
                    width: 100%;
                    @media screen and (min-width: 786px) {
                    }
                `}
                src={photo}
                alt={description}
            />
            <div
                css={css`
                    margin-top: 0.25rem;
                    display: flex;
                    flex-flow: column;
                `}
            >
                <h4
                    css={css`
                        font-size: 0.8rem;
                        font-weight: 500;
                        ${"" /* flex-basis: 80%; */}
                    `}
                >
                    {description}
                </h4>
                <p
                    css={css`
                        font-size: 0.75rem;
                        color: hsla(0, 0%, 40%, 1);
                    `}
                >
                    ₹ {price}
                </p>
            </div>
        </div>
    );
};

export default Look;