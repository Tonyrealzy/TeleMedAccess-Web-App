import React, { useState } from "react";
import {
  Container,
  DropdownList,
  Label,
  Option,
  SelectedOption,
  SelectedOptionContainer,
} from "./dropdown.styles";
import ChevronDown from "../../media/chevron-down.svg";


const Dropdown = ({
  options,
  onSelect,
  queryParamOption,
  label,
}) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(queryParamOption.label);

  const handleOptionSelect = (option) => {
    setSelectedOption(option.label);
    setDropdownOpen(false);
    onSelect(option);
  };

  return (
    <Container>
      <div onClick={() => setDropdownOpen(!isDropdownOpen)}>
        <Label>{label}</Label>
        <SelectedOptionContainer>
          <SelectedOption>
            {selectedOption || "Select an option"}
          </SelectedOption>
          <img src={ChevronDown} alt="chevron-down" />
        </SelectedOptionContainer>
      </div>

      {isDropdownOpen && (
        <DropdownList>
          {options.map((option) => (
            <Option
              active={selectedOption === option.label}
              key={option.label}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </Option>
          ))}
        </DropdownList>
      )}
    </Container>
  );
};

export default Dropdown;
