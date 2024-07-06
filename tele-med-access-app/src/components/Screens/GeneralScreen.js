import React, { useEffect, useState } from "react";
import Input from "../Question/Input";
import ButtonBar from "../Button/ButtonBar";
import { isNumberInput } from "../../utils/chatbot";
import { WarningText } from "../Question/Input/input.styles";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";


const formatLabel = (label) => {
  const withoutUnderscores = label.replace(/_/g, " ");

  return (
    withoutUnderscores.charAt(0).toLocaleUpperCase() +
    withoutUnderscores.slice(1)
  );
};

const GeneralScreen = ({
  chatResponse,
  buttonText,
  setChatMessage,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const { type } = chatResponse.question;
  const navigate = useNavigate();

  const handleClick = async () => {
    const body = {
      answer: {
        type,
        value: inputValue,
      },
      conversation: {
        id: chatResponse.conversation.id,
      },
    };

    setChatMessage(body);
    setInputValue("");
  };
  const isYearOfBirthStage = () =>
    chatResponse.question.messages[0].text === "What year were you born?";

  const currentYear = new Date().getFullYear();
  const maxUserYear = currentYear - 16;
  const minUserYear = 1900;

  const isUserValidYearOfBirth = () => {
    const usersYearOfBirth = parseInt(inputValue, 10);
    if (isNaN(usersYearOfBirth)) {
      return false;
    }
    if (usersYearOfBirth < minUserYear || usersYearOfBirth > maxUserYear) {
      return false;
    } else return true;
  };

  useEffect(() => {

    var disabled = false;

    if (isYearOfBirthStage() && !isUserValidYearOfBirth()) {
      disabled = true;
      console.log("Valid Year: " + isUserValidYearOfBirth());
    }

    if (!inputValue.length)
    {
      disabled = true;
    }

    setIsDisabled(disabled);
  }, [inputValue]);

  //useEffect(() => {
  //  setIsDisabled(!inputValue.length);
  //}, [inputValue]);

  if (chatResponse.conversation.phase === undefined) {
    return (
      <Button onClick={() => navigate('/')} fullWidth>
        Start a new consultation
      </Button>
    );
  }

  return (
    <>
      <Input
        value={inputValue}
        id={type}
        label={formatLabel(type)}
        onChange={(e) => setInputValue(e?.target.value || "")}
        type={isNumberInput(type) ? "number" : "text"}
      />

      {isYearOfBirthStage() &&
      !isUserValidYearOfBirth() &&
      inputValue.length > 3 ? (
        <WarningText>
          {`Wrong input for year of birth ${inputValue}. Minimum year: 1900, Maximum year: ${maxUserYear} (minimum age for usage is 16)`}
        </WarningText>
      ) : null}

      <ButtonBar
        disabled={isDisabled}
        onClick={handleClick}
        buttonText="Continue"
        backButtonShow={chatResponse.conversation.step_back_possible}
      />
    </>
  );
};

export default GeneralScreen;