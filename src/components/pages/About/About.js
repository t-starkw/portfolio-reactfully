import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './about.css';



function About() {
    return (
        <>
            <Container className='about mx-auto mt-5 '>
                <Row className='about-body '>
                    <Col xs={12} md={4} className='d-flex justify-content-center '>
                        <div>
                            <Image
                                className='about-img img-responsive center-block d-block mx-auto'
                                src='../../../image/me^2.jpg'
                                roundedCircle
                            />
                        </div>
                    </Col>
                    <Col xs={12} md={8} className='justify-content-center'>
                        <div className='about-intro p-4 mobile-text'>
                            <h2>Hi, my name is <strong>Tessa.</strong></h2>
                        </div>
                        <div className='about-description p-4 mobile-text'>
                            <p>
                                I am a recent graduate from UNC Chapel
                                Hill with a Bachelor of Science degree in Biology.
                                I am currently employed as an air
                                quality analyst, but my newly discovered passion for computer science
                                has led me to UNC's Coding Bootcamp.<br /><br />
                                I discovered my excitement for development in my senior year of college while taking the dreaded
                                "Introduction to Programming" course required for my degree.
                                We used Python to explore algorithms,
                                abstraction design, and ethics in computing.<br /><br />
                                After building my very own version of Wordle (and forcing all of my friends to play it), I was hooked.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>

    );
}


export default About;

// I am a recent graduate from UNC Chapel
// Hill with a Bachelor of Science degree in Biology.
// I am currently employed as an air
// quality analyst, but my newly discovered passion for computer science
// has led me to UNC's Coding Bootcamp.<br /><br />
// I discovered my excitement for development in my senior year of college while taking the dreaded
// "Introduction to Programming" course required for my degree. <br></br>
// We used Python to explore algorithms,
// abstraction design, and ethics in computing.
// <p>Throughout my experience in UNC's Fullstack Development Bootcamp, I have enjoyed developing and managing API's, exploring system archetectures, and implementing data storage techniques.</p>
// <p>I am highly motivated by my love for solving complex problems, and look forward to opportunities in which creating solutions is a daily occurance.</p>
// <p>When I am not working on a new project, I spend my free time playing volleyball, taking photos, teaching myself new tunes on my saxophone, or hanging out with my dog Bodie.</p>