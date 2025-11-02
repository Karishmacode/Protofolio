import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../styles/contact.css";
// 👇 CORRECTED: Import FaWhatsapp instead of FaTwitter
import { FaLinkedin, FaWhatsapp } from "react-icons/fa"; 

const ContactSection = () => {

    const whatsappLink = "YOUR_WHATSAPP_URL"; 

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
    };

    return (
        <section className="contact-section text-white py-5" id="contact">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h2 className="section-title">CONTACT ME</h2>
                        <p className="lead-text">
                            Have a question or want to work together? Fill the form below or
                            connect on social media.
                        </p>
                    </Col>
                </Row>

                <Row className="align-items-start">
                    <Col md={7} className="mb-4 mb-md-0">
                        <Form onSubmit={handleSubmit} className="contact-form">
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label className="visually-hidden">Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter your name"
                                            name="name"
                                            className="dark-input"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                {/* Email Input */}
                                <Col md={6}>
                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label className="visually-hidden">Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            name="email"
                                            className="dark-input"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Message Input */}
                            <Form.Group className="mb-4" controlId="formMessage">
                                <Form.Label className="visually-hidden">Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Message"
                                    name="message"
                                    className="dark-input"
                                    required
                                />
                            </Form.Group>

                            {/* Submit Button - Uses your signature teal color */}
                            <Button
                                type="submit"
                                className="send-message-btn"
                                style={{
                                    backgroundColor: "#20c997",
                                    borderColor: "#20c997",
                                    color: "black",
                                    fontWeight: "bold",
                                }}
                            >
                                SEND MESSAGE
                            </Button>
                        </Form>
                    </Col>

                    {/* Contact Details & Social Links - Takes 5/12 columns */}
                    <Col md={5} className="contact-details">
                        <h4 className="detail-heading">Email Me</h4>
                        <p className="detail-info">
                            <strong style={{ color: "#20c997" }}>karishma150298@email.com</strong>
                        </p>

                        <h4 className="detail-heading mt-4">Connect Socially</h4>

                        <div className="social-links mt-3">
                            <a
                                href="YOUR_LINKEDIN_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link me-3"
                            >
                                <FaLinkedin size={30} color="#20c997" />
                            </a>
                            <a
                                href={whatsappLink} // Use the defined link variable
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link me-3"
                            >
                                {/* 👇 CORRECTED: FaWhatsapp is now correctly imported and used */}
                                <FaWhatsapp size={30} color="#20c997" /> 
                            </a>
                        </div>

                        <p className="detail-info mt-4">
                            Let's build something amazing together!
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactSection;