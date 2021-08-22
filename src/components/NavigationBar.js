import { Navbar, Button, Nav, Form, FormControl } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#Products'>Home</Nav.Link>

            <Nav.Link className='Mens'>Mens</Nav.Link>
            <Nav.Link className='Womens'>Womens</Nav.Link>
            <Nav.Link className='Shoes'>Shoes</Nav.Link>
          </Nav>
          <Form className='d-flex'>
            <FormControl
              type='search'
              placeholder='Search'
              className='mr-2 '
              aria-label='Search'
            />
            <Button variant='outline-success search-button'>Search</Button>
          </Form>
          <Nav>
            <Nav.Link href='#cart'>Shopping Cart</Nav.Link>
            <Nav.Link href='#sign-in'>SignIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
