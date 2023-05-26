import React from "react";
import Logo from "../components/Logo";
import Banner from "../components/Banner";
import SelectStudio from "../components/SelectStudio";
// import ghibli from "./ghibli.png";

const Home = () => {
  return (
    <div>
      <Logo source="./assets/ghibli.png" />

      <Banner />
      <SelectStudio />
    </div>
  );
};

export default Home;
