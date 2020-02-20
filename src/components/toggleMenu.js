import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import { Link } from "gatsby"
// import "./toggleMenu.css"

const NavLink = styled(Link)`
    text-decoration: none;
    color: hsla(0, 0%, 10%, 1);
    width: fit-content;
    -moz-width: -moz-fit-content;
    text-align: center;
    margin-top: 1rem;
    border-bottom: 0.1rem solid hsla(0, 0%, 10%, 0);
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 1rem;

    &:last-of-type {
        margin-right: 0;
    }

    &:hover {
        border-bottom: 0.1rem solid hsla(0, 0%, 10%, 1);
    }

    &.active {
        color: hsla(0, 0%, 10%, 1);
        border-bottom: 0.1rem solid hsla(0, 0%, 10%, 1);
        font-weight: 500;
    }
`

const ToggleMenu = ({ show }) => {


    return (
        <div
            css={css`
                position: absolute;
                min-height: 100vh;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                transform: ${show ? `translateY(0)` : `translateY(-100%)`};
                transition: transform 0.3s ease-out;
                z-index: 1;
                background-color: hsla(0, 0%, 100%, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;

                @media screen and (min-width: 768px) {
                    display: none;
                }
            `}
        >
            <nav
                css={css`
                    display: flex;
                    flex-flow: column;
                    justify-content: center;
                    align-items: center;
                `}
            >
                <NavLink activeClassName="active" to="/collection/">
                    Collection
                </NavLink>
                <NavLink activeClassName="active" to="/story/">
                    Story
                </NavLink>
                <NavLink activeClassName="active" to="/press/">
                    Press
                </NavLink>
                <NavLink activeClassName="active" to="/contact/">
                    Contact
                </NavLink>
            </nav>
        </div>
    );
}

export default ToggleMenu
