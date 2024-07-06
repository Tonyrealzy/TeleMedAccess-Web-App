import {
  Label,
  StyledCheckbox,
  StyledLabel,
} from "./checkbox.styles";

export const Checkbox = ({
  onChange,
  id,
  name,
  checked,
  label,
  simple = false,
}) => {
  const handleLabelClick = () => {
    onChange();
  };

  return (
    <>
      <Label simple={simple} onClick={handleLabelClick} id={id}>
        <StyledCheckbox
          type="checkbox"
          id={id}
          name={name}
          value={id}
          onChange={onChange}
          checked={checked}
        />
        <StyledLabel simple={simple} onClick={handleLabelClick}>
          {label}
        </StyledLabel>
      </Label>
    </>
  );
};
