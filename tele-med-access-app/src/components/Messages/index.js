import React from "react";

import ArticleContainer from "../Article";
import Heading from "../Heading";
import { updateLinks } from "../../utils/link";
import { isAnalysingScreen } from "../../utils/chatbot";

const Message = ({ message, messageNumber, scenario }) => {
  const { text, type, value } = message;
  const noSymptomsMessage = `I'm sorry, I couldn't find your symptoms`;
  let headingType = "heading";

  if (value && value?.length > 100)
  {
    headingType = "tertiary";
  }

  if (type === "generic") {
    if (scenario === "chatscript_request") {
      return (
        <>
          <Heading
            as={messageNumber === 0 ? "h1" : "p"}
            kind={messageNumber === 0 ? headingType : "primary"}
          >
            {noSymptomsMessage}
          </Heading>
          <Heading as="p" kind="primary">
            {`Unfortunately, I can't find any symptoms on the information you've
                      told us.`}
            <br />
            <br />
            {`Please see a doctor.`}
          </Heading>
        </>
      );
    }

    return (
      <Heading
        as={messageNumber === 0 ? "h1" : "p"}
        kind={messageNumber === 0 ? headingType : "primary"}
      >
        {updateLinks(value || text)}
      </Heading>
    );
  }

  return (
    <Heading
      as={messageNumber === 0 ? "h1" : "p"}
      kind={messageNumber === 0 ? headingType : "primary"}
    >
      {text}
    </Heading>
  );
};

const Messages = ({ chatResponse }) => {
  if (!chatResponse) return null;

  const { question, conversation } = chatResponse;
  const scenario = conversation.scenario;
  const messages = question && question.messages ? question.messages : [];
  const articles = chatResponse.report?.summary?.articles_v3 || [];
  if (messages.length === 0 && articles.length === 0) return null;

  if (isAnalysingScreen(chatResponse)) {
    return (
      <>
        {messages.map((message, index) => (
          <Message
            message={message}
            key={index}
            messageNumber={index}
            scenario={scenario}
          />
        ))}
        {articles.length > 0 &&
          articles.map(({ name, urls, content }) => (
            <ArticleContainer
              heading={name}
              snippet={content.snippet}
              url={urls?.web}
              key={`article-${name}`}
            />
          ))}
      </>
    );
  } else
    return (
      <>
        {messages.map((message, index) => (
          <Message
            message={message}
            key={index}
            messageNumber={index}
            scenario={scenario}
          />
        ))}
        {articles.length > 0 &&
          articles.map(({ name, urls, content }) => (
            <ArticleContainer
              heading={name}
              snippet={content.snippet}
              url={urls?.web}
              key={`article-${name}`}
            />
          ))}
      </>
    );
};

export default Messages;
