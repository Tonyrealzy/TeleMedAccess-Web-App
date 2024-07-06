import React from "react";
import { useState, useEffect } from "react";
import { Checkbox } from "./index";
import { getCheckedCount, showNoneOfTheseButton } from "../../../utils/chatbot";
import ButtonBar from "../../Button/ButtonBar";
import { ButtonBackgroundDiv } from "../../Button/button.styles";
import { OverflowContainer, StyledDivider } from "./checkbox.styles";


const CheckboxLayout = ({
  choices = [],
  buttonText,
  chatResponse,
  setChatMessage,
  handleBackButton,
}) => {
  const initialState = new Array(choices.length).fill(false);
  const [checkedCheckboxes, setCheckedCheckbox] = useState(initialState);
  const [noneOfThese, setNoneOfThese] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [overflowEnabled, setOverflowEnabled] = useState(false);

  const question = chatResponse.question;
  const type = question.type;
  /*useEffect(() => {
    const preSelected = chatResponse.question.choices?.map(
      (choice) => !!choice.preselect,
    );

    if (preSelected) {
      setCheckedCheckbox(preSelected);
      if (preSelected.every((value) => !value)) {
        setButtonDisabled(true);
      } else {
        setButtonDisabled(false);
      }
    }
  }, []);*/

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedCheckboxes.map((item, index) =>
      index === position ? !item : item,
    );

    if (noneOfThese) setNoneOfThese(false);

    setCheckedCheckbox(updatedCheckedState);

    if (getCheckedCount(updatedCheckedState)) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const handleNoneOfThese = () => {
    setNoneOfThese(!noneOfThese);
    setCheckedCheckbox(initialState);
    if (!noneOfThese) setButtonDisabled(false);
    else setButtonDisabled(true);
  };

  const handleClick = async () => {
    setButtonDisabled(true);
    setCheckedCheckbox(new Array(choices.length).fill(false));

    const indexes = checkedCheckboxes
      .map((element, index) => (element === true ? index : ""))
      .filter(String);

    const include = indexes.map((index) => choices[index]);
    const ids = include.map((item) => item.id);
    const exclude = choices.filter((choice) => !ids.includes(choice.id));

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

    setButtonDisabled(false);
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
    if (choices.length > 4) {
      setOverflowEnabled(true);
    }

    console.log(question);
  }, []);

  return (
    <>
      <OverflowContainer overflowEnabled={overflowEnabled}>
        {choices.map(({ id, label = "", long_name = "", text = "" }, index) => (
          <Checkbox
            key={id}
            name={label || ""}
            checked={checkedCheckboxes[index]}
            id={id}
            onChange={() => handleOnChange(index)}
            label={long_name || label || text}
          />
        ))}
        {showNoneOfTheseButton(question) && (
          <>
            <StyledDivider />
            <Checkbox
              id={"health_background"}
              name="name"
              label={"None of these"}
              checked={noneOfThese}
              onChange={() => handleNoneOfThese()}
            />
          </>
        )}
      </OverflowContainer>

      <ButtonBackgroundDiv>
        <ButtonBar
          disabled={buttonDisabled}
          onClick={handleClick}
          buttonText="Continue"
          backButtonShow={chatResponse.conversation.step_back_possible}
          handleBackButton={handleBackButtonClick}
        />
      </ButtonBackgroundDiv>
    </>
  );
};

export default CheckboxLayout;