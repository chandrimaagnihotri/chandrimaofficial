import React from "react";

const encode = data => {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
};

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state }),
        })
            .then(() =>
                alert(
                    "Thank you for your inquiry. We will get back to you as soon as possible."
                )
            )
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={message}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="hidden" name="form-name" value="contact" />
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default ContactForm;
