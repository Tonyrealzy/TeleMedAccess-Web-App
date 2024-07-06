import React from "react";
import { Button as StyledButton } from "./button.styles";
import classNames from "classnames";

export const Button = ({
  children,
  disabled = false,
  onClick,
  className,
  fullWidth,
  light,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      className={classNames(className, {
        "full-width": fullWidth,
        light,
      })}
    >
      {children}
    </StyledButton>
  );
};
