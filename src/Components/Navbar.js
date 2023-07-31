import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom'

//FONT AWESOME IMPORTS
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function navBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >  
      <Container className="container">
        {/* <Navbar.Brand className="name" href="/">J.H</Navbar.Brand> */}
        {/* <FontAwesomeIcon icon={faBars} style={{color: "#0564646",}} /> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link className="navLink" href="/"> Home
            <NavLink  className="d-none" to="/"></NavLink>
            </Nav.Link>

            {/* <Nav.Link className="navLink" href="/about">About
              <NavLink className="d-none" to="/about"></NavLink>
            </Nav.Link> */}
            
            {/* <Nav.Link className="navLink" href="/CurrentProject">Current Project</Nav.Link>  */}
            {/* include current project in this section */}
            {/* <Nav.Link className="navLink" href="/contact">Contact</Nav.Link> */}
            <NavDropdown title="Social Media Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/jeneil-henry/">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Facebook</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
