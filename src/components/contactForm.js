import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
};

const Header = styled.h3`
    font-size: 1rem;
    margin-bottom: .5rem;
`;

const Label = styled.label`
    > input {
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        border: 1px solid #999999;
        margin: 0 0 1rem;
        box-shadow: inset 0px 1px 1px hsla(0, 0%, 0%, 0.1);
        width: 100%;

        @media screen and (min-width: 768px) {
            width: 40%;
            margin-right: 1rem;
        }
    }

    > textarea {
        resize: none;
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 0.25rem;
        border: 1px solid #999999;
        margin: 0 0 1rem;
        box-shadow: inset 0px 1px 1px hsla(0, 0%, 0%, 0.1);
        width: 100%;

        @media screen and (min-width: 768px) {
            width: calc(80% + 1rem);
        }
    }
`;

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", phone: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state }),
        })
            .then(() => {
                    
                    alert(
                        "Thank you for your inquiry. We will get back to you as soon as possible."
                    )
                }
            )
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, phone, message } = this.state;
        return (
            <form
                css={css`
                    margin: auto 1rem;
                `}
                onSubmit={this.handleSubmit}
            >
                <Header>Get in Touch!</Header>
                <Label>
                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={this.handleChange}
                        required
                    />
                </Label>
                <Label>
                    {/* Email */}
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                </Label>
                <Label>
                    {/* Email */}
                    <input
                        type="phone"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={phone}
                        onChange={this.handleChange}
                        required
                    />
                </Label>
                <Label>
                    {/* Message */}
                    <textarea
                        name="message"
                        value={message}
                        placeholder="Your Message"
                        onChange={this.handleChange}
                        rows="5"
                        required
                    />
                </Label>
                <input
                    css={css`
                        margin: 0;
                    `}
                    type="hidden"
                    name="form-name"
                    value="contact"
                />
                <button
                    type="submit"
                    css={css`
                        display: block;
                        font-size: 1rem;
                        background-color: hsla(0, 0%, 10%, 1);
                        box-shadow: 0 15px 35px hsla(0, 0%, 0%, 0.2);
                        border: 0px;
                        color: hsla(0, 0%, 95%, 1);
                        border-radius: 0.25rem;
                        padding: 0.5rem 0.75rem;
                        cursor: pointer;
                        margin: 0;
                    `}
                >
                    Send
                </button>
            </form>
        );
    }
}

export default ContactForm;
