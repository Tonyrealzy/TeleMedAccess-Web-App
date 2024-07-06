import { useEffect, useState } from "react";
import DetailsConfirmation from "./DetailsConfirmation";
import SymptomConfirmation from "./SymptomConfirmation";

const Confirmation = ({ queryUserData, setChatMessage }) => {
  const [response, setResponse] = useState();
  const [showDetailsConfirmation, setShowDetailsConfirmation] = useState(true);
  const [confirmationFormFields, setConfirmationFormFields] = useState();
  const [btnDisabled, setBtnDisabled] = useState(false);

  useEffect(() => {
    const formFieldsToShow = { ...queryUserData };
    delete formFieldsToShow["initial_symptom"];

    if (!isUserValidYearOfBirth(queryUserData["year_of_birth"])) {
      setBtnDisabled(true);
    }

    setConfirmationFormFields(formFieldsToShow);
    setResponse(queryUserData);
  }, [queryUserData]);

  if (!queryUserData) {
    return null;
  } 

  const handleDetailsChange = (field, value) => {
    const newFormData = { ...response, [field]: value };

    if (field === "year_of_birth" && !isUserValidYearOfBirth(value)) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }

    setResponse(newFormData);
  };

  const handleFormSubmit = () => {
    const chatResponse = { ...response };
    setChatMessage(chatResponse);
  };

  const handleDetailsClick = () => {
    setShowDetailsConfirmation(false);
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
      {showDetailsConfirmation ? (
        <DetailsConfirmation
          inputsToShow={confirmationFormFields}
          formData={response}
          btnDisabled={btnDisabled}
          handleChange={handleDetailsChange}
          handleClick={handleDetailsClick}
        />
      ) : (
        <SymptomConfirmation
          symptom={response?.["initial_symptom"] || ""}
          handleChange={handleDetailsChange}
          handleClick={handleFormSubmit}
        />
      )}
    </>
  );
};

export default Confirmation;
