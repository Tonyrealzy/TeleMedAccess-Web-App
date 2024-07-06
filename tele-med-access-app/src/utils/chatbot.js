
export const isOnboardingScreen = (chatResponse) =>
  chatResponse.conversation.scenario === "on_boarding";

export const getLabel = (questions) =>
  questions.length && questions[questions.length - 1];

const isMinSelectionsZero = (constraints) =>
  constraints?.min_selections === 0;

export const hasConstraintsAndMultipleSelections = (constraints) =>
  constraints && constraints?.max_selections > constraints?.min_selections;

export const isTypeHealthBackground = (type) =>
  type === "health_background";

export const showNoneOfTheseButton = (question) =>
  isTypeHealthBackground(question.type) ||
  (isMinSelectionsZero(question?.constraints) &&
    hasConstraintsAndMultipleSelections(question?.constraints));

export const isButtonDisabled = (question) =>
  showNoneOfTheseButton(question);

export const getCheckedCount = (checkedCheckboxes) =>
  checkedCheckboxes.filter(Boolean).length;

export const isAnalysingScreen = (chatResponse) =>
  chatResponse.conversation.scenario === "consultation_routine" &&
  chatResponse.conversation.phase === "pre_diagnosis";

export const isNoMatchingConditionsScreen = (chatResponse) =>
  chatResponse.conversation.phase === "info_result";

export const isNumberInput = (type) => type === "year_of_birth";

export const isNoSymptomFoundScreen = (phase) =>
  phase === "no_symptom_found";
