import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./navbar.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {};

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            Powercut<span className="title-x">x</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#map">Map</Nav.Link>
              <Nav.Link href="#submit">Submit</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
