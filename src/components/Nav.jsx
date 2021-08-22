import {Navbar,Container,Nav,NavDropdown} from "react-bootstrap"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function NavigationBar() {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Products">Home</Nav.Link>
              
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Jackets</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Shirts</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Jeans</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">T-Shirts</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Shoes</NavDropdown.Item>
                <NavDropdown.Divider />
                
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#cart">Shopping Cart</Nav.Link>
              <Nav.Link href="#sign-in">SignIn</Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
        </div>
    )
}

export default NavigationBar


