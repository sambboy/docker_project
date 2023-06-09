import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {  useNavigate } from "react-router-dom";
function NavBar() {
  const route = useNavigate('')
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand to="/">Ecom-Fabor</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link to="/" onClick={()=>{route('/')}} >Home</Nav.Link>
          <Nav.Link to="/all" onClick={()=>{route('/all')}}>All Products</Nav.Link>
          
        </Nav>
        <Nav>
          <Nav.Link to="#deets" className='pe-3'>Panier</Nav.Link>
         
          <NavDropdown title="Avatar" id="collasible-nav-dropdown">
            <NavDropdown.Item to="#action/3.1">Login</NavDropdown.Item>
            <NavDropdown.Item to="#action/3.2">
              Register
            </NavDropdown.Item>
            <NavDropdown.Item to="#action/3.3">Samir</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item to="#action/3.4">
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
        
}

export default NavBar