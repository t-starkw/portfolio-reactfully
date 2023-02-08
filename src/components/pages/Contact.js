import React, { useState } from 'react';

function Contact() {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Contact Me!</h1>
            <div className="mb-3 pt-0">
                <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    required
                />
            </div>
            <div className="mb-3 pt-0">
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    required
                />
            </div>
            <div className="mb-3 pt-0">
                <textarea
                    placeholder="Your message"
                    name="message"
                    required
                />
            </div>
            <div className="mb-3 pt-0">
                <button type="submit">
                    Send a message
                </button>
            </div>
        </form>
    );
}

export default Contact;

