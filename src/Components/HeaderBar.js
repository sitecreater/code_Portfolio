import React from 'react';
import '../CSS/HeaderBar.css';
import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

function HeaderBar() {

    return (
        <div className="HeaderBar">
            <div id="HeaderBarFont">
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
                        <div id="HeaderBarSubText">
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                                <Nav.Link as={Link} to="/work">Work</Nav.Link>
                                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            </Nav>
                            </Navbar.Collapse>
                            </div>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default HeaderBar;