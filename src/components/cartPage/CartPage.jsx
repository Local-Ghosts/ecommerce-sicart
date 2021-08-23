import React, {useState} from "react";
import ItemCard from "./ItemCard";
import Order from "./Order";

const CartPage = () => {

const [totalamnt, setTotal] = useState();

  return (
    <div className="container">
      <div className="page">
        
        <div className="grid">
          <div className="details">
            <span className="products">Products</span>
            <span className="desc">Description</span>
            <span className="quantity">Quantity</span>
            <span className="price">Price</span>
            <span className="delete">Delete</span>
            <hr className="line1"></hr>
            <ItemCard setTotal={setTotal} totalamnt={totalamnt}/>
            <ItemCard setTotal={setTotal} totalamnt={totalamnt}/>
            <ItemCard setTotal={setTotal} totalamnt={totalamnt}/>
            <ItemCard setTotal={setTotal} totalamnt={totalamnt}/>
            {/* <ItemCard setTotal={setTotal}/> */}
            
          </div>
          <Order />
          
        </div>
      </div>
    </div>
  );
};

export default CartPage;