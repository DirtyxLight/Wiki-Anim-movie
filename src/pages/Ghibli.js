import React from "react";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Logo from "../components/Logo";
// import ghibli from "./ghibli.png";

const Ghibli = () => {
  return (
    <div id="ghibli-page">
      <Logo source="./assets/ghibli.png" />
      <Banner />
      <Gallery />
    </div>
  );
};

export default Ghibli;
