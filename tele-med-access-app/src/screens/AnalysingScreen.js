import PrimaryButton from "../components/Button/PrimaryButton";

const AnalysingScreen = ({ chatResponse, setChatMessage }) => {
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
      <PrimaryButton disabled={false} onClick={() => handleClick("OK")}>
        I understand
      </PrimaryButton>
    </>
  );
};

export default AnalysingScreen;
