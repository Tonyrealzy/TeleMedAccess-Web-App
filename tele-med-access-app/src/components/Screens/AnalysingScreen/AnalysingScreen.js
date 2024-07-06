import ButtonBar from "../../Button/ButtonBar";
import React from "react";


const AnalysingScreen = ({
  chatResponse,
  setChatMessage,
}) => {
  const handleClick = (id) => {
    const type = chatResponse.question.type;
    const body = {
      answer: {
        type,
        input: {
          exclude: [],
          include: [id],
        },
      },
      conversation: {
        id: chatResponse.conversation.id,
      },
    };

    setChatMessage(body);
  };
  return (
    <>
      <ButtonBar
        disabled={false}
        onClick={() => handleClick("OK")}
        buttonText={"I understand"}
      />
    </>
  );
};

export default AnalysingScreen;
