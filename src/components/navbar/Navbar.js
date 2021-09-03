import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand ">
          AlexAbbamondi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" navbar-right justify-content-end" style={{ width: "100%" }}>
            <LinkContainer exact={true} to="/react-portfolio">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer exact={true} to="/portfolio">
              <Nav.Link>Portfolio</Nav.Link>
            </LinkContainer>
            <LinkContainer exact={true} to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer exact={true} to="/resume">
              <Nav.Link>Resume</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
