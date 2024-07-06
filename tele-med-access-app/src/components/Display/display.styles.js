import { css, styled } from "styled-components";

export const CenteringDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppContainer = styled.div`
  ${({ theme }) => css`
    word-break: break-word;
    @media screen and (min-width: ${theme.device.desktop}) {
      position: relative;
      width: ${theme.device.desktop};
      margin-top: 52px;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: ${theme.device.desktop}) {
      box-sizing: border-box;
      width: ${theme.device.mobile};
    }
    @media screen and (max-width: ${theme.device.mobile}) {
      margin: 15px;
    }
  `};
`;

export const DesktopBorderDiv = styled.div`
  ${({ theme }) => css`
    @media screen and (min-width: ${theme.device.desktop}) {
      display: flex;
      position: relative;
      box-shadow: 0 0 20px ${theme.shade.d};
      justify-content: center;
      border: 1px solid black;
      width: 1080px;
      min-height: 45rem;
      border: 2px solid ${theme.shade.d};
      border-radius: 7px;
      overflow-y: scroll;
    }
  `}
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
