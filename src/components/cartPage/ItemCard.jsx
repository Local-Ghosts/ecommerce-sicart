import React, { useState } from 'react'
import { removeItemFromCart } from "./cart_helper";

function ItemCard(props) {
  const { id, name, price, imageUrl } = props.product;
  const { setreload = (f) => f, reload = undefined } = props;
  const removeItem = () => {
    removeItemFromCart(id);
    setreload(!reload);
  };
  return (
    <div>
      <div className='itmdetMoh'>
        <img class='imgMoh' src={imageUrl} alt='' height="180" width="180" style={{objectFit:"scale-down"}}/>
        <span className='dataMoh'>
          <span className='descMoh'>{name}</span>
          <span className='data itPriceMoh'>{price*70}/-</span>
          <button id='trashMoh' onClick={removeItem}>
            <i className='fa fa-trash'></i>
          </button>
        </span>
      </div>
      <hr className='line1Moh'></hr>
    </div>
  );
}

export default ItemCard
