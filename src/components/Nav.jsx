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
              <Nav.Link>Mens</Nav.Link>
              <Nav.Link>Womens</Nav.Link>
              <Nav.Link>Shoes</Nav.Link>
                
              
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


