import React from "react";
import {
  hasConstraintsAndMultipleSelections,
  isAnalysingScreen,
  isNoMatchingConditionsScreen,
  isTypeHealthBackground,
} from "../../utils/chatbot";
import CheckboxLayout from "../Checkbox/CheckboxLayout";
import GeneralScreen from "../../screens/GeneralScreen";
import RadioLayout from "../Radio/RadioLayout";
import AutoCompleteLayout from "./AutoCompleteLayout";
import AnalysingScreen from "../../screens/AnalysingScreen";
import NoMatchingConditions from "../../screens/NoMatchingConditions"

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
