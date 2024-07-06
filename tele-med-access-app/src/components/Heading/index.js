import React from "react";
import classNames from "classnames";
import { Element } from "./heading.styles";

const Heading = ({
  children,
  as,
  kind,
  className = undefined,
}) => {
  return (
    <Element
      as={as}
      kind={kind}
      className={classNames(className, {
        [kind]: kind,
      })}
    >
      {children}
    </Element>
  );
};

export default Heading;
