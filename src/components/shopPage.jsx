import React from "react";
import Data from "../data/productData";
import Product from "../components/Product";
import NavigationBar from "../components/NavigationBar";
const shopPage = () => {
  return (
    <div>
      {console.log("shop")}
      <NavigationBar></NavigationBar>
      {Data.map((item) => (
        <Product key={item.id} title={item.title} items={item.items} />
      ))}
    </div>
  );
};

export default shopPage;
