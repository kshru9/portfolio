import { Avatar } from "@mui/material";
import React from "react";
import { NavLink } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Links = () => {

  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/"><Avatar>SK</Avatar></Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/" href="/" exact="true">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/experience" href="/experience">
            Experience
          </Nav.Link>
          <Nav.Link as={NavLink} to="/projects" href="/projects">
            Projects
          </Nav.Link>
          <Nav.Link as={NavLink} to="/contact" href="contact">
            Contact
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export { Links };
