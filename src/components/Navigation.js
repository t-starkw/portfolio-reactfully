import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation({ currentPage, handlePageChange }) {

    return (
        <div>
            <Navbar bg="transparent" expand='lg'>
                <Container>
                    {/* <Navbar.Brand className="m-auto" href="#home"><h1>TESSA STARKWEATHER</h1></Navbar.Brand> */}
                    <Navbar.Brand className="m-auto">
                        <h1>Tessa Starkweather</h1>

                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar bg="transparent"  collapseOnSelect expand="sm">
                <Container>
                    <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        {/* <Navbar.Brand href="#home">BRAND</Navbar.Brand> */}
                        <Nav className="m-auto flex-grow-1 justify-content-evenly">
                            <Nav.Link
                                href="#aboutme" onClick={() => handlePageChange('Home')}
                                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
                                ABOUT ME
                            </Nav.Link>
                            <Nav.Link
                                href="#portfolio" onClick={() => handlePageChange('Portfolio')}
                                className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
                                PORTFOLIO
                            </Nav.Link>
                            <Nav.Link
                                href="#resume" onClick={() => handlePageChange('Resume')}
                                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
                                RESUME
                            </Nav.Link>
                            <Nav.Link
                                href="#contact" onClick={() => handlePageChange('Contact')}
                                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
                                CONTACT
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
}

export default Navigation;
