import { styled } from "styled-components";

export const ArticleContainer = styled.div`
  display: flex;
  padding: 16px 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  cursor: "pointer";

  &:where(.success) {
    background-color: #f5f5f5;
    border: "1px solid #d0e9c6";
  }

  &:where(.info) {
    border: "1px solid #d0e9c6";
    background-color: #f5f5f5;
  }

  &:where(.danger) {
    background-color: #f2dede;
    border: "1px solid #ebccd1";
  }

  &:where(.warning) {
    background-color: #f5f5f5;
    border: "1px solid #faebcc";
  }

  &:where(.no-outcome) {
  background-color: #f5f5f5;
    border: "1px solid #999";
  }

  &:where(.light) {
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
    flex-direction: column;
    place-items: start;
    place-content: start;
    margin-top: 16px;
  }

  &:where(.tight) {
    margin: 0;
    border-radius: 0;
    border-top: 0;
    cursor: default;
  }

  &:where(.cause) {
    margin-bottom: 0;
    border-radius: 3px 3px 0 0;
  }

  &:where(.dark) {
    background-color: #333;
    padding: 16px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    border-radius: 0px;
  }
`;

export const ArticleInnerContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ArticleNumber = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 5px 0;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: #333;
  color: #f5f5f5;
  margin-right: 12px;
  border-radius: 3px;
`;

export const Chevron = styled.div`
  margin-left: 4px;
`;

export const CauseImageContainer = styled.div`
  height: 300px;
  margin: 24px 0;
`;

export const CauseImage = styled.div`
  position: relative !important;
  margin: 0 auto;
  border-radius: 8px;
`;

export const CauseSnippet = styled.span`
  margin: 8px 0;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
  color: #666;
`;

export const StyledSmallText = styled.p`
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  color: #999;
  padding-left: 0px;
  @media (min-width: 768px) {
    padding-left: 8px;
  }
`;

export const ReportHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledMarkdown = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
`;

export const AccordianSummary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 8px;
  cursor: pointer;

  &:focus {
    outline: 1px solid #999;
  }

  &:focus-within {
    isolation: isolate;
  }
`;

export const Content = styled.div`
  padding: 24px 16px;
  width: 100%;
`;

export const DurationText = styled.p`
  text-align: center;
`;

export const SummaryHeadingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 8px;
`;

export const ButtonContainer = styled.div`
  margin: 32px 0px;

  button {
    margin-bottom: 8px;
  }
`;

export const Wrapper = styled.div`
  padding-bottom: 48px;
`;

export const BackImage = styled.div`
  cursor: pointer;
`;

export const CauseWrapper = styled.div`
  padding: 0 8px;
`;

export const CauseArticleContainer = styled.a`
  align-items: center;
  display: flex;
  width: 100%;
  cursor: pointer;
`;

export const CauseArticleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
`;

export const CauseArticleImage = styled.div`
  border-radius: 4px;
  margin-right: 16px;
`;

export const CauseArticleReadTime = styled.span`
  font-size: 12px;
  line-height: 16px;
  color: #999;
`;

export const CauseArticleHeading = styled.span`
  color: #999;
  font-size: 12px;
  font-weight: 700;
  text-decoration: underline;
  line-height: 20px;
  display: block;
  margin-top: 8px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CauseArticleSnippet = styled.p`
  color: #333;
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  margin: 8px 0;
`;

export const CauseArticleInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
