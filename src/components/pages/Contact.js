import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function Contact() {

    const [alert, showAlert] = useState(false);
    const handleClose = () => showAlert(false);
    const handleShow = () => showAlert(true);

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setSubmitted(true);
        handleShow()
    };

    if (submitted) {
        return (
            <>
                <Modal className='text-center' show={alert} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className='w-100'>Success!🚀</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Thanks for reaching out!</Modal.Body>
                    <Modal.Body>We will be in touch soon.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }

    return (
        <div>
            <form className='text-center' onSubmit={handleSubmit}>
                <h1 className='text-center mb-3'>Contact Me!</h1>
                <div className=" mb-3 pt-0">
                    <input
                        className='feedback-input'
                        type="text"
                        placeholder="Your name"
                        name="name"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <input
                        className='feedback-input'
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                    />
                </div>
                <div className="mb-3 pt-0">
                    <textarea
                        className='feedback-input'
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

        </div>

    );
}

export default Contact;

