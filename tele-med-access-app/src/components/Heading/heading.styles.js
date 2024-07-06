import React from "react";
import { css, styled } from "styled-components";

export const Element = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontsize.description};
    font-family: Poppins, sans-serif;
    margin-top: 25px;
    &:where(.primary) {
      font-weight: ${theme.fontweight.medium};
      color: ${theme.shade.m};
      line-height: 16px;
    }

    &:where(.heading) {
      font-size: ${theme.fontsize.heading};
      font-weight: ${theme.fontweight.heavy};
      line-height: 28px;
      color: ${theme.colors.darkText};
    }

    &:where(.hint) {
      font-size: ${theme.fontsize.xs};
      line-height: 16px;
      color: ${theme.shade.m};
    }

    &:where(.report) {
      font-size: ${theme.fontsize.label};
      margin: 0;
      line-height: 24px;
      font-weight: 700;
    }

    &:where(.tertiary) {
      font-weight: ${theme.fontweight.bold};
      font-size: ${theme.fontsize.smallHeading};
      font-style: normal;
      font-weight: 600;
      line-height: 22px;
      margin-bottom: ${theme.spacing.sm};
    }

    &:where(.center) {
      text-align: center;
    }
  `}
`;
