import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../styles/about.css";

const AboutCard = () => {
  return (
    <section className="about-section text-white" id="about">
      <Container>
        {/* Heading */}
        <Row className="text-center mb-5">
          <Col>
            <h2 className="about-title">About Me</h2>
            <div className="underline mx-auto"></div>
          </Col>
        </Row>

        {/* Main Content */}
        <Row className="align-items-start mb-5">
          {/* Profile Image */}
          <Col md={4} className="text-center mb-4 mb-md-0">
            <div className="profile-glow">
              <img 
                src="/profile.png" 
                alt="Karishma Kumar" 
                className="profile-img img-fluid rounded-circle"
              />
            </div>
          </Col>

          {/* About Text */}
          <Col md={4} className="text-start">
            <h3 className="name-title">Karishma Kumar</h3>
            <p className="job-title-highlight">Full Stack Developer</p>
            <p className="bio-summary">
              I’m Karishma Kumar — a <strong>Full Stack Developer</strong> passionate about creating 
              modern, responsive, and efficient web applications using the 
              <strong> MERN stack</strong>. I love turning complex ideas into 
              clean, intuitive, and engaging digital experiences.
            </p>

           <Button
  variant="success"
  className="download-btn mt-3"
  style={{ color: "black" }}
>
  Discover My Journey
</Button>

          </Col>

          {/* Skills */}
          <Col md={4} className="skills-column">
            <h4 className="section-heading">Skills & Expertise</h4>
            <ul className="skills-list mt-3">
              <li>React & Frontend Design</li>
              <li>REST API Integration</li>
              <li>MongoDB & Node.js</li>
              <li>Responsive UI/UX</li>
              <li>Version Control (Git)</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutCard;
