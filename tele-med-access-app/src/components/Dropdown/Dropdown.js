import React, { useState } from "react";
import ChevronDown from "../../assets/svgs/chevron-down.svg";

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
    <div>
      <div onClick={() => setDropdownOpen(!isDropdownOpen)}>
        <label>{label}</label>
        <section>
          <section>
            {selectedOption || "Select an option"}
          </section>
          <image src={ChevronDown} alt="Chevron-Down" />
        </section>
      </div>

      {isDropdownOpen && (
        <section>
          {options.map((option) => (
            <aside
              active={selectedOption === option.label}
              key={option.label}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </aside>
          ))}
        </section>
      )}
    </div>
  );
};

export default Dropdown;
