import { useEffect, useState, useNavigate } from "react";
import { isNoSymptomFoundScreen } from "../../utils/chatbot";
import PrimaryButton from "../Button/PrimaryButton";
import Radios from "./Radios";

const RadioLayout = ({
  choices = [],
  chatResponse,
  setChatMessage,
  handleBackButton,
}) => {
  const [checkedRadio, setCheckedRadio] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [overflowEnabled, setOverflowEnabled] = useState(false);
  const type = chatResponse.question.type;
  const navigate = useNavigate();

  const handleChange = (id) => setCheckedRadio(id);

  const handleClick = async () => {
    setCheckedRadio("");

    const exclude = choices.filter((choice) => choice.id !== checkedRadio);
    const include = choices.filter((choice) => choice.id === checkedRadio);
    const isAnswerTypeGeneric = type === "generic";

    const answerInputs = isAnswerTypeGeneric
      ? {
          input: {
            exclude: exclude.map((item) => item.id),
            include: include.map((item) => item.id),
          },
        }
      : {
          selection: include.map((item) => item.id),
        };

    const body = {
      answer: {
        type,
        ...answerInputs,
      },
      conversation: {
        id: chatResponse.conversation.id,
      },
    };
    if (checkedRadio.length > 0) {
      setButtonDisabled(false);
    }
    setChatMessage(body);
  };

  const handleBackButtonClick = () => {
    const body = {
      answer: {
        type: "step_back",
      },
      conversation: {
        id: chatResponse.conversation.id,
      },
    };

    handleBackButton(body);
  };

  useEffect(() => {
    setButtonDisabled(!checkedRadio.length);
  }, [checkedRadio]);

  useEffect(() => {
    if (choices.length > 4) {
      setOverflowEnabled(true);
    }
  }, []);

  if (isNoSymptomFoundScreen(chatResponse.conversation.phase)) {
    return (
      <PrimaryButton onClick={() => navigate("/condition")}>
        Start a new consultation
      </PrimaryButton>
    );
  }
  return (
    <>
      <div overflowEnabled={overflowEnabled}>
        <Radios
          choices={choices}
          onChange={handleChange}
          name={type}
          selectedRadio={checkedRadio}
        />
      </div>

      <PrimaryButton disabled={buttonDisabled} onClick={handleClick}>
        Continue
      </PrimaryButton>

      <PrimaryButton
        onClick={handleBackButtonClick}
        disabled={!chatResponse.conversation.step_back_possible}
      >
        Back
      </PrimaryButton>
    </>
  );
};

export default RadioLayout;
