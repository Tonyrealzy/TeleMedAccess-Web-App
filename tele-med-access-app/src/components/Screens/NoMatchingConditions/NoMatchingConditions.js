import React from "react";
import openLink from "../../../media/open-link.svg";
import {
  ArticleName,
  ConditionContainer,
  TitleDiv,
} from "./NoMatchingContitions.styles";
import ButtonBar from "../../Button/ButtonBar";
import { useNavigate } from "react-router-dom";


const NoMatchingConditions = ({
  chatResponse,
}) => {
  const navigate = useNavigate();
  const articles = chatResponse.report?.articles || [];
  return (
    <>
      {articles.map((article) => (
        <ConditionContainer>
          <a href={article.urls.web} target="_blank">
            <TitleDiv>
              <ArticleName>{article.name}</ArticleName>
              <img src={openLink} alt="open-link" width="15" />
            </TitleDiv>
            <p>{article.snippet}</p>
          </a>
        </ConditionContainer>
      ))}
      <ButtonBar
        buttonText="Start over"
        onClick={() => navigate(-1)}
        disabled={false}
      />
    </>
  );
};

export default NoMatchingConditions;
