import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Header = styled.h1`
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 1.25rem;
    font-weight: 700;
    color: hsla(0, 0%, 10%, 1);
    text-align: center;

    @media screen and (min-width: 992px) {
        font-size: 1.75rem;
    }
`;

const Para = styled.p`
    margin: 0.5rem 1rem;

    &:first-of-type {
        margin-top: 0rem;
    }

    &:last-of-type {
        margin-bottom: 0rem;
    }

    @media screen and (min-width: 992px) {
        width: 40em;
        text-align: center;
    }
`;

const CollectionNote = () => (
    <>
        <div
            css={css`
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                margin-bottom: 1rem;
            `}
        >
            <Header>Spring Summer 2020</Header>
            <div
                css={css`
                    margin-top: 0.5rem;
                `}
            >
                <Para>
                    The essence of the collection is Cross-Cultural folk.  The
                    collection in its entirety celebrates diversity in craft
                    forms by blending together techniques and fabrics prominent
                    in nomadic communities in India along with international
                    style.
                </Para>
                <Para>
                    Inspired by the distinctive style of embroidery done by the
                    Jat community of Kutch that is based on cross stitch, the
                    collection embodies cultural richness of India. The
                    techniques of this exquisite Indian embroidery and handloom
                    are combined with European lace hand cutwork in order to
                    create a global appeal.
                </Para>
                <Para>
                    The motive behind the collection is to sustain the folklore
                    of India and cultural diversity by incorporating our crafts
                    and bringing them to global platforms through fashion.
                </Para>
            </div>
        </div>
    </>
);

export default CollectionNote;