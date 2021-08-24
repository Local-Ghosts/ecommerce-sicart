import React, {useState} from "react";
import ItemCard from "./ItemCard";
import Order from "./Order";
import "./cartpage.css"

const CartPage = () => {

const [totalamnt, setTotal] = useState();

  return (
    <div>
    <h1 className="bagMoh">Your Bag</h1>
    <div className="containerMoh">
      <div className="pageMoh">
        
        <div className="gridMoh">
          <div className="detailsMoh">
            <span className="tbl productsMoh">Products</span>
            <span className="tbl descpMoh">Description</span>
            <span className="tbl quantityMoh">Quantity</span>
            <span className="tbl priceMoh">Price</span>
            <span className="tbl deleteMoh">Delete</span>
            <hr className="line1Moh"></hr>
            <ItemCard setTotal={setTotal} totalamnt={totalamnt}/>
            <ItemCard setTotal={setTotal} totalamnt={totalamnt}/>
            <ItemCard setTotal={setTotal} totalamnt={totalamnt}/>
            {/* <ItemCard setTotal={setTotal}/> */}
            
          </div>
          <Order />
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default CartPage;