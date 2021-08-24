import React from "react";
import Data from "../data/productData";
import Product from "../components/Product";
import NavigationBar from "../components/NavigationBar";
import { useParams } from "react-router-dom";

const ShopPage = () => {
  const { id } = useParams();
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Product
        key={Data[id - 1001].id}
        title={Data[id - 1001].title}
        items={Data[id - 1001].items}
        category={Data[id - 1001].routeName}
      />
    </div>
  );
};

export default ShopPage;
