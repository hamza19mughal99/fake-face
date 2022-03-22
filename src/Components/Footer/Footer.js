import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import col_img from "../../assets/col_img.png";
import simg1 from "../../assets/simg1.png";
import simg2 from "../../assets/simg2.png";
import simg3 from "../../assets/simg3.png";
import simg4 from "../../assets/simg4.png";
import simg5 from "../../assets/simg5.png";
import simg6 from "../../assets/simg6.png";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";

const Footer = () => {
    return (
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
                <Row className={'bottom_img'}>
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
    );
};

export default Footer;
