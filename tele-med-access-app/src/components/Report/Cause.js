import ReactMarkdown from "react-markdown";
import React from "react";
import Heading from "../Heading";
import Link from "../Link";
import Accordian from "./Accordian";
import {
  ArticleContainer,
  ArticleNumber,
  CauseSnippet,
  CauseWrapper,
} from "./report.styles";
import Bullets from "../Bullets/Bullets";
import classNames from "classnames";

const Cause = ({ article, index }) => {
  if (!article || index === undefined) return null;

  const {
    content: {
      triage: { triage_diagnostic, triage_treatment, triage_worries },
      snippet,
    },
    name,
    urls,
    metadata,
  } = article;

  return (
    <div>
      <ArticleContainer className={classNames("light", "cause")}>
        <CauseWrapper>
          <ArticleNumber>{index + 1}</ArticleNumber>
          <Heading as="h1" kind="tertiary">
            {name}
          </Heading>
          <CauseSnippet>{snippet}</CauseSnippet>
          {urls.web && (
            <Link href={urls.web} className="article">
              View Article
            </Link>
          )}
          {/* {metadata.image && (
            <CauseImageContainer>
              <CauseImage
                alt={name}
                src={metadata.image}
                width={313}
                height={313}
              />
            </CauseImageContainer>
          )} */}
        </CauseWrapper>
      </ArticleContainer>
      {triage_diagnostic && (
        <ArticleContainer className={classNames("light", "tight")}>
          <Accordian header="How is this diagnosed?">
            <ReactMarkdown
              children={triage_diagnostic}
              components={{
                ul: ({ node, ...props }) => <Bullets {...props} />,
                a: ({ node, ...props }) => <Link {...props} inline />,
              }}
            />
          </Accordian>
        </ArticleContainer>
      )}
      {triage_treatment && (
        <ArticleContainer className={classNames("light", "tight")}>
          <Accordian header="Treatment">
            <ReactMarkdown
              children={triage_treatment}
              components={{
                ul: ({ node, ...props }) => <Bullets {...props} />,
                a: ({ node, ...props }) => <Link {...props} inline />,
              }}
            />
          </Accordian>
        </ArticleContainer>
      )}
      {triage_worries && (
        <ArticleContainer className={classNames("light", "tight")}>
          <Accordian header="When to worry?">
            <ReactMarkdown
              children={triage_worries}
              components={{
                ul: ({ node, ...props }) => <Bullets {...props} />,
                a: ({ node, ...props }) => <Link {...props} inline />,
              }}
            />
          </Accordian>
        </ArticleContainer>
      )}
    </div>
  );
};

export default Cause;
