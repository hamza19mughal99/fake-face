import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Owner1 from "../../assets/owner1.png";
import Owner2 from "../../assets/owner2.png";
import Owner3 from "../../assets/owner3.png";
import Owner4 from "../../assets/owner4.png";

import {FiPhoneCall} from "react-icons/fi";
import {FaFacebookF, FaLinkedinIn} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
import {BsArrowRightShort} from "react-icons/bs";

const Contact = () => {
    return (
        <div className={'contact_main'}>
            <div className={'container who_we'}>
                <h1>WHO WE ARE</h1>
                <p>People tend not to think about the effect that neural networks have on our lives,
                    because usually, we see the result of its work and not the "face" of a neural network.
                    Perhaps that is why the generator of fake photos became the main topic of discussion for several
                    weeks in the media devoted to technology at the end of 2020. Not everyone was able to guess that AI
                    could generate a realistic face of a non-existent person in a couple of seconds. Fake portraits look very realistic and it's frightening.
                    If AI can create faces for itself and can text like real people, then what is going to happen next?</p>
            </div>
            <div style={{paddingTop: '100px'}}>
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
                    <div className={'d-flex justify-content-center pt-5 pb-5'}>
                        <button className="request_more">Request a Demo <BsArrowRightShort/></button>
                    </div>
    </Container>
            </div>



        </div>
    );
};

export default Contact;
