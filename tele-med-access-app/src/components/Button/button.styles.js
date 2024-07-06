import React from "react";
import { css, styled } from "styled-components";
import { isColorDark } from "../../utils/isColorDark";

export const Button = styled.button`
  ${({ theme, disabled }) => css`
    background: ${disabled ? theme.shade.e : theme.primaryColor};
    border-radius: ${theme.radius.base};
    height: 44px;
    font-size: ${theme.fontsize.body};
    line-height: 16px;
    font-weight: ${theme.fontweight.heavy};
    flex-grow: 1;
    color: ${isColorDark(theme.primaryColor)};
    cursor: pointer;
    border: none;
    font-family: Libre Franklin, sans-serif;
    border: ${theme.primaryColor.toLowerCase() === "#ffffff" && !disabled
      ? `1px solid ${theme.colors.darkText}`
      : "none"};

    &:where(.flex-button) {
      flex-grow: 0;
      padding: 11px 16px;
    }

    &:where(.full-width) {
      width: 100%;
    }

    &:where(.light) {
      background-color: ${theme.shade.a};
      border: 1px solid ${theme.primaryColor};
      color: ${theme.primaryColor};
    }

    &:where(.back-button) {
      display: flex;
      align-items: center;
      background-color: ${theme.shade.a};
      color: ${theme.colors.darkText};
      border: 1px solid ${theme.colors.darkText};
      font-family: Libre Franklin, sans-serif;
    }
  `}
`;

export const BackButtonChevron = styled.div`
  ${({ theme }) => css`
    margin-right: ${theme.spacing.sm};
  `}
`;

export const ButtonBarContainer = styled.div`
  ${({ theme }) => css`
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (min-width: ${theme.device.desktop}) {
      max-width: ${theme.device.desktop};
    }
    @media screen and (max-width: ${theme.device.desktop}) {
      max-width: ${theme.device.mobile};
    }
    @media screen and (max-width: ${theme.device.mobile}) {
      margin-left: 15px;
      margin-right: 15px;
      margin-bottom: 15px;
    }
  `}
`;

export const ButtonBackgroundDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0%;
    width: 100%;
    height: 90px;
    @media screen and (max-width: ${theme.device.desktop}) {
      position: fixed;
      left: 0;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 15%
      );
    }
    @media screen and (max-width: ${theme.device.mobile}) {
      position: fixed;
      height:85px;
      left: 0;
      background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 15%
      );
    }
  `}
`;
