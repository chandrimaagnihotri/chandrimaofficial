import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Group = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: baseline;
    margin-bottom: 1rem;

`;
const Header = styled.h3`
    margin-right: 1rem;
    font-size: 1rem;
`;
const Text = styled.a`
    font-size: 1rem;
    color: hsla(0, 0%, 10%, 1);

    @media screen and (min-width: 768px) {
        width: calc(80% + 1rem);
    }
`;

const ContactInfo = () => (
    <section
        css={css`
            margin: auto 1rem;
        `}
    >
        <Group>
            <Header>Address:</Header>
            <Text
                href="https://www.google.com/maps/place/Chandrima+Design+Studio/@28.5958054,77.3193058,15z/data=!4m5!3m4!1s0x0:0xcbbfb35c37ed6a72!8m2!3d28.5958054!4d77.3193058"
                target="_blank"
                rel="noopener noreferrer"
            >
                C-24, C Block, Sector 6, Noida, Uttar Pradesh 110096, India
            </Text>
        </Group>
        <Group>
            <Header>Phone:</Header>
            <Text href="tel:+91 123456789">+91 123456789</Text>
        </Group>
    </section>
);

export default ContactInfo;
