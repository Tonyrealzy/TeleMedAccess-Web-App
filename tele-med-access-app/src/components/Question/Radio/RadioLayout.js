import { useNavigate } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import Radios from "../../Question/Radio";
import { OverflowContainer } from "./radio.styles";
import ButtonBar from "../../Button/ButtonBar";
import { Button } from "../../Button";
import { isNoSymptomFoundScreen } from "../../../utils/chatbot";


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

  const handleChange = ({ id }) => setCheckedRadio(id);

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

  /*useEffect(() => {
    const preSelected = chatResponse.question.choices?.find(
      (choice) => choice.preselect,
    );

    if (preSelected) {
      setCheckedRadio(preSelected.id);
    }
  }, [chatResponse]);*/

  useEffect(() => {
    setButtonDisabled(!checkedRadio.length);
  }, [checkedRadio]);

  useEffect(() => {
    if (choices.length > 4) {
      setOverflowEnabled(true);
    }
  }, []);

  // useEffect(() => {
  //   if (choices.type === 'generic' && choices.id === 'add_symptoms') {
  //     setButtonDisabled(true);
  //   }
  // }, []);

  if (isNoSymptomFoundScreen(chatResponse.conversation.phase)) {
    return (
      <Button onClick={() => navigate('/initSession')} fullWidth>
        Start a new consultation
      </Button>
    );
  }

  return (
    <>
      <OverflowContainer overflowEnabled={overflowEnabled}>
        <Radios
          choices={choices}
          onChange={handleChange}
          name={type}
          selectedRadio={checkedRadio}
        />
      </OverflowContainer>

      <ButtonBar
        disabled={buttonDisabled}
        onClick={handleClick}
        buttonText="Continue"
        backButtonShow={chatResponse.conversation.step_back_possible}
        handleBackButton={handleBackButtonClick}
      />
    </>
  );
};

export default RadioLayout;
