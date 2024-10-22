import React from "react";
import getTriageInfo from "../../utils/getTriageInformation";
import {
  ArticleContainer,
  StyledMarkdown,
  SummaryHeadingContainer,
} from "./report.styles";
import { getConsultationType } from "../../utils/consultation";
import Heading from "../Heading";
import Badge from "../Badge";

const Summary = ({ children, level }) => {
  const { title, type } = getTriageInfo(level);
  const consultationType = getConsultationType(type, title);

  return (
    <ArticleContainer className={consultationType} summary="true">
      <Badge kind={consultationType} />
      <div>
        <SummaryHeadingContainer>
          <Heading as="h2" kind="report">
            {title}
          </Heading>
        </SummaryHeadingContainer>
        <StyledMarkdown dangerouslySetInnerHTML={{ __html: children }} />
      </div>
    </ArticleContainer>
  );
};

export default Summary;
