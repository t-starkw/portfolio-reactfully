import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'



function About() {
    return (
        // <div style={styles.container}>
        //     <div style={styles.left}>
        //         <img src="../../../image/me.jpg" alt="Me" width='500' />
        //     </div>
        //     <div style={styles.right}>
        //         <div>
        //             <h1>ABOUT ME</h1>
        //         </div>
        //         <div className='about-title'>
        //             Hi, my name is <strong>Tessa</strong>.
        //         </div>
        //         <div className='about-description'>
        //             I am a recent graduate from UNC Chapel
        //             Hill with a Bachelor of Science in Biology.
        //             I am currently employed as an air
        //             quality analyst, but my newly discovered passion for computer science
        //             has led me to UNC's Coding Bootcamp.
        //         </div>
        //         <div className='about-social'>
        //             <a href="https://github.com/t-starkw"><i><BsGithub /></i></a>
        //             <a href="https://www.linkedin.com/in/tessa-starkweather-b61941200/"><i><BsLinkedin /></i></a>
        //             <a href="https://www.instagram.com/tessa.starkweather/"><i><BsInstagram /></i></a>
        //         </div>
        //     </div>
        <div>
            <h1 className='m-4 text-center'>ABOUT ME</h1>
            <Carousel>
                <Carousel.Item interval={4000}>
                    <Container>
                        <Row>
                            <Col>
                                <img
                                    width="100%"
                                    height="100%"

                                    src="../../../image/meb&w.jpg"
                                    alt="Me"
                                />
                            </Col>
                            <Col>
                                <h3 className='m-4'>Hi, my name is <strong>Tessa</strong>.</h3>
                                <p className='m-4'>
                                    I am a recent graduate from UNC Chapel
                                    Hill with a Bachelor of Science in Biology.
                                    I am currently employed as an air
                                    quality analyst, but my newly discovered passion for computer science
                                    has led me to UNC's Coding Bootcamp.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <Container>
                        <Row>
                            <Col>
                                <img
                                    width="100%"
                                    height="100%"

                                    src="../../../image/meb&w.jpg"
                                    alt="Me"
                                />
                            </Col>
                            <Col>
                                <h3 className='m-4'>Hi, my name is <strong>Tessa</strong>.</h3>
                                <p className='m-4'>
                                    I am a recent graduate from UNC Chapel
                                    Hill with a Bachelor of Science in Biology.
                                    I am currently employed as an air
                                    quality analyst, but my newly discovered passion for computer science
                                    has led me to UNC's Coding Bootcamp.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>


            </Carousel>
        </div>
    );
}

export default About;