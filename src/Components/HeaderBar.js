import '../CSS/Header.css';
import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom'

function HeaderBar() {
    return (
        <div className="HeaderBar">

            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"/>{' '}
                        Just try your hardest
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        <Nav.Link as={Link} to="/work">Work</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default HeaderBar;