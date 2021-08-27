import { Route } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Card.css";
import { addItemToCart } from "./cartPage/cart_helper";
function Card({ id, name, price, imageUrl, description, category }) {
  const [redirect, setredirect] = useState(false);
  const addItem = () => {
    addItemToCart({ id, name, price, imageUrl, description, category }, () =>
      setredirect(true)
    );
  };
  const getaRedirect = () => {
    if (redirect) {
      return <Redirect to='/cart' />;
    }
  };
  return (
    <div>
      {getaRedirect(redirect)}
      <div class='container'>
        <div class='card'>
          <Link
            className='link'
            to={`/product/${id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div class='card-header'>
              <img src={imageUrl} alt='rover' />
            </div>
          </Link>
          <div class='card-body'>
            <span class='tag tag-teal'>{category}</span>
            <h4>{name}</h4>
            <h7>Rs. {price * 70}</h7>
            <p>{description.slice(0, 70)}...</p>
            <div className='add-btn'>
              <button className='add-to-cart-home' onClick={addItem}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
