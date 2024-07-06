import { css, styled } from "styled-components";

export const ArticleContainer = styled.div`
  ${({ theme, summary }) => css`
    display: flex;
    padding: ${theme.spacing.md} ${theme.spacing.sm};
    font-size: ${theme.fontsize.body};
    font-weight: ${theme.fontweight.medium};
    line-height: 16px;
    align-items: ${summary ? "flex-start" : "center"};
    margin-bottom: ${theme.spacing.sm};
    border-radius: ${theme.radius.report};
    cursor: ${summary ? "default" : "pointer"};

    &:where(.success) {
      background-color: ${summary
        ? theme.shade.a
        : theme.secondary.summarySuccess};
      border: ${summary ? "3px" : "1px"} solid ${theme.secondary.o};
    }

    &:where(.info) {
      border: ${summary ? "3px" : "1px"} solid ${theme.secondary.z};
      background-color: ${theme.shade.a};
    }

    &:where(.danger) {
      border: ${summary ? "3px" : "1px"} solid ${theme.secondary.r};
      background-color: ${summary ? theme.shade.a : theme.shade.l};
    }

    &:where(.warning) {
      border: ${summary ? "3px" : "1px"} solid ${theme.secondary.s};
      background-color: ${theme.shade.a};
    }

    &:where(.no-outcome) {
      border: ${summary ? "3px" : "1px"} solid ${theme.shade.f};
      background-color: ${theme.shade.a};
    }

    &:where(.light) {
      background-color: ${theme.shade.a};
      border: 1px solid ${theme.shade.d};
      flex-direction: column;
      place-items: start;
      place-content: start;
      margin-top: ${theme.spacing.md};
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
      background-color: ${theme.shade.b};
      padding: ${theme.spacing.md};
      font-size: ${theme.fontsize.xs};
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      border-radius: 0px;
    }
  `}
`;

export const ArticleInnerContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ArticleNumber = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 24px;
    height: 24px;
    padding: 5px 0;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    background: ${theme.colors.darkText};
    color: ${theme.shade.a};
    margin-right: 12px;
    border-radius: 3px;
  `}
`;

export const Chevron = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacing.xs};
  `}
`;

export const CauseimgContainer = styled.div`
  ${({ theme }) => css`
    height: 300px;
    margin: ${theme.spacing.lg} 0;
  `}
`;

// export const Causeimg = styled.img`
//   ${({ theme }) => css`
//     position: relative !important;
//     margin: 0 auto;
//     border-radius: ${theme.radius.report};
//   `}
// `;

export const CauseSnippet = styled.span`
  ${({ theme }) => css`
    margin: ${theme.spacing.sm} 0;
    font-size: ${theme.fontsize.label};
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: ${theme.shade.h};
  `}
`;

export const StyledSmallText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontsize.xs};
    line-height: 16px;
    text-align: left;
    color: ${theme.shade.i};
    padding-left: 0px;
    @media (min-width: ${theme.device.md}) {
      padding-left: 8px;
    }
  `}
`;

export const ReportHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledMarkdown = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontsize.body};
    font-weight: ${theme.fontweight.medium};
    line-height: 16px;
  `}
`;

export const AccordianSummary = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 ${theme.spacing.sm};
    cursor: pointer;

    &:focus {
      outline: 1px solid ${theme.secondary.i};
    }

    &:focus-within {
      isolation: isolate;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing.lg} ${theme.spacing.md};
    width: 100%;
  `}
`;

export const DurationText = styled.p`
  text-align: center;
`;

export const SummaryHeadingContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: ${theme.spacing.sm};
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing.xl} 0px;

    button {
      margin-bottom: ${theme.spacing.sm};
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacing.xxl};
  `}
`;

export const BackImage = styled.div`
  cursor: pointer;
`;

export const CauseWrapper = styled.div`
  ${({ theme }) => css`
    padding: 0 ${theme.spacing.sm};
  `}
`;

export const CauseArticleContainer = styled.a`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    width: 100%;
    cursor: pointer;
  `}
`;

export const CauseArticleContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  `}
`;

export const CauseArticleImage = styled.div`
  ${({ theme }) => css`
    border-radius: 4px;
    margin-right: ${theme.spacing.md};
  `}
`;

export const CauseArticleReadTime = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fontsize.xs};
    line-height: 16px;
    color: ${theme.shade.f};
  `}
`;

export const CauseArticleHeading = styled.span`
  ${({ theme }) => css`
    color: ${theme.secondary.i};
    font-size: ${theme.fontsize.label};
    font-weight: ${theme.fontweight.heavy};
    text-decoration: underline;
    line-height: 20px;
    display: block;
    margin-top: ${theme.spacing.sm};

    @media (min-width: ${theme.device.md}) {
      font-size: ${theme.fontsize.heading};
    }
  `}
`;

export const CauseArticleSnippet = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.darkText};
    font-size: ${theme.fontsize.body};
    line-height: 16px;
    font-weight: ${theme.fontweight.medium};
    margin: ${theme.spacing.sm} 0;
  `}
`;

export const CauseArticleInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
