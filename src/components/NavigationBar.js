import {
  Navbar,
  Button,
  Nav,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import Popup from "reactjs-popup";
import React from "react";
import "animate.css";
import { auth, provider } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";
import "reactjs-popup/dist/index.css";
import SignInPopUp from "../components/SignInPopUp.js";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setUserSignout,
} from "../redux/auth/AuthSlice";
import { useSelector, useDispatch } from "react-redux";
function NavigationBar() {
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  console.log(userName);
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setUserSignout());
    });
  };
  return (
    <div className='nav-bar'>
      <Navbar collapseOnSelect expand='lg' variant='dark'>
        <Container>
          <Link
            to='/'
            className='navbar-brand animate__animated animate__bounce'
            style={{ fontSize: "1.3em" }}
          >
            Sicart
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <li className='nav-item'>
                <Link className='nav-link' to={`/shop/${1005}`}>
                  <a>Mens</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={`/shop/${1004}`}>
                  <a>Womens</a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to={`/shop/${1002}`}>
                  <a>Shoes</a>
                </Link>
              </li>
            </Nav>
            {/* <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='mr-2 '
                aria-label='Search'
              />
              <Button variant='outline-success search-button'>Search</Button>
            </Form> */}
            <Nav>
              <Nav.Link href='#cart'>Shopping Cart</Nav.Link>
              {console.log("uaser mae", userName == "")}
              {userName != "" ? (
                <Popup
                  trigger={(open) => (
                    <UserImage onClick={() => {}} src={userPhoto}></UserImage>
                  )}
                  position='bottom center'
                  closeOnDocumentClick
                >
                  <div className='container'>
                    <button className='signout' onClick={signOut}>
                      Sign Out
                    </button>
                    <Link to='/profile'>Profile</Link>
                  </div>
                </Popup>
              ) : (
                <Nav.Link href='#cart'>
                  <SignInPopUp></SignInPopUp>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;