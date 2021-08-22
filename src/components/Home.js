import React from "react";
import styled from "styled-components";
import NavigationBar from "./NavigationBar";
import Slider from "./Slider";
const Home = () => {
  console.log("home");
  return (
    <Container>
      <NavigationBar></NavigationBar>
      <Slider></Slider>
      
    </Container>
  );
};

export default Home;
const Container = styled.div``;
