import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";

const NavLink = styled(Link)`
    text-decoration: none;
    color: #010203;
    width: fit-content;
    -moz-width: -moz-fit-content;
    text-align: center;
    margin: auto 0.25rem;
    border-bottom: 0.1rem solid rgba(1, 2, 3, 0);
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    text-transform: uppercase;

    &:last-of-type {
        margin-right: 0;
    }

    &:hover {
        border-bottom: 0.1em solid rgba(1, 2, 3, 1);
    }

    &.active {
        border-bottom: 0.1em solid rgba(1, 2, 3, 1);
    }

    @media (min-width: 576px) {
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
            padding: 1.25rem;
            width: 100vw;
            border-top: solid 0.75em hsl(300, 50%, 0.5%);

            @media (min-width: 576px) {
                padding: 2rem;
            }
        `}
    >
        <Link
            css={css`
                font-family: "Bodoni72SmallcapsBook";
                color: #010203;
                font-size: 1.5rem;
                letter-spacing: 0.2rem;
                text-decoration: none;

                @media (min-width: 576px) {
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
