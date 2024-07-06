import { styled, css } from "styled-components";

export const ConditionContainer = styled.div`
  ${({ theme }) => css`
    border-radius: 7px;
    padding: 10px;
    background: ${theme.shade.d};
    margin-bottom: 10px;
  `};
`;
export const TitleDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
  `};
`;

export const ArticleName = styled.h4`
  ${({ theme }) => css`
    padding: 0;
    margin: 0;
    margin-right: 10px;
  `};
`;
