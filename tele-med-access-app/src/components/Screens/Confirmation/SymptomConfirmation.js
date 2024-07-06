import React from "react";
import Heading from "../../Heading";
import Input from "../../Question/Input";
import { FormContainer } from "./confirmation.styles";
import ButtonBar from "../../Button/ButtonBar";


const SymptomConfirmation = ({
  symptom,
  handleClick,
  handleChange,
}) => {
  return (
    <>
      <Heading kind="heading" as="h1">
        What symptoms do you have?
      </Heading>
      <Heading as="p" kind="hint">
        Please use short sentences. For example: Headache behind eyes
      </Heading>
      <FormContainer>
        <Input
          value={symptom}
          id="initial_symptom"
          label=""
          onChange={(e) =>
            handleChange("initial_symptom", e?.target.value || "")
          }
        />
      </FormContainer>
      <ButtonBar
        disabled={!symptom}
        onClick={handleClick}
        buttonText="Continue"
      />
    </>
  );
};

export default SymptomConfirmation;
