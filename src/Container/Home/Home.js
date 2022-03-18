import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BsArrowRightShort } from 'react-icons/bs';
import {FaFacebookF} from "react-icons/fa"

const Home = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="mr-auto">
                            <Nav.Link className="home_Nav" href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* -------------------------------image gallery section--------------------------- */}
            <div>

                <button className="load_more">LOAD MORE <BsArrowRightShort /> </button>

            </div>

            {/* ----------------------------------footer icon------------------------------------- */}
            
            <div className="footer_icon">
                <p>FOLLOW US</p>

                 <FaFacebookF />
            </div>
        </div>
    )
}

export default Home;