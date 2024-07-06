import React from "react";
import {
  ArticleContainer,
  ArticleInnerContainer,
  ArticleNumber,
  Chevron,
} from "./report.styles";
import Heading from "../Heading";
import classNames from "classnames";
import getTriageInfo from "../../utils/getTriageInformation";

import ChevronRight from "../../media/chevron-right.svg";

const Articles = ({ articles = [], onClick }) => {
  return (
    <>
      {articles.map(({ name, content }, index) => (
        <ArticleContainer
          className={classNames(getTriageInfo(content.triage.triage).type)}
          onClick={() => onClick(index)}
          key={name}
        >
          <ArticleInnerContainer>
            <ArticleNumber>{index + 1}</ArticleNumber>
            <div>
              <Heading as="h2" kind="report">
                {name}
              </Heading>
              <p>{content.triage.triage_message}</p>
            </div>
          </ArticleInnerContainer>
          <Chevron src={ChevronRight} alt="chevron-down" />
        </ArticleContainer>
      ))}
    </>
  );
};

export default Articles;
