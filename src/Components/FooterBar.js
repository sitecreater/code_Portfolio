import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import styled from 'styled-components' //style components를 선언
import { Link } from "react-scroll";
import '../CSS/Bar.css';

let Fix = styled.div `
    position:sticky;
    bottom: 0;
    width: 100%; 
    opacity: 0;

  &:hover {
    opacity: 1;
    transition-duration: 1.5s;
    cursor: pointer;
  }
`; //Fix div 선언

const Dis = styled.div `
&:hover ~ ${Fix} {
    opacity: 1;
  }
`; //Dis div 선언

function FooterBar() {

    return (
        <div className="FooterBar">
            <Fix>
                <Dis>
                    <Navbar bg="" variant='light' id="footerBg">
                        <Container>
                            <Navbar.Collapse
                                id="basic-navbar-nav"
                                className='d-flex justify-content-between'>
                                <Nav.Link as={Link} to="profile" spy={true} smooth={true}>
                                    <i className="fa-solid fa-address-card"></i>
                                </Nav.Link>
                                <Nav.Link as={Link} to="work" spy={true} smooth={true}>
                                    <i className="fa-solid fa-rectangle-list"></i>
                                </Nav.Link>
                                <Nav.Link href="/">
                                    <i
                                        className="fa-solid fa-house"
                                        style={{
                                            color: 'black'
                                        }}></i>
                                </Nav.Link>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Dis>
            </Fix>
        </div>
    )
}

export default FooterBar;