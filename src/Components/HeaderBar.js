import React from "react";
import "../styles/Bar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

function HeaderBar() {
  return (
    <div className="HeaderBar" id="headerBar">
      <div id="HeaderBarFont">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/hosting_Portfolio/">Portfolio</Navbar.Brand>
            <div id="HeaderBarSubText">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/hosting_Portfolio/">Home</Nav.Link>
                  <Nav.Link as={Link} to="profile" spy={true} smooth={true}>
                    Profile
                  </Nav.Link>
                  <Nav.Link as={Link} to="work" spy={true} smooth={true}>
                    Work
                  </Nav.Link>
                  <Nav.Link as={Link} to="contact" spy={true} smooth={true}>
                    Contact
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default HeaderBar;
