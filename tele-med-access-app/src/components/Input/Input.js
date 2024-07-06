/* eslint-disable react/display-name */
import { HTMLInputTypeAttribute, forwardRef } from "react";
import {
  InputInnerContainer,
  InputContainer,
  Label,
  Input as StyledInput,
} from "./inputStyles";

const Input = forwardRef(
  (
    {
      label,
      id,
      value,
      required = false,
      inline = false,
      inputProps = {},
      hasError = false,
      type = "text",
      disabled = false,
      onChange,
      validation = {},
      ...rest
    },
    ref,
  ) => {

    return (
    <InputContainer className="input-container">
      <InputInnerContainer>
        <StyledInput
          ref={ref}
          id={id}
          type={type}
          value={value}
          placeholder=" "
          required={required}
          aria-invalid={hasError}
          disabled={disabled}
          onChange={onChange}
          inputMode={type === "number" ? "numeric" : "text"}
          maxLength={type === "number" ? 4 : 100}
          minLength={type === "number" ? 4 : 1}
          pattern={type === "number" ? "[0-9]*" : ""}
          {...inputProps}
          {...validation}
          {...rest}
        />
        <Label htmlFor={id} className="input-label">
          {label}
        </Label>
      </InputInnerContainer>
    </InputContainer>
  );
}
);

export default Input;
