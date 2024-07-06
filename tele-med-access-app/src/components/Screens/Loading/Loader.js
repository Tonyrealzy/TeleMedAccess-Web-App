import React from "react";
import { LoadingContainer } from "./LoadingStyles";

const Loader = () => {
  return (
    <LoadingContainer>
      <img src="../../assets/images/Loader.gif" alt="Loading..." width={125} />
    </LoadingContainer>
  );
};

export default Loader;
