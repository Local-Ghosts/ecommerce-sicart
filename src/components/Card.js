
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
// import "./Card.css";
function Card({ id, name, price, imageUrl, description }) {
  return (
    <Link to={`/product/${id}`}>
      <div className='card m-3' style={{ width: "25rem" }}>
        <img
          className='card-img-top'
          src={imageUrl}
          alt='Card image cap'
          style={{ height: "30em", objectFit: "scale-down" }}
        />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <p>{price}$</p>
          <p className='card-text'>
            <p className=''>{description.slice(0, 70)}....</p>
          </p>
          <a href='#' className='btn btn-primary'>
            +
          </a>
        </div>
      </div>
    </Link>
    // </Link>
  );
}
export default Card;
