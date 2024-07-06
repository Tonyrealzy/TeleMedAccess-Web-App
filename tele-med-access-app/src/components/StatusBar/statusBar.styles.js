import { css, styled } from "styled-components";

export const StatusBarWrapper = styled.div`
  ${({ theme }) => css`
    background: transparent;
    margin-top: 4px;
  `}
`;

export const StatusBarInner = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `}
`;

export const StatusBarTitle = styled.div`
  ${({ theme }) => css`
    font-weight: ${theme.fontweight.heavy};
    width: 100%;
    color: ${theme.secondary.i};
    line-height: ${theme.spacing.md};
    font-size: ${theme.fontsize.body};
    font-family: Poppins, sans-serif;
  `}
`;

export const ProgressBarWrapper = styled.div`
  ${({ theme }) => css`
    height: 0.4rem;
    width: 100%;
    background: ${theme.shade.d};
    margin-right: ${theme.spacing.sm};
    border-radius: 20px;
  `}
`;

export const ProgressBar = styled.div`
  ${({ percentage, theme }) => css`
    width: ${percentage}%;
    height: 0.4rem;
    background-color: ${theme.secondary.i};
    border-radius: 20px;
  `}
`;

export const ExitButton = styled.button`
  ${({ theme }) => css`
    padding: 0;
    margin: 5px 0 0 0;
    border: none;
    background-color: transparent;
  `}
`;

export const ExitButtonContainer = styled.div`
  ${({ theme }) => css`
    @media (min-width: ${theme.device.desktop}) {
      display: none;
    }
  `}
`;

export const DesktopCloseIconContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    height: 50px;
    width: 40px;
    @media (max-width: ${theme.device.desktop}) {
      display: none;
    }
  `}
`;
