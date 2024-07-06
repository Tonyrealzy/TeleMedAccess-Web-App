import React from "react";
import { UnorderedList } from "./bullets.styles";

const Bullets = ({ children }) => {
  return <UnorderedList>{children}</UnorderedList>;
};

export default Bullets;
