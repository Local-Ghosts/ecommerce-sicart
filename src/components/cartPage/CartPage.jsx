import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Order from "./Order";
import "./cartpage.css";
import { loadCart } from "./cart_helper";
import NavigationBar from "../NavigationBar";
const CartPage = () => {
  const [totalamnt, setTotal] = useState();
  const [products, setproducts] = useState([]);
  const [reload, setreload] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const getTotalPrice = () => {
    let temp = 0;
    products.forEach((product) => {
      temp += product.price;
    });
    setTotalPrice(temp);
    console.log("Total price: " + totalPrice);
  };
  useEffect(() => {
    console.log("reload");
    setproducts(loadCart());
  }, [reload]);
  useEffect(() => {
    getTotalPrice();
  });
  return (
    <div>
      <NavigationBar></NavigationBar>
      <h1 className='bagMoh'>Your Bag</h1>
      <div className='containerMoh'>
        <div className='pageMoh'>
          <div className='gridMoh'>
            <div className='detailsMoh'>
              <span className='tbl productsMoh'>Products</span>
              <span className='tbl descpMoh'>Description</span>
              {/* <span className='tbl quantityMoh'>Quantity</span> */}
              <span className='tbl priceMoh'>Price</span>
              <span className='tbl deleteMoh'>Delete</span>
              <hr className='line1Moh'></hr>
              {products.length ? (
                products.map((product) => {
                  return (
                    <div>
                      <ItemCard
                        key={product.id}
                        product={product}
                        setreload={setreload}
                        reload={reload}
                      ></ItemCard>
                    </div>
                  );
                })
              ) : (
                <h1>Cart is empty</h1>
              )}
            </div>
            {products.length && (
              <Order
                totalPrice={totalPrice}
                numberOfProducts={products.length}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
