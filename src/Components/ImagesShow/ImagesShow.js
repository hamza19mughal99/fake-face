import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import img1 from "../../assets/img1.png";
import newImg from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

const ImgShow = () => {
    return (
        <ReactFullpage
            scrollOverflow={true}
            // sectionsColor={["orange", "purple", "green"]}
            render={({ state, fullpageApi }) => {
                return (
                    <div id="fullpage-wrapper">
                        <div className="section section1">
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

                                     </Row>
                        </div>
                        <div className="section">
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

                                </Row>
                        </div>
                    </div>
                );
            }}
        />
        // <ScrollableContainer animationTime={2000}>
        //     <PageComponent><Row className={'all_img'}>
        //         <Col md={2}>
        //             <img src={img1} alt={'img1'} />
        //         </Col>
        //         <Col md={2}>
        //             <img src={img2} alt={'img1'} />
        //         </Col>
        //         <Col md={2}>
        //             <img src={img3} alt={'img1'} />
        //         </Col>
        //         <Col md={2}>
        //             <img src={img4} alt={'img1'} />
        //         </Col>
        //         <Col md={2}>
        //             <img src={img5} alt={'img1'} />
        //         </Col>
        //         <Col md={2}>
        //             <img src={img2} alt={'img1'} />
        //         </Col>
        //
        //     </Row></PageComponent>
        //     <PageComponent><Row className={'all_img'}>
        //         <Col md={2}>
        //             <img src={img1} alt={'img1'} />
        //         </Col>
        //         <Col md={2}>
        //             <img src={img4} alt={'img1'} />
        //         </Col>
        //         <Col md={2}>
        //             <img src={img3} alt={'img1'} />
        //         </Col>
        //         <Col md={2}>
        //             <img src={img5} alt={'img1'} />
        //         </Col>
        //         <Col md={2}>
        //             <img src={img3} alt={'img1'} />
        //         </Col>
        //         <Col md={2}>
        //             <img src={img2} alt={'img1'} />
        //         </Col>
        //     </Row></PageComponent>
        // </ScrollableContainer>
        // <Container fluid>
        //
        //     <div className="image-wrapper">
        //         <div className="norm-block">
        //
        //         </div>
        //         <div className="norm-hidden">
        //
        //         </div>
        //     </div>
        // </Container>

    );
};
export default ImgShow;