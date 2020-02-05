import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Social = () => {
    
    const SocialLink = styled.a`
        margin: auto .75rem;
        & > svg {
            height: 1.5rem;

            @media screen and (min-width: 576px) {
                height: 1.75rem;
            }

            @media screen and (min-width: 1200px) {
                height: 2rem;
            }
        }
        @media screen and (min-width: 576px) {
            margin: auto .875rem;
        }

        @media screen and (min-width: 1200px) {
            margin: auto 1em;
        }
    `;

    return (
        <section
            css={css`
                display: flex;
                justify-content: center;
                align-items: flex-end;
                margin-bottom: 1rem;
                @media screen and (min-width: 576px) {
                    margin-bottom: 1.25rem;
                }

                @media screen and (min-width: 768px) {
                    margin-bottom: 1.5rem;
                }

                @media screen and (min-width: 992px) {
                    margin-bottom: 1.75rem;
                }

                @media screen and (min-width: 1200px) {
                    margin-bottom: 2rem;
                }
            `}
        >
            <SocialLink
                href="https://www.facebook.com/chandrimastudio/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    css={css`
                        transition: all 0.2s ease-out;
                        color: hsla(0, 0%, 10%, 1);

                        &:hover {
                            color: hsl(219, 50%, 41%);
                        }
                    `}
                    fill="hsla(0, 0%, 10%, 1)"
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                >
                    <path
                        fill="currentColor"
                        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    />
                </svg>
            </SocialLink>

            <SocialLink
                href="https://www.instagram.com/chandrimaofficial/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg
                    css={css`
                        transition: all 0.2s ease-out;
                        color: hsla(0, 0%, 10%, 1);

                        &:hover {
                            fill: url(#rg);
                        }
                    `}
                    fill="hsla(0, 0%, 10%, 1)"
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <radialGradient id="rg" r="150%" cx="30%" cy="107%">
                        <stop stopColor="#fdf497" offset="0" />
                        <stop stopColor="#fdf497" offset="0.05" />
                        <stop stopColor="#fd5949" offset="0.45" />
                        <stop stopColor="#d6249f" offset="0.6" />
                        <stop stopColor="#285AEB" offset="0.9" />
                    </radialGradient>
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
            </SocialLink>
            <SocialLink href="mailto:design.chandrima@gmail.com">
                <svg
                    css={css`
                        transition: all 0.2s ease-out;
                        color: hsla(0, 0%, 10%, 1);

                        &:hover {
                            fill: hsl(212, 78%, 54%);
                        }
                    `}
                    fill="hsla(0, 0%, 10%, 1)"
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                >
                    <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z" />
                </svg>
            </SocialLink>
        </section>
    );
}

export default Social;
