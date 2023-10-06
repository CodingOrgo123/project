import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'

function BasicExample() {
  return (
    <Navbar expand="lg"className="navbar navbar-dark  bg-dark">
      <Container fluid>
        <Navbar.Brand href="#home">Codingorzo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" id="navitems">Home</Nav.Link>
            <Nav.Link href="#link"  id="navitems">Problems</Nav.Link>
            <Nav.Link href="#link"  id="navitems">Contest</Nav.Link>
            <Nav.Link href="#link"  id="navitems">Contact us</Nav.Link>
            <Nav.Link href="#link"  id="navitems">Our Values</Nav.Link>
           
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#home"  id="navitemss">Register or Sign in</Nav.Link>
                   </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;