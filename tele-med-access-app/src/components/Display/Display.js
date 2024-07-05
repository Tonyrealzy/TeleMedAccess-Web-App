import { css, styled } from "styled-components";

export const CenteringDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppContainer = styled.div`
    word-break: break-word;
    @media screen and (min-width: '1024px') {
      position: relative;
      width: '1024px';
      margin-top: 52px;
      justify-content: center;
      align-items: center;
    }
    @media screen and (max-width: '1024px') {
      box-sizing: border-box;
      width: '768px';
    }
    @media screen and (max-width: '768px') {
      margin: 15px;
    }
`;

export const DesktopBorderDiv = styled.div`
    @media screen and (min-width: '1024px') {
      display: flex;
      position: relative;
      box-shadow: 0 0 20px var(--color-barkbg);
      justify-content: center;
      border: 1px solid black;
      width: 1080px;
      min-height: 45rem;
      border: 2px solid var(--color-barkbg);
      border-radius: 7px;
      overflow-y: scroll;
    }
`;

export const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: white;
`;
export const StatusBarDiv = styled.div`
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    @media (max-width: '1024px') {
      background: transparent;
      position: absolute;
      height: 36px;
      border-bottom: 1px solid var(--color-barkbg);
      border-top: 1px solid var(--color-barkbg);
    }
`;
