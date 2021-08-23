import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import "../components/Card.css";
function Card({ id, name, price, imageUrl, description }) {
  return (
    <Link
      className='link'
      to={`/product/${id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className='card m-3 ' style={{ width: "25rem" }}>
        <img
          className='product-img card-img-top'
          src={imageUrl}
          alt='Card image cap'
          style={{ height: "30em", objectFit: "scale-down" }}
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p>Rs.{price * 70}</p>
          <p className='card-text'>
            <p className=''>{description}....</p>
          </p>
          <a href='#' className='btn btn-primary'>
            +
          </a>
        </div>
      </div>
    </Link>
  );
}
export default Card;
