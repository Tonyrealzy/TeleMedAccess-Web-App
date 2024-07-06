import React from "react";
import { css, styled } from "styled-components";

export const Element = styled.a`
  ${({ theme }) =>
    css`
      color: ${theme.secondary.i};
      text-decoration: underline;

      &:where(.article) {
        margin-top: ${theme.spacing.md};
        margin-bottom: ${theme.spacing.lg};
        font-size: ${theme.fontsize.label};
        font-style: normal;
        font-weight: 300;
        line-height: 24px;
      }
    `}
`;

export const LinkContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 10px;

    &:where(.inline) {
      display: inline-block;
    }
  `}
`;
