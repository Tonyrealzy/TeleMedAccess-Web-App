import { css, styled } from "styled-components";

export const CenteringDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10% auto;
    @media screen and (min-width: ${theme.device.desktop}) {
      display: flex;
      flex-direction: row;
      padding: 1rem;
      margin: auto;
      width: 80% !important;
      align-items: center;
    }
  `};
`;

export const AppContainer = styled.div`
  ${({ theme }) => css`
    word-break: break-word;
    margin: 1rem;
    @media screen and (min-width: ${theme.device.desktop}) {
      position: relative;
      margin-top: 52px;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: ${theme.device.desktop}) {
      box-sizing: border-box;
    }
    @media screen and (max-width: ${theme.device.mobile}) {
      margin: 1rem 2rem;
    }
  `};
`;

export const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
`;
export const StatusBarDiv = styled.div`
  ${({ theme }) => css`
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    @media (max-width: ${theme.device.desktop}) {
      background: transparent;
      position: absolute;
      height: 36px;
      border-bottom: 1px solid ${theme.shade.d};
      border-top: 1px solid ${theme.shade.d};
    }
  `}
`;
export const PageRender = styled.div`
  ${({ theme }) => css`
    background-color: white;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
  `}
`;
