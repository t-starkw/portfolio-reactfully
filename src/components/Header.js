import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Navigation from './Nav'
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";


function Header() {

    return (
        <div>
            <Navbar bg="transparent">
                <Container>
                    <Navbar.Brand href="#home">TESSA STARKWEATHER</Navbar.Brand>
                </Container>
            </Navbar>
            <Navigation />
        </div>
    );
}

export default Header;