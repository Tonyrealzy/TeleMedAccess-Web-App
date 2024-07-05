import Heading from "../Heading";
import PrimaryButton from "../Button/PrimaryButton";

const SymptomConfirmation = ({ symptom, handleClick, handleChange }) => {
  return (
    <>
      <Heading kind="heading" as="h1">
        What symptoms do you have?
      </Heading>
      <Heading as="p" kind="hint">
        Please use short sentences. For example: Headache behind eyes
      </Heading>
      <form>
        <input
          value={symptom}
          id="initial_symptom"
          onChange={(e) =>
            handleChange("initial_symptom", e?.target.value || "")
          }
        />
      </form>
      <PrimaryButton disabled={!symptom} onClick={handleClick}>
        Continue
      </PrimaryButton>
    </>
  );
};

export default SymptomConfirmation;
