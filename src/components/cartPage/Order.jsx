import React, { useState } from "react";
import { Route, Redirect } from "react-router";
import "./button.css";
import { cartEmpty } from "./cart_helper"

function Order(props) {
  const { totalPrice, numberOfProducts, setproducts } = props;
  const [redirect, setRedirect] = useState(false);
  const shipping = 50;

  const getRedirect = () => {
    if (redirect) {
      return <Redirect to="/checkoutsuccess"></Redirect>;
    }
  };


  const handleClick = () => {
    console.log("in handle click");
    cartEmpty(() => {
    setRedirect(true);
    });
  };

  return (
    <div>
      {getRedirect(redirect)}
      <div className="summaryMoh">
        <span className="orderMoh">Order Summary</span>
        <hr class="line2Moh"></hr>
        <div className="mainChargesMoh">
          <span>{numberOfProducts}</span>
          <span className="tmoneyMoh">Rs.{totalPrice}</span>
        </div>
        <div>
          <div id="plusMoh">+</div>
          <div>
            <span className="schargesMoh">Shipping Charges</span>
            <span className="smoneyMoh">Rs.{shipping}</span>
            <hr className="line2Moh"></hr>
          </div>
          <div className="sumMoh">
            <span id="sumMoh"> Total Charges</span>
            <span className="fsumMoh">₹{totalPrice + 50}</span>
          </div>
        </div>
        <label onClick={handleClick} class="checkout" for="button">
          Checkout
        </label>
      </div>
    </div>
  );
}

export default Order;
