import Item from "./Item";
import React from 'react'
import Card from "./Card"
import Carousel from 'react-elastic-carousel';

function Product({title,items}) {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
      ];

    return (
        
        <div className="collection">
            
            <h1 className="title">{title.toUpperCase()}</h1>
            
            <Carousel breakPoints={breakPoints} className="carousel-card">
                {
                    items.map(({id, ...otherItems} )=>(
                    <Card key={id} { ...otherItems } > 
                    </Card>
                    ))
                }
            </ Carousel>
        </div>
        
    )}
    

export default Product
