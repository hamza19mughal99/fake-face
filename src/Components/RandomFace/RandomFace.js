import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import col_img from "../../assets/col_img.png";

const RandomFace = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={7} className={'random_face_text'}>
                    <h3>RANDOM FACE GENERATOR</h3>
                    <Container>
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
                    </Container>

                    <div className={'does_exist'}>
                        <h2>THIS PERSON DOES NOT EXIST</h2>
                    </div>
                </Col>
                <Col md={5}>
                    <img style={{width: '500px', margin: '40px 0'}} src={col_img} alt={'col-img'}/>
                </Col>
            </Row>

        </Container>
    );
};

export default RandomFace;
