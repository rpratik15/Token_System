import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import '../Style/NavbarStrip.css'

function NavbarStrip() {
  return (
     <div className="nav-container">
         <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Token System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink to="/register">Ragister</NavLink>
                <NavLink to="/about">About US</NavLink>
                <NavLink to="/contact">Contact US</NavLink>
                <NavLink to="/">Logout</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
       
       

      </div>
  )
}

export default NavbarStrip