import React from "react";
import "../styles/acoount.css";
import NavigationBar from "./NavigationBar";
import {
  selectUserName,
  selectUserPhoto,
  selectUserEmail,
} from "../redux/auth/AuthSlice";
import { useSelector, useDispatch } from "react-redux";
const Account = () => {
  const userEmail = useSelector(selectUserEmail);
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const dispatch = useDispatch();
  return (
    <>
      <NavigationBar></NavigationBar>
      <div class='container emp-profile'>
        <form method='post'>
          <div class='row'>
            <div class='col-md-4'>
              <div class='profile-img'>
                <img src={userPhoto} alt='' />
              </div>
            </div>
            <div class='col-md-6'>
              <div class='profile-head'>
                <h5>{userName}</h5>
                <ul class='nav nav-tabs' id='myTab' role='tablist'>
                  <li class='nav-item'>
                    <a
                      class='nav-link active'
                      id='home-tab'
                      data-toggle='tab'
                      href='#home'
                      role='tab'
                      aria-controls='home'
                      aria-selected='true'
                    >
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class='col-md-2'>
              <input
                type='submit'
                class='profile-edit-btn'
                name='btnAddMore'
                value='Edit Profile'
              />
            </div>
          </div>
          <div class='row'>
            <div class='col-md-4'></div>
            <div class='col-md-8'>
              <div class='tab-content profile-tab' id='myTabContent'>
                <div
                  class='tab-pane fade show active'
                  id='home'
                  role='tabpanel'
                  aria-labelledby='home-tab'
                >
                  <div class='row'>
                    <div class='col-md-6'>
                      <label>User Id</label>
                    </div>
                  </div>
                  <div class='row'>
                    <div class='col-md-6'>
                      <label>Name</label>
                    </div>
                    <div class='col-md-6'>
                      <p>{userName}</p>
                    </div>
                  </div>
                  <div class='row'>
                    <div class='col-md-6'>
                      <label>Email</label>
                    </div>
                    <div class='col-md-6'>
                      <p>{userEmail}</p>
                    </div>
                  </div>
                  <div class='row'>
                    <div class='col-md-6'>
                      <label>Phone</label>
                    </div>
                    <div class='col-md-6'>
                      <p>123 456 7890</p>
                    </div>
                  </div>
                </div>
                <div
                  class='tab-pane fade'
                  id='profile'
                  role='tabpanel'
                  aria-labelledby='profile-tab'
                >
                  <div class='row'>
                    <div class='col-md-6'>
                      <label>Experience</label>
                    </div>
                    <div class='col-md-6'>
                      <p>Expert</p>
                    </div>
                  </div>
                  <div class='row'>
                    <div class='col-md-6'>
                      <label>Hourly Rate</label>
                    </div>
                    <div class='col-md-6'>
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div class='row'>
                    <div class='col-md-6'>
                      <label>Total Projects</label>
                    </div>
                    <div class='col-md-6'>
                      <p>230</p>
                    </div>
                  </div>
                  <div class='row'>
                    <div class='col-md-6'>
                      <label>English Level</label>
                    </div>
                    <div class='col-md-6'>
                      <p>Expert</p>
                    </div>
                  </div>
                  <div class='row'>
                    <div class='col-md-6'>
                      <label>Availability</label>
                    </div>
                    <div class='col-md-6'>
                      <p>6 months</p>
                    </div>
                  </div>
                  <div class='row'>
                    <div class='col-md-12'>
                      <label>Your Bio</label>
                      <br />
                      <p>Your detail description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Account;
