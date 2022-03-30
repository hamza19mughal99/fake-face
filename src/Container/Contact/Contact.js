import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Owner1 from "../../assets/owner1.png";
import Owner2 from "../../assets/owner2.png";
import Owner3 from "../../assets/owner3.png";
import Owner4 from "../../assets/owner4.png";
import ReactFullPage from "@fullpage/react-fullpage";
import Header from "../../Components/Header/Header";
import {FiPhoneCall} from "react-icons/fi";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
import {BsArrowRightShort} from "react-icons/bs";
import RandomFace from "../../Components/RandomFace/RandomFace";
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
    return (
        <ReactFullPage
            scrollOverflow={true}
            scrollingSpeed = {1000}
            render={() => {
                return (
                    <div id="fullpage-wrapper">
                        <div className="section section1 contact_main">
                            <div className={'container who_we'}>
                                <Container>
                                    <h1 style={{fontSize: '3.5rem'}}>WHO WE ARE</h1>
                                    <h5>People tend not to think about the effect that neural networks have on our lives,
                                        because usually, we see the result of its work and not the "face" of a neural network.
                                        Perhaps that is why the generator of fake photos became the main topic of discussion for several
                                        weeks in the media devoted to technology at the end of 2020. Not everyone was able to guess that AI
                                        could generate a realistic face of a non-existent person in a couple of seconds. Fake portraits look very realistic and it's frightening.
                                        If AI can create faces for itself and can text like real people, then what is going to happen next?</h5>
                                </Container>
                            </div>
                        </div>
                        <div className='section contact_main'>
                            <Container>
                                <Row className={'justify-content-center'}>
                                    <Col md={5} className={'second_col'}>
                                        <div className={'contact_owners'}>
                                            <div className={'img_div'}>
                                                <img src={Owner1} alt={'owner'} />
                                            </div>
                                            <h5>TOM WEST</h5>
                                            <h5 className={'role'}>Advisor</h5>
                                            <p><FiPhoneCall /> +19 65874 245</p>
                                            <hr className={'divider'} />
                                            <div className={'owner_social'}>
                                                <FaFacebookF/>
                                                <AiOutlineTwitter />
                                                <FaLinkedinIn />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={5} className={'second_col'}>
                                            <div className={'contact_owners'}>
                                                <div className={'img_div'}>
                                                    <img src={Owner2} alt={'owner'} />
                                                </div>
                                                <h5>JOHN SMITH</h5>
                                                <h5 className={'role'}>Advisor</h5>
                                                <p><FiPhoneCall /> +19 65874 245</p>
                                                <hr className={'divider'} />

                                                <div className={'owner_social'}>
                                                    <FaFacebookF/>
                                                    <AiOutlineTwitter />
                                                    <FaLinkedinIn />
                                                </div>
                                            </div>
                                        </Col>
                                </Row>
                            </Container>
                        </div>
                        <div className='section contact_main'>
                            <Container>
                                <Row className={'justify-content-center'}>
                                    <Col md={5} className={'second_col'}>
                                        <div className={'contact_owners'}>
                                            <div className={'img_div'}>
                                                <img src={Owner3} alt={'owner'} />
                                            </div>
                                            <h5>JOHN DEANY</h5>
                                            <h5 className={'role'}>Advisor</h5>
                                            <p><FiPhoneCall /> +19 65874 245</p>
                                            <hr className={'divider'} />
                                            <div className={'owner_social'}>
                                                <FaFacebookF/>
                                                <AiOutlineTwitter />
                                                <FaLinkedinIn />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={5} className={'second_col'}>
                                            <div className={'contact_owners'}>
                                                <div className={'img_div'}>
                                                    <img src={Owner4} alt={'owner'} />
                                                </div>
                                                <h5>ADERSON DEM</h5>
                                                <h5 className={'role'}>Advisor</h5>
                                                <p><FiPhoneCall /> +19 65874 245</p>
                                                <hr className={'divider'} />

                                                <div className={'owner_social'}>
                                                    <FaFacebookF/>
                                                    <AiOutlineTwitter />
                                                    <FaLinkedinIn />
                                                </div>
                                            </div>
                                        </Col>
                                </Row>
                                <div className={'d-flex justify-content-center pb-5'}>
                                    <button className="request_more">Request a Demo <BsArrowRightShort/></button>
                                </div>
                            </Container>
                        </div>
                        <div className="section random_face">
                            <RandomFace />
                        </div>
                        <div className='section footer_face'>
                            <Footer />
                        </div>
                    </div>
                    )
                }}
            />
    );
};

export default Contact;
