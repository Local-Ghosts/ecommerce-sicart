import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/productPage.css";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";

const data = {
  img: "https://images.unsplash.com/photo-1629473728190-c9a984fed794?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1864&q=80",
  title: "Pastel Jacket With Bejewelled Collar",
  price: "79.99 GBP",
  description:
    "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
};

function ProductPage() {
  const [counter, setCounter] = useState(1);

  return (
    <>
      <NavigationBar></NavigationBar>
      <Container>
        <div className='d-lg-flex justify-content-center product-page'>
          <div className='images-xsm'>
            <div className='product-image-sm'>
              <img src={data.img} alt='' />
            </div>
            <div className='product-image-sm'>
              <img src={data.img} alt='' />
            </div>
            <div className='product-image-sm'>
              <img src={data.img} alt='' />
            </div>
          </div>
          <div className='product-image'>
            <img src={data.img} alt='' />
          </div>
          <div className='details'>
            <div>
              <h1>{data.title}</h1>
            </div>
            <div>
              <h4 className='price'>{data.price}</h4>
            </div>
            <div className='price-buttons'>
              {" "}
              <label>Size:</label>
              <select name='' className='dropdown'>
                <option value=''>S</option>
                <option value=''>M</option>
                <option value=''>L</option>
                <option value=''>XL</option>
                <option value=''>XXL</option>
              </select>
              <div className='d-inline counter'>
                <button
                  onClick={() => {
                    setCounter(counter - 1);
                  }}
                >
                  -
                </button>
                <span className='counter-txt'>{counter}</span>
                <button
                  onClick={() => {
                    setCounter(counter + 1);
                  }}
                >
                  +
                </button>
              </div>
              <button className='add-to-cart'>ADD TO CART</button>
            </div>

            <div className='description'>
              <h2>DESCRIPTION</h2>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductPage;
const Container = styled.div`
  width: 90%;
  margin-inline: auto;
`;