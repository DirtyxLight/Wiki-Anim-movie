import React from "react";

const Banner = () => {
  return (
    <div id="main__banner">
      <svg id="main__banner-wave" viewBox="0 0 400 100">
        <path
          d="M 0 50 C 150 150 200 0 500 80 L 500 0 L 0 0"
          fill="rgb(57, 27, 112)"
        ></path>
        <path
          d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0"
          fill="#0E7452"
          opacity="0.8"
        ></path>
        <path
          d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0"
          fill="#0E7452"
          opacity="0.5"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;
