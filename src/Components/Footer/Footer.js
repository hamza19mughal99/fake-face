import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import sImg1 from "../../assets/simg1.png";
import sImg2 from "../../assets/simg2.png";
import sImg3 from "../../assets/simg3.png";
import sImg4 from "../../assets/simg4.png";
import sImg5 from "../../assets/simg5.png";
import sImg6 from "../../assets/simg6.png";
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP} from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";

const Footer = () => {
    return (
        <div className={'random_face'}>
            <Container style={{marginTop: '60px'}}>
                <h4 style={{color: '#fff', fontWeight: '700'}} className={'text-center pb-3'}>GENERATOR OF FAKE FACES OF NON-EXISTENT HUMANS</h4>
                <Row className={'bottom_img'}>
                    <Col md={2}>
                        <img src={sImg1} alt={'img1'} />
                    </Col>
                    <Col md={2}>
                        <img src={sImg2} alt={'img1'} />
                    </Col>
                    <Col md={2}>
                        <img src={sImg3} alt={'img1'} />
                    </Col>
                    <Col md={2}>
                        <img src={sImg4} alt={'img1'} />
                    </Col>
                    <Col md={2}>
                        <img src={sImg5} alt={'img1'} />
                    </Col>
                    <Col md={2}>
                        <img src={sImg6} alt={'img1'} />
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
