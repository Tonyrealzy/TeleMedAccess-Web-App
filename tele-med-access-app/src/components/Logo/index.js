import React from "react";
import { LogoContainer } from "./logo.styles";

const Logo = ({ logo }) => {
  return (
    <LogoContainer>
      <img src={logo} alt="Logo" width={150} height={50} />
    </LogoContainer>
  );
};

export default Logo;
