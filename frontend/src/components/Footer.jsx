import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer-section  text-light pt-5 pb-3">
      
      <Container>
        <Row className="text-center text-md-start">
          {/* About */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-title">About Me</h5>
            <p className="footer-text">
              I’m Karishma Kumari — a Full Stack Developer passionate about
              creating modern, responsive, and efficient web applications using
              the MERN stack.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          {/* Services */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-title">Services</h5>
            <ul className="list-unstyled footer-links">
              <li>Web Development</li>
              <li>Frontend Design</li>
              <li>API Integration</li>
              <li>Database Management</li>
            </ul>
          </Col>

          {/* Get In Touch */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="footer-title">Get In Touch</h5>
            <ul className="list-inline footer-social">
              <li className="list-inline-item">
                <a href="mailto:karishma@example.com" aria-label="Email">
                  <FaEnvelope />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="text-center">
          <Col>
            <p className="mb-0 small">
              © 2025 <strong>Karishma Kumari</strong> | Built with ❤️ using{" "}
              <span className="text-success fw-bold">React</span> &{" "}
              <span className="text-success fw-bold">Node.js</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
