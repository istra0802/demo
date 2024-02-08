import React from 'react'
import logo from '../../images/logo.webp'
import './Header.scss';
import { Container, NavDropdown, Button } from 'react-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'


export default function Header() {
    return (
        <div>
            <Navbar expand="lg" bg='dark' variant="dark">
                <Container fluid>
                    <Navbar.Brand className="logo ps-5" href='/'><img src={logo} alt=' ' style={{ width: '80px', height: 'auto' }} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" ></Navbar.Toggle>
                    <Navbar.Collapse >
                        <Nav className="ms-auto text">
                            <Nav.Link className='face-text' href="/">Face Swap</Nav.Link>
                            <Nav.Link href="/">Link</Nav.Link>
                            <NavDropdown title="AI Tools" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/">Pricing</Nav.Link>
                            <Nav.Link href="/">Join the Discord</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                            <Nav.Link href="/">Credits</Nav.Link>
                            <Button variant="outline-secondary">Search</Button>
                </Container>
            </Navbar>
        </div>
    )
}
