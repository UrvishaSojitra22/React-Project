
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



const Header = () => {

    return (
        <>
      <Navbar bg="light" variant="light" expand="lg" style={{marginBottom:'20px', fontSize:'20px'}}>
        <Container>
          <Navbar.Brand href="/">🎬 MovieApp</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/AddMovie">Add Movie</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}

export default Header;