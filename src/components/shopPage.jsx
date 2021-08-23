import React from "react";
import Product from "./Product";
import DATA from "./data/productData";
import NavigationBar from "./NavigationBar";

class ShopComponent extends React.Component{
    constructor(props){
        super(props);

    this.state={
        collections: DATA
    };
    
    }

    render(){
        return (
            
            <div className="shop-page">
                <NavigationBar></NavigationBar>
                {
                this.state.collections.map(({id, ...otherItems }) => (
                    <Product key={id} {...otherItems} />
                ))
                }
            </div>
        )
    }
}

export default ShopComponent