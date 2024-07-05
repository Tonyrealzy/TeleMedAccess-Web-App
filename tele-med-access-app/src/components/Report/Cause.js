import ReactMarkdown from "react-markdown";
import Heading from "../Heading/index";
import Accordian from "./Accordian";
import {
  ArticleContainer,
  ArticleNumber,
  CauseImage,
  CauseImageContainer,
  CauseSnippet,
  CauseWrapper,
} from "./ReportStyles";
import Bullets from "../Bullets/Bullets";


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
      <ArticleContainer className="light cause">
        <CauseWrapper>
          <ArticleNumber>{index + 1}</ArticleNumber>
          <Heading as="h1" kind="tertiary">
            {name}
          </Heading>
          <CauseSnippet>{snippet}</CauseSnippet>
          {urls.web && (
            <a href={urls.web} className="article">
              View Article
            </a>
          )}
          {metadata.image && (
            <CauseImageContainer>
              <CauseImage
                alt={name}
                src={metadata.image}
                width={313}
                height={313}
              />
            </CauseImageContainer>
          )}
        </CauseWrapper>
      </ArticleContainer>
      {triage_diagnostic && (
        <ArticleContainer className="light tight">
          <Accordian header="How is this diagnosed?">
            <ReactMarkdown
              children={triage_diagnostic}
              components={{
                ul: ({ node, ...props }) => <Bullets {...props} />,
                a: ({ node, ...props }) => <link {...props} inline />,
              }}
            />
          </Accordian>
        </ArticleContainer>
      )}
      {triage_treatment && (
        <ArticleContainer className="light tight">
          <Accordian header="Treatment">
            <ReactMarkdown
              children={triage_treatment}
              components={{
                ul: ({ node, ...props }) => <Bullets {...props} />,
                a: ({ node, ...props }) => <link {...props} inline />,
              }}
            />
          </Accordian>
        </ArticleContainer>
      )}
      {triage_worries && (
        <ArticleContainer className="light tight">
          <Accordian header="When to worry?">
            <ReactMarkdown
              children={triage_worries}
              components={{
                ul: ({ node, ...props }) => <Bullets {...props} />,
                a: ({ node, ...props }) => <link {...props} inline />,
              }}
            />
          </Accordian>
        </ArticleContainer>
      )}
    </div>
  );
};

export default Cause;
