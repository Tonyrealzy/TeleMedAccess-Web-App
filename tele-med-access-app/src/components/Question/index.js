import React from "react";
import {
  hasConstraintsAndMultipleSelections,
  isAnalysingScreen,
  isNoMatchingConditionsScreen,
  isTypeHealthBackground,
} from "../../utils/chatbot";
import RadioLayout from "./Radio/RadioLayout";
import CheckboxLayout from "./Checkbox/CheckboxLayout";
import GeneralScreen from "../Screens/GeneralScreen";
import AutoCompleteLayout from "./AutoComplete/AutoCompleteLayout";
import AnalysingScreen from "../Screens/AnalysingScreen/AnalysingScreen";
import NoMatchingConditions from "../Screens/NoMatchingConditions/NoMatchingConditions";


const Question = ({
  chatResponse,
  setChatMessage,
  sendSearch,
  handleBackButton,
}) => {
  if (!chatResponse || !chatResponse.question) return null;

  const { question } = chatResponse;
  const buttonText = "Submit";
  const { choices, multiple, type } = question;
  const hasMultipleSelections =
    multiple ||
    hasConstraintsAndMultipleSelections(question.constraints) ||
    isTypeHealthBackground(type);
  const isTypeAutocomplete = type === "autocomplete";

  if (isNoMatchingConditionsScreen(chatResponse)) {
    return <NoMatchingConditions chatResponse={chatResponse} />;
  }

  if (isAnalysingScreen(chatResponse)) {
    return (
      <AnalysingScreen
        chatResponse={chatResponse}
        setChatMessage={setChatMessage}
      />
    );
  }

  if (!choices) {
    return (
      <GeneralScreen
        chatResponse={chatResponse}
        buttonText={buttonText}
        setChatMessage={setChatMessage}
      />
    );
  }

  if (isTypeAutocomplete) {
    return (
      <AutoCompleteLayout
        chatResponse={chatResponse}
        sendSearch={sendSearch}
        setChatMessage={setChatMessage}
      />
    );
  }

  if (Array.isArray(choices) && !hasMultipleSelections) {
    return (
      <RadioLayout
        choices={question.choices}
        buttonText={buttonText}
        chatResponse={chatResponse}
        setChatMessage={setChatMessage}
        handleBackButton={handleBackButton}
      />
    );
  }

  if (Array.isArray(choices) && hasMultipleSelections) {
    return (
      <CheckboxLayout
        choices={question.choices}
        buttonText={buttonText}
        chatResponse={chatResponse}
        setChatMessage={setChatMessage}
        handleBackButton={handleBackButton}
      />
    );
  }
};

export default Question;
