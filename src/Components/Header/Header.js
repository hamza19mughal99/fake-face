import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom"

const Header = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="mr-auto">
                        <NavLink className="home_Nav" to={'/'}>Home</NavLink>
                        <NavLink to="/contact"> Contact us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
