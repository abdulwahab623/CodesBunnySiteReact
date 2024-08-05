import React from "react";
import Homehero from "../component/Homehero";
import Abouthome from "../component/Abouthome";
import "../Assets/Style/Home.css";
import Servicerow from "../component/Servicerow";

const Home = () => {
  return (
    <>
      <Homehero />
      <Servicerow />
      <Abouthome />
    </>
  );
};

export default Home;
