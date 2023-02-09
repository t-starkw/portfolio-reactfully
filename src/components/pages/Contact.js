import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
        <Container>
            <Row className='d-flex justify-content-center'>
                <Col md='6' className='bg-default mt-5'>
                    <form className='text-center' onSubmit={handleSubmit}>
                        <h1>Contact Me!</h1>
                        <div className=" mb-3 pt-0">
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
                                rows='5'
                            />
                        </div>
                        <div className="mb-3 pt-0">
                            <button type="submit">
                                Send a message
                            </button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;

