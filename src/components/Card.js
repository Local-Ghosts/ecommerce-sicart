import React from 'react'
import "./Card.css"
function Card({ name, price, imageUrl }) {
  return (
    <div className='Card'>
      <div
        className='card-img'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className='card-text'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
    </div>
  );
}
export default Card
