import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightShort } from 'react-icons/bs';
import Banner from "../../assets/banner.jpg";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import "../../App.css";

const Home = () => {
        return (
            <>
                {/*---------------------------------banner-------------------------------*/}
                <div className={'banner_img'}>
                    <img src={Banner} alt={'banner'}/>
                </div>

                {/* -------------------------------image gallery section--------------------------- */}
                <div className={'img_gallery'}>
                    <Container>
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
                    </Container>
                    <Container>
                        <Row className={'all_img'}>
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
                                <img src={img2} alt={'img1'} />
                            </Col>
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
                {/* ----------------------------------footer icon------------------------------------- */}
            </>
        )
}

export default Home;