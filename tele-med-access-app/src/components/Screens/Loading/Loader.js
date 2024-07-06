import React from "react";
import { LoadingContainer } from "./Loading.styles";
import LoadingGif from '../../../assets/images/Loader.gif';

const Loader = () => {
  return (
    <LoadingContainer>
      <img src={LoadingGif} alt="Loading..." style={{width:'250px'}} />
    </LoadingContainer>
  );
};

export default Loader;