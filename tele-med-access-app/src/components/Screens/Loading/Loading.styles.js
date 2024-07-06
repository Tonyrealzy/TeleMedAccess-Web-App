import { css, styled } from "styled-components";

export const LoadingContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    @media screen and (min-width: ${theme.device.desktop}) {
      justify-content: center;
      align-items: center;
      height: 100%;
    }
    @media screen and (max-width: ${theme.device.desktop}) {
      justify-content: center;
      align-items: center;
      margin-top: 100px;
    }
  `}
`;

const keyframe = `
 @keyframes linear-bg {
    from {
      background: #f8f8f8;
    }
    100% {
      background: #eee;
    }
  }
  animation-name: linear-bg;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  `;

export const Skeleton = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    position: relative;

    @media screen and (max-width: ${theme.device.desktop}) {
      width: ${theme.device.mobile};
      margin-top: 60px;
    }
  `}
`;

export const SkeletonBar = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 58px;
    margin-bottom: 8px;
    border-radius: 4px;
    display: block;
    background: ${theme.secondary.y};
    ${keyframe}
  `}
`;

export const SkeletonTitle = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 26px;
    margin-bottom: 24px;
    border-radius: 4px;
    display: block;
    background: ${theme.secondary.y};
    ${keyframe}
  `}
`;

export const SkeletonButton = styled.div`
  ${({ theme }) => css`
    width: 90%;
    height: 48px;
    border-radius: 4px;
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 60px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2%;
    background: ${theme.secondary.y};

    @media (min-width: ${theme.device.md}) {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -120px;
      margin-bottom: 0;
    }
  `}
`;
