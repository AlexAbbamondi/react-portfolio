import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./Navbar.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light margin-zero">
    //   <div className="container-fluid custom-navbar">
    //     <a className="navbar-brand" href="/">
    //       AlexAbbamondi
    //     </a>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-right">
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/portfolio">
    //             Portfolio
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/contact">
    //             Contact
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/resume">
    //             Resume
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <Navbar className="custom-navbar" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand ">
          AlexAbbamondi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" navbar-right justify-content-end" style={{ width: "100%" }}>
            <LinkContainer exact={true} to="/">
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
