import Item from "./Item";
import React from "react";
import Card from "./Card";
import Carousel from "react-elastic-carousel";

function Product({ title, items, category }) {
  console.log("ITEMS", items);
  console.log("TITle", title);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className='collection'>
      <h1 className='title'>{title.toUpperCase()}</h1>

      <Carousel
        infiniteLoop={true}
        breakPoints={breakPoints}
        className='carousel-card'
      >
        {items.map((i) => (
          <Card
            key={i.id}
            id={i.id}
            name={i.name}
            price={i.price}
            imageUrl={i.imageUrl}
            description={i.description}
            category={category}
          ></Card>
        ))}
      </Carousel>
    </div>
  );
}

export default Product;
