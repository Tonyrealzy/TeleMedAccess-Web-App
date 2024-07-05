import React from "react";
import Heading from "../Heading";
import Dropdown from "../Dropdown/Dropdown";
import PrimaryButton from "../Button/PrimaryButton";
import { isNumberInput } from "../../utils/chatbot";

const isDropDown = (data) => data.toLowerCase() === "gender";

const DetailsConfirmation = ({
  inputsToShow,
  formData,
  btnDisabled,
  handleChange,
  handleClick,
}) => {
  if (!formData || !inputsToShow) return null;

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const formatLabel = (label) => {
    const withoutUnderscores = label.replace(/_/g, " ");
    return `Your ${withoutUnderscores}`;
  };

  const isDisabled = () => {
    var needToDisable = false;

    if (Object.keys(inputsToShow).some((field) => !formData[field])) {
      needToDisable = true;
    }

    if (!needToDisable && btnDisabled) {
      needToDisable = true;
    }
    return needToDisable;
  };

  const currentYear = new Date().getFullYear();
  const maxUserYear = currentYear - 16;
  const minUserYear = 1900;

  const isUserValidYearOfBirth = (inputValue) => {
    const usersYearOfBirth = parseInt(inputValue, 10);
    if (isNaN(usersYearOfBirth)) {
      return false;
    }
    if (usersYearOfBirth < minUserYear || usersYearOfBirth > maxUserYear) {
      return false;
    } else return true;
  };

  return (
    <>
      <Heading kind="heading" as="h1">
        Confirm your details
      </Heading>
      <Heading as="p" kind="primary">
        This information can affect the outcome of the assessment so check that
        they are correct.
      </Heading>
      <form>
        {Object.keys(inputsToShow).map((field) => {
          if (isDropDown(field)) {
            return (
              <div key={field}>
                <Dropdown
                  label={"Your assigned sex at birth"}
                  options={genderOptions}
                  queryParamOption={
                    genderOptions.find(
                      (option) => option.value === formData[field]
                    ) || { label: "Please Select", value: "" }
                  }
                  onSelect={({ value }) => handleChange("gender", value)}
                />
                <Heading as="p" kind="hint">
                  This will help make our symptoms checker more accurate for
                  you. (We appreciate your identifying gender might be
                  different.)
                </Heading>
              </div>
            );
          } else {
            return (
              <div key={field}>
                <label>{formData[field]}</label>
                <label>{formatLabel(field)}</label>
                <input
                  key={field}
                  id={field}
                  onChange={(e) => handleChange(field, e?.target.value || "")}
                  type={isNumberInput(field) ? "number" : "text"}
                />

                {field === "year_of_birth" &&
                !isUserValidYearOfBirth(formData[field]) ? (
                  <p>
                    {`Wrong input for year of birth ${formData[field]}. Minimum year: 1900, Maximum year: ${maxUserYear} (minimum age for usage is 16)`}
                  </p>
                ) : null}
              </div>
            );
          }
        })}
      </form>

      <PrimaryButton disabled={isDisabled()} onClick={handleClick}>
        Continue
      </PrimaryButton>
    </>
  );
};

export default DetailsConfirmation;
