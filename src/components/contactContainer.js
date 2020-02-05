import React from "react";
import ContactPhoto from "./contactPhoto";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";
import { css } from "@emotion/core";


const ContactContainer = () => (
    <>
        <div
            css={css`
                @media screen and (min-width: 768px) {
                    display: flex;
                    align-items: center;
                }
            `}
        >
            <ContactPhoto />
            <div
                css={css`
                    @media screen and (min-width: 768px) {
                        width: calc(80% + 1rem);
                    }
                `}
            >
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    </>
);

export default ContactContainer;