import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {

    const [currentPage, setCurrentPage] = useState("About");

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <div>
            <Navbar bg="transparent">
                <Container>
                    <Navbar.Brand href="#home">BRAND</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#aboutme">ABOUT ME</Nav.Link>
                        <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                        <Nav.Link href="#resume">RESUME</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
