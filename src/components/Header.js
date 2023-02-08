import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation({ currentPage, handlePageChange }) {

    return (
        <div>
            <Navbar bg="transparent">
                <Container>
                    <Navbar.Brand href="#home">TESSA STARKWEATHER</Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar bg="transparent">
                <Container>
                    <Navbar.Brand href="#home">BRAND</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#aboutme" onClick={() => handlePageChange('Home')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                            ABOUT ME
                        </Nav.Link>
                        <Nav.Link
                            href="#portfolio" onClick={() => handlePageChange('Project')}
                            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
                            PORTFOLIO
                        </Nav.Link>
                        <Nav.Link
                            href="#contact" onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                            CONTACT
                        </Nav.Link>
                        <Nav.Link
                            href="#resume" onClick={() => handlePageChange('Resume')}
                            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                            RESUME
                        </Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;
