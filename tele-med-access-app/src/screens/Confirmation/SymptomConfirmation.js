import Heading from "../../components/Heading";
import Input from "../../components/Input/Input";
import { FormContainer } from "./confirmation.styles";
import PrimaryButton from "../../components/Button/PrimaryButton";

const SymptomConfirmation = ({ symptom, handleClick, handleChange }) => {
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
      <PrimaryButton disabled={!symptom} onClick={handleClick}>
        Continue
      </PrimaryButton>
    </>
  );
};

export default SymptomConfirmation;
