import {
  Navbar,
  Button,
  Nav,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";
import "reactjs-popup/dist/index.css";
import SignInPopUp from "../components/SignInPopUp.js";
function NavigationBar() {
  return (
    <div className='nav-bar'>
      <Navbar collapseOnSelect expand='lg' variant='dark'>
        <Container>
          <Link to='/' className='navbar-brand ' style={{ fontSize: "1.3em" }}>
            Sicart
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to='/category'>
                  <a>Mens</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/category'>
                  <a>Womens</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/category'>
                  <a>Shoes</a>
                </Link>
              </li>
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
              <SignInPopUp></SignInPopUp>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
