import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/navbar.css";

const NavigationBar = () => {
  return (
   <Navbar className="navbar-custom sticky-top" expand="lg" bg="dark" variant="dark">

      <Container>
        <Navbar.Brand href="#home">MyPortfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"className="active">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
