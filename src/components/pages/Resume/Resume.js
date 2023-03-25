import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import { AiOutlineFilePdf } from 'react-icons/ai';


import Items from './Items'
import './resume.css'

const frontend = [
    {
        id: 0,
        name: 'HTML',
        icon: 'devicon-html5-plain-wordmark colored'
    },
    {
        id: 1,
        name: 'CSS',
        icon: 'devicon-css3-plain-wordmark colored'

    },
    {
        id: 2,
        name: 'JavaScript',
        icon: 'devicon-javascript-plain colored'

    },
    {
        id: 3,
        name: 'JQuery',
        icon: 'devicon-jquery-plain-wordmark colored'
    },
]

const backend = [
    {
        id: 0,
        name: 'Python',
        icon: 'devicon-python-plain-wordmark colored'
    },
    {
        id: 1,
        name: 'MySQL',
        icon: 'devicon-mysql-plain-wordmark colored'
    },
    {
        id: 2,
        name: 'MongoDB',
        icon: 'devicon-mongodb-plain-wordmark colored'
    },
    {
        id: 3,
        name: 'Express',
        icon: 'devicon-express-original-wordmark colored'
    },
    {
        id: 4,
        name: 'React',
        icon: 'devicon-react-original-wordmark colored'
    },
    {
        id: 5,
        name: 'Node',
        icon: 'devicon-nodejs-plain colored'
    },
]

function Resume() {
    return (

        <>
        <h2 className='text-center mt-4'>My Proficiencies</h2>
            <Container className='mt-5'>
                <Row >
                    <Col xs={12} md={6} className='mobile mt-3'>
                       
                        <h4>Download a copy of my resume!</h4>
                        <a class="btn btn-primary resume-btn mt-3" href="https://drive.google.com/file/d/1Mv03g5hAHC5_Q4j_buI-cw-VsvG6whlJ/view?usp=sharing" role="button"><AiOutlineFilePdf className='pdf-icon' />Click Me</a>

                    </Col>
                    <Col xs={12} md={3}>
                    <h2 className='text-center mt-3'>Front End</h2>
                        <Items items={frontend} />
                    </Col>
                
                    <Col xs={12} md={3}>
                    <h2 className='text-center mt-3'>Back End</h2>
                        <Items items={backend} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Resume;