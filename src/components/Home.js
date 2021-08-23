import React from "react";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import Slider from "./Slider";
import DATA from "../data/productData";
import Card from "./Card";

const Home = () => {
  console.log("home");
  console.log(DATA[0].items);
  return (
    <>
      <Container>
        <NavigationBar></NavigationBar>
        <Slider></Slider>
      </Container>

      {/* Cards */}

      <div className="container my-5">
        <div className="row justify-content-center">
          {DATA[0].items.map((item) => {
            return (
                <Card
                  id={item.id}
                  name={item.name}
                  imageUrl={item.imageUrl}
                  price={item.price}
                  description={item.description}
                />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
const Container = styled.div``;
