import React from "react";

const Logo = ({ source }) => {
  return (
    <div id="main__logo" className="logo__container">
      <img className="logo-studio" src={source} alt="logo studio" />
    </div>
  );
};

export default Logo;
