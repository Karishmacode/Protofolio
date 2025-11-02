import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../styles/Projects.css";

const PROJECT_IMAGES = {
  "Gemini Cryptocurrency Exchange Clone": "/images/gemini.png",
  "Social Media Post Application": "/images/social.png",
  "Raj Studio11 Family Salon Website": "/images/salon.png",
};

const projectsData = [
  {
    title: "Gemini Cryptocurrency Exchange Clone",
    techStack: "React.js, API Integration",
    summary:
      "A professional exchange clone showcasing data visualization and real-time API integration.",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Social Media Post Application",
    techStack: "React, Bootstrap, APIs, CRUD",
    summary:
      "Full-stack CRUD app for social posting, with a dynamic feed and responsive design.",
    githubLink: "#",
    liveLink: "#",
  },
  {
    title: "Raj Studio11 Family Salon Website",
    techStack: "HTML, CSS, JavaScript, Bootstrap",
    summary:
      "A sleek, modern, and fully responsive salon website with engaging animations.",
    githubLink: "#",
    liveLink: "#",
    //  image: process.env.PUBLIC_URL + "/rajstudio.png",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section py-5">
      <Container>
         <Row className="text-center mb-5">
                 <Col>
                   <h2 className="about-title">My Projects </h2>
                   <div className="underline mx-auto"></div>
                 </Col>
               </Row>
        {/* <p className="text-center text-white-50 mb-5">
          A showcase of my featured work — built with modern web technologies.
        </p> */}

        <Row className="g-4">
          {projectsData.map((project, index) => (
            <Col key={index} lg={4} md={6}>
              <div className="project-card">
                <div className="project-img">
                  <img
                    src={
                      PROJECT_IMAGES[project.title] ||
                      "https://via.placeholder.com/400x250?text=Project"
                    }
                    alt={project.title}
                  />
                  <div className="project-overlay">
                    <h5>{project.title}</h5>
                    <p>{project.summary}</p>
                    <div className="tech-stack">
                      {project.techStack.split(",").map((tech, i) => (
                        <span key={i}>{tech.trim()}</span>
                      ))}
                    </div>
                    <div className="project-buttons">
                      {project.liveLink && project.liveLink !== "#" && (
                        <Button
                          href={project.liveLink}
                          target="_blank"
                          variant="success"
                          className="btn-glow"
                        >
                          Live Demo
                        </Button>
                      )}
                      {project.githubLink && project.githubLink !== "#" && (
                        <Button
                          href={project.githubLink}
                          target="_blank"
                          variant="outline-light"
                          className="btn-glow"
                        >
                          GitHub
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              
            </Col>
            
          ))}
          
        </Row>
        <Row className="justify-content-center mt-4">
  <Col md="auto" className="text-center">
    <Button
      variant="success"
      className="download-btn mt-3"
      href="#"
      style={{ color: "black" }}
    >
     View All Projects
    </Button>
  </Col>
</Row>

      
      </Container>
    </section>
  );
};

export default ProjectsSection;
