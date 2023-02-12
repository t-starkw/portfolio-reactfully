import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// project function generates indivual cards to be used in the portfolio section

function Project(props) {

    return (
        <Container>

            <Row md={3} >
                {props.projects.map((project) => (
                    <Col className='col-12 col-md-6 col-lg-4'>
                        <Card className="bg-dark text-white card text-center m-4">
                            <Card.Img className='card-img' src={project.image} alt="Project card" />
                            <Card.ImgOverlay className='overlay'>
                                <Card.Title key={project.id}><strong>{project.title}</strong></Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Card.Subtitle className="mb-2">Tools: {project.tools}</Card.Subtitle>
                                <Button className=' btn-success btn-space'><Card.Link className='link' href={project.repo}>View Repo</Card.Link></Button>
                                <Button className='btn-dark btn-space'><Card.Link className='link' href={project.live}>View Site</Card.Link></Button>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default Project;