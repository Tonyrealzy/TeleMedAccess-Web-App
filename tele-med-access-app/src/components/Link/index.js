import React from "react";
import { Element, LinkContainer } from "./link.styles";
import classNames from "classnames";

const Link = ({
  children,
  href = "",
  target = "_blank",
  className,
  inline,
  ...props
}) => {
  return (
    <LinkContainer className={classNames({ inline })}>
      <Element
        href={href}
        target={target}
        className={classNames(className)}
        {...props}
      >
        {children}
      </Element>
    </LinkContainer>
  );
};

export default Link;
