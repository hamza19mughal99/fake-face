import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsArrowRightShort } from 'react-icons/bs';
import Banner from "../../assets/banner.jpg";
import Footer from "../../Components/Footer/Footer";
import RandomFace from "../../Components/RandomFace/RandomFace";
import ReactFullPage from "@fullpage/react-fullpage";
import Header from "../../Components/Header/Header";
import "../../App.css";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img1.jpg";
import img3 from "../../assets/img1.jpg";
import img4 from "../../assets/img1.jpg";
import img5 from "../../assets/img2.jpg";
import img6 from "../../assets/img2.jpg";
import img7 from "../../assets/img2.jpg";
import img8 from "../../assets/img2.jpg";
import img9 from "../../assets/img2.jpg";
import img10 from "../../assets/img2.jpg";

const Home = () => {
    return (
            <ReactFullPage
                scrollOverflow={true}
                scrollingSpeed = {1000}
                render={() => {
                    return (
                        <div id="fullpage-wrapper">
                            <div className="section section1">
                                {/*<Header />*/}
                                <div className={'banner_img'}>
                                    <img src={Banner} alt={'banner'} />
                                </div>
                            </div>
                            <div className="section">
                                <div className={'img_gallery'}>
                                    <Container className={'container_class'}>
                                        <h1>PHOTO GALLERY</h1>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                            unknown printer
                                            took a galley of type and scrambled it to make a type specimen book. It has survived not
                                            only five centuries,
                                            but also the leap into electronic typesetting, remaining essentially unchanged.
                                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                            passages, and more recently with
                                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <hr />
                                    </Container>
                                </div >
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
                                            <img src={img3} alt={'img1'} />
                                        </Col>
                                        <Col md={2}>
                                            <img src={img2} alt={'img1'} />
                                        </Col>

                                    </Row>
                                </Container>
                            </div>
                            <div className="section section2">
                                <Container>
                                    <Row className={'all_img'}>
                                        <Col md={2}>
                                            <img src={img6} alt={'img1'} />
                                        </Col>
                                        <Col md={2}>
                                            <img src={img7} alt={'img1'} />
                                        </Col>
                                        <Col md={2}>
                                            <img src={img8} alt={'img1'} />
                                        </Col>
                                        <Col md={2}>
                                            <img src={img9} alt={'img1'} />
                                        </Col>
                                        <Col md={2}>
                                            <img src={img10} alt={'img1'} />
                                        </Col>
                                        <Col md={2}>
                                            <img src={img10} alt={'img1'} />
                                        </Col>

                                    </Row>
                                </Container>

                                <div className={'d-flex justify-content-center pt-5 pb-5'}>
                                    <button className="load_more">LOAD MORE <BsArrowRightShort /></button>
                                </div>
                            </div>
                            <div className="section random_face">
                                <RandomFace />
                            </div>
                            <div className='section footer_face'>
                                <Footer />
                            </div>
                        </div>
                    );
                }}
            />
    )
}
export default Home;