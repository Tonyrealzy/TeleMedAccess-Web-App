import { css, styled, keyframes } from "styled-components";

const gradientBackground = keyframes`
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }`;

export const CenteringDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10% auto;
    @media screen and (max-width: ${theme.device.desktop}) {
      display: flex;
      flex-direction: row;
      padding: 1rem;
      margin: 5% auto;
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
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    z-index: 999;
    color: ${theme.shade.j};
  `};
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
    background: linear-gradient(135deg, #a8d0e6, #f0f6fc, #edf5fc, #f5f3e9);
    min-height: 100vh !important;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    justify-content: center;
    align-items: center;
    animation: ${gradientBackground} 10s ease infinite;
    background-size: 400% 400%;
    @media (max-width: ${theme.device.desktop}) {
      min-height: 100vh !important;
    }
    @media (max-width: ${theme.device.mobile}) {
      min-height: 100vh !important;
    }
  `};
`;
