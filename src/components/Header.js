import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
    return (
        <Navbar bg="transparent">
            <Container>
                <Navbar.Brand href="#home">TESSA STARKWEATHER</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;