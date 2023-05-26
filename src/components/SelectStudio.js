import React from "react";
import { NavLink } from "react-router-dom";

const SelectStudio = () => {
  return (
    <div>
      <NavLink to="/ghibli">Studio Ghibli</NavLink>
      <NavLink to="/disney">Studio Disney</NavLink>
    </div>
  );
};

export default SelectStudio;
