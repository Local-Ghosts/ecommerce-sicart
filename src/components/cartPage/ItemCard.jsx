import React, { useState } from 'react'
import { removeItemFromCart } from "./cart_helper";
function ItemCard(props) {
  console.log("Cart item", props);
  const { id, name, price, imageUrl } = props.product;
  const { setreload = (f) => f, reload = undefined } = props;
  const removeItem = () => {
    removeItemFromCart(id);
    setreload(!reload);
  };
  return (
    <div>
      <div className='itmdetMoh'>
        <img class='imgMoh' src={imageUrl} alt='' width='150' height='150' />
        <span className='dataMoh'>
          <span className='descMoh'>{name}</span>
          {/* <span className='data quantMoh'> */}
          {/* <button
              className='qbtnMoh'
              id='decMoh'
              onClick={() => {
                decrease();
                props.setTotal(quant);
                console.log(props.totalamnt);
              }}
            >
              -
            </button> */}
          {/* <button
              className='qbtnMoh'
              id='incMoh'
              onClick={() => {
                increase();
                props.setTotal(quant);
                console.log(props.totalamnt);
              }}
            >
              +
            </button> */}
          {/* </span> */}
          <span className='data itPriceMoh'>{price}/-</span>
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
