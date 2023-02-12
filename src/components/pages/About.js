import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



// import { BsGithub } from 'react-icons/bs'
// import { BsLinkedin } from 'react-icons/bs'
// import { BsInstagram } from 'react-icons/bs'



function About() {
    return (
        <div>
            <Carousel className='m-5' variant='dark'>
                <Carousel.Item className='carousel-item' interval={7000}>
                    <Container>
                        <Row>
                            <Col>
                                <img
                                    width="100%"
                                    height="100%"

                                    src="../../../image/unnamed.jpg"
                                    alt="Me"
                                />
                            </Col>
                            <Col>
                                <h3 className='m-4'>Hi, my name is <strong>Tessa</strong>.</h3>

                                <div className='m-4'>
                                    <p >
                                        I am a recent graduate from UNC Chapel
                                        Hill with a Bachelor of Science degree in Biology.
                                        I am currently employed as an air
                                        quality analyst, but my newly discovered passion for computer science
                                        has led me to UNC's Coding Bootcamp.
                                    </p>
                                    <p >
                                        I discovered my excitement for development in my senior year of college while taking the dreaded
                                        "Introduction to Programming" course required for my degree. <br></br>
                                        We used Python to explore algorithms,
                                        abstraction design, and ethics in computing.
                                    </p>
                                    <p>After building my very own version of Wordle (and forcing quite literally everyone I knew to play it), I knew that I was hooked.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>

                <Carousel.Item className='carousel-item' interval={6000}>
                    <Container>
                        <Row>
                            <Col>
                                <h3 className='m-4'>My Interests</h3>

                                <div className='m-4'>
                                    <p>
                                        Throughout my experience in UNC's Fullstack Development Bootcamp, I have enjoyed developing and managing API's,
                                        exploring system archetectures, and implementing data storage techniques.
                                    </p>
                                    <p>I am highly motivated by my love for solving complex problems, and look forward to opportunities in which creating solutions is a daily occurance.</p>
                                    <p>
                                        When I am not working on a new project, I spend my free time playing volleyball, taking photos, teaching myself new tunes on my saxophone, or hanging out with my dog Bodie.
                                    </p>
                                </div>
                            </Col>
                            <Col>
                                <img
                                    width="100%"
                                    height="80%"

                                    src="../../../image/vball.jpg"
                                    alt="Me"
                                />
                            </Col>
                            {/* <Col>
                                <img
                                    width="100%"
                                    height="40%"

                                    src="../../../image/bodie.jpg"
                                    alt="Me"
                                />
                                <img
                                    width="100%"
                                    height="40%"

                                    src="../../../image/vball.jpg"
                                    alt="Me"
                                />
                            </Col> */}
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default About;