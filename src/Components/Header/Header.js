import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" bg="dark" variant="dark"  collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home">NA HealthCare</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
              <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
              <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
              <Nav.Link as={Link} to="/research">Research</Nav.Link>
              <Nav.Link as={Link} to="/covid19">Covid19</Nav.Link>
              <Nav.Link as={Link} to="/Login">Login</Nav.Link>
            </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;