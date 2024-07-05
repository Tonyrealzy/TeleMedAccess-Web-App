import React from "react";

const Heading = ({
  children,
  as,
  kind,
}) => {
  return (
    <div
      as={as}
      kind={kind}
    >
      {children}
    </div>
  );
};

export default Heading;
