import {
  Skeleton,
  SkeletonBar,
  SkeletonButton,
  SkeletonTitle,
} from "./Loading.styles";
import React from "react";

const SkeletonLoader = () => {
  return (
    <Skeleton>
      <SkeletonTitle />
      <SkeletonBar />
      <SkeletonBar />
      <SkeletonBar />
      <SkeletonBar />
      <SkeletonButton />
    </Skeleton>
  );
};

export default SkeletonLoader;
