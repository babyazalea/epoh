import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Navigation() {
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">EPOH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/portfolios">portfolios</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default Navigation;