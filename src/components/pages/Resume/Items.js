import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function Items(props) {

    return (
        <>
            {props.items.map((x) => (
                < Card  className='resume-item mx-auto mobile'>
                    <Row>
                        <Col className='d-flex justify-content-center '>
                            <i className={x.icon}></i>
                        </Col>
                        <Col>
                            <p>{x.name}</p>
                        </Col>
                    </Row>
                </Card>
            ))}
        </>
    )
}

export default Items;