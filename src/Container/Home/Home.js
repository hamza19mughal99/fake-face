import React from "react";
import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { BsArrowRightShort } from 'react-icons/bs';
import {AiOutlineTwitter} from "react-icons/ai";
import {FaLinkedinIn, FaInstagram, FaFacebookF, FaPinterestP} from "react-icons/fa";
import Banner from "../../assets/banner.png";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import simg1 from "../../assets/simg1.png";
import simg2 from "../../assets/simg2.png";
import simg3 from "../../assets/simg3.png";
import simg4 from "../../assets/simg4.png";
import simg5 from "../../assets/simg5.png";
import simg6 from "../../assets/simg6.png";
import col_img from "../../assets/col_img.png";

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="mr-auto">
                                <Nav.Link className="home_Nav" href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Contact us</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/*---------------------------------banner-------------------------------*/}
                <div>
                    <img src={Banner} alt={'banner'}/>
                </div>


                {/* -------------------------------image gallery section--------------------------- */}
                <div className={'img_gallery'}>
                    <div className={'container'}>
                        <h2>PHOTO GALLERY</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not
                            only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <hr/>
                    </div>
                    <Container>
                        <Row>
                            <Col md={2}>
                                 <img src={img1} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={img2} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={img3} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={img4} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={img5} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={img1} alt={'img1'} />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={2}>
                                <img src={img2} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={img4} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={img3} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={img5} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={img3} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={img2} alt={'img1'} />
                            </Col>

                        </Row>

                    </Container>
                    <div className={'d-flex justify-content-center pt-5 pb-5'}>
                        <button className="load_more">LOAD MORE <BsArrowRightShort/></button>
                    </div>
                </div>
                <div className={'random_face'}>
                    <Container fluid>
                        <Row>
                            <Col md={6} className={'random_face_text'}>
                                <h3>RANDOM FACE GENERATOR</h3>
                                <p>People tend not to think about the effect that neural networks have on our lives,
                                    because usually, we see the result of its work and not the "face" of a neural network.
                                    Perhaps that is why the generator of fake photos became the main topic of discussion
                                    for several weeks in the media devoted to
                                    technology at the end of 2020. Not everyone was able to guess that AI could </p>
                                <p>
                                    People tend not to think about the effect that neural networks have on our lives, because usually,
                                    we see the result of its work and not the "face" of a neural network.
                                    generator of fake photos became the main topic of discussion for several weeks in the media
                                    devoted to technology at the end of 2020. Not everyone was able to guess that AI could generate
                                    a realistic face of a non-existent person in a couple of seconds.
                                    Fake portraits look very realistic and it's frightening. If AI can create faces for
                                    itself and can text like real people, then what is going to happen next?
                                </p>

                                <div className={'does_exist'}>
                                    <h2>THIS PERSON DOES NOT EXIST</h2>
                                </div>
                            </Col>
                            <Col md={6}>
                                <img style={{width: '500px', margin: '40px 0'}} src={col_img} alt={'col-img'}/>
                            </Col>
                        </Row>

                    </Container>

                    <div className={'container'}>
                        <hr />
                    </div>
                    <Container>
                        <h4 style={{color: '#fff', fontWeight: '700'}} className={'text-center pb-3'}>GENERATOR OF FAKE FACES OF NON-EXISTENT HUMANS</h4>
                        <Row>
                            <Col md={2}>
                                <img src={simg1} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={simg2} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={simg3} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={simg4} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={simg5} alt={'img1'} />
                            </Col>
                            <Col md={2}>
                                <img src={simg6} alt={'img1'} />
                            </Col>
                        </Row>
                    </Container>
                    <div className="footer_icon">
                        <p>FOLLOW US</p>

                        <div>
                            <FaFacebookF/>
                            <AiOutlineTwitter />
                            <FaLinkedinIn />
                            <FaInstagram />
                            <FaPinterestP />
                        </div>

                    </div>
                    <hr />

                    <p className={'copy_rights'}>Copyright © 2021</p>
                </div>

                {/* ----------------------------------footer icon------------------------------------- */}


            </div>
        )
    }
}

export default Home;