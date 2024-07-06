import React from "react";
import Heading from "../../components/Heading";
import { FormContainer } from "./confirmation.styles";
import Dropdown from "../../components/Dropdown/Dropdown";
import Input from "../../components/Input/Input";
import { isNumberInput } from "../../utils/chatbot";
import PrimaryButton from "../../components/Button/PrimaryButton";

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
        they are correct
      </Heading>
      <FormContainer>
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
                <Input
                  key={field}
                  value={formData[field]}
                  id={field}
                  label={formatLabel(field)}
                  onChange={(e) => handleChange(field, e?.target.value || "")}
                  type={isNumberInput(field) ? "number" : "text"}
                />

                {field === "year_of_birth" &&
                !isUserValidYearOfBirth(formData[field]) ? (
                  <h4>
                    {`Wrong input for year of birth ${formData[field]}. Minimum year: 1900, Maximum year: ${maxUserYear} (minimum age for usage is 16)`}
                  </h4>
                ) : null}
              </div>
            );
          }
        })}
      </FormContainer>

      <PrimaryButton disabled={isDisabled()} onClick={handleClick}>
        Continue
      </PrimaryButton>
    </>
  );
};

export default DetailsConfirmation;
