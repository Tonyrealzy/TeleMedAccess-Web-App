import loadingGif from "../../../media/Healthily_Animation.gif";
import { LoadingContainer } from "./Loading.styles";
import React from "react";

export const LoadingScreen = () => (
  <LoadingContainer>
    <img src={loadingGif} alt="loading_gif" width={125} />
  </LoadingContainer>
);
