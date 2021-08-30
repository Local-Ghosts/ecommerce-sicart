import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Order from "./Order";
import "./cartpage.css";
import { loadCart } from "./cart_helper";
import NavigationBar from "../NavigationBar";

const CartPage = () => {
  const [products, setproducts] = useState([]);
  const [reload, setreload] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderSuccess, setOrderSuccess] = useState(false);



  useEffect(() => {
    setproducts(loadCart());
  }, [reload]);

  useEffect(() => {
    if (products) {
      var temp_price = 0;
      for (let i = 0; i < products.length; i++) {
        temp_price += products[i].price;
      }
      setTotalPrice(temp_price);
    }
  }, [products]);

  return (
    <div>
      <NavigationBar></NavigationBar>
      <h1 className="bagMoh">Your Bag</h1>
      <div className="containerMoh">
        <div className="pageMoh">
          <div className="gridMoh">
            <div className="detailsMoh">
              <span className="tbl productsMoh">Products</span>
              <span className="tbl descpMoh">Description</span>
              <span className="tbl priceMoh">Price</span>
              <span className="tbl deleteMoh">Delete</span>
              <hr className="line1Moh"></hr>
              {products && products.length ? (
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
            {products && products.length && (
              <Order
                totalPrice={totalPrice * 70}
                numberOfProducts={products.length}
                setproducts={setproducts}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
