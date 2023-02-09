import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

// project function generates indivual cards to be used in the portfolio section

function Project(props) {

    return (
        <Container>

            <Row md={3} >
                {props.projects.map((project) => (
                    <Col>
                        <Card className="bg-dark text-white">
                            <Card.Img src={project.image} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title key={project.id}>{project.title}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Card.Subtitle className="mb-2 ">Languages: {project.languages}</Card.Subtitle>
                                <Card.Link href={project.repo}>View Repo</Card.Link>
                                <Card.Link href={project.live}>View Site</Card.Link>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    );
}

export default Project;