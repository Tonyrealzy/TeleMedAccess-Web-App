import React from "react";
import { Input, Label } from "./radio.styles";


const Radio = ({
  value,
  onChecked,
  label,
  name,
  checked,
}) => (
  <>
    <Input
      id={`${name}-${value}`}
      type="radio"
      name={name}
      value={value}
      onChange={onChecked}
      checked={checked}
    />
    <Label htmlFor={`${name}-${value}`}>
      <span>{label}</span>
    </Label>
  </>
);

const Radios = ({
  choices = [],
  onChange,
  name,
  selectedRadio,
}) => (
  <>
    {Array.isArray(choices) &&
      choices.length > 0 &&
      choices.map((choice) => {
        const { id, text = "", label = "" } = choice;
        return (
          <Radio
            key={id}
            value={id}
            onChecked={() => onChange(choice)}
            label={label || text}
            name={name}
            checked={selectedRadio === id}
          />
        );
      })}
  </>
);

export default Radios;
