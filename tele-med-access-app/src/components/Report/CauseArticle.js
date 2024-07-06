import React from "react";
import {
  CauseArticleContainer,
  CauseArticleContent,
  CauseArticleHeading,
  CauseArticleImage,
  CauseArticleInnerContainer,
  CauseArticleReadTime,
  CauseArticleSnippet,
} from "./report.styles";

const CauseArticle = ({ article }) => {
  const { content, metadata, urls } = article;
  const { name, snippet } = content;
  const { reading_time_minutes, image } = metadata;

  return (
    <CauseArticleContainer
      href={urls.web}
      target="_blank"
      rel="noopener,noreferrer"
    >
      <CauseArticleContent>
        {image && (
          <div>
            <CauseArticleImage
              src={image}
              width={60}
              height={60}
              alt="Article Image"
            />
          </div>
        )}
        <CauseArticleInnerContainer>
          <CauseArticleReadTime>
            {`${reading_time_minutes} min read`}
          </CauseArticleReadTime>
          <CauseArticleHeading>{name}</CauseArticleHeading>
          <CauseArticleSnippet>{`${snippet.slice(
            0,
            120,
          )} ...`}</CauseArticleSnippet>
        </CauseArticleInnerContainer>
      </CauseArticleContent>
    </CauseArticleContainer>
  );
};

export default CauseArticle;
