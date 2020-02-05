import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

const NavLink = styled(Link)`
    text-decoration: none;
    color: hsla(0, 0%, 40%, 1);
    width: fit-content;
    -moz-width: -moz-fit-content;
    text-align: center;
    margin: auto 0.25rem;
    border-bottom: 0.1rem solid hsla(0, 0%, 40%, 0);
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 0.75rem;

    &:last-of-type {
        margin-right: 0;
    }

    &:hover {
        border-bottom: 0.1rem solid hsla(0, 0%, 40%, 1);
    }

    &.active {
        color: hsla(0, 0%, 10%, 1);
        border-bottom: 0.1rem solid hsla(0, 0%, 10%, 1);
        font-weight: 500;
    }

    @media screen and (min-width: 576px) {
        margin: auto 0.5rem;
        font-size: 1rem;
    }

    @media screen and (min-width: 768px) {
        margin: auto 0.75rem;
    }

    @media screen and (min-width: 992px) {
        margin: auto 0.75rem;
    }

    @media screen and (min-width: 1200px) {
        margin: auto 1rem;
    }
`;

const Header = () => (
    <header
        css={css`
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: baseline;
            padding: 1rem;
            width: 100vw;
            border-top: solid 0.75em hsla(0, 0%, 10%, 1);

            @media screen and (min-width: 576px) {
                padding: 1.25rem;
            }

            @media screen and (min-width: 768px) {
                padding: 1.5rem;
            }

            @media screen and (min-width: 992px) {
                padding: 1.75rem;
            }

            @media screen and (min-width: 1200px) {
                padding: 2rem;
            }
        `}
    >
        <Link
            css={css`
                font-family: "Bodoni72SmallcapsBook";
                color: hsla(0, 0%, 10%, 1);
                font-size: 1.5rem;
                letter-spacing: 0.3rem;
                text-decoration: none;

                @media screen and (min-width: 576px) {
                    font-size: 2rem;
                }

                @media screen and (min-width: 768px) {
                    font-size: 2rem;
                }

                @media screen and (min-width: 992px) {
                    font-size: 2rem;
                }

                @media screen and (min-width: 1200px) {
                    font-size: 2rem;
                }
            `}
            to="/"
        >
            Chandrima
        </Link>
        <nav>
            <NavLink activeClassName="active" to="/story">
                Story
            </NavLink>
            <NavLink activeClassName="active" to="/press">
                Press
            </NavLink>
            <NavLink activeClassName="active" to="/contact">
                Contact
            </NavLink>
        </nav>
    </header>
);

export default Header;
