import { css, styled } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.shade.a};
    border: 1px solid ${theme.shade.e};
    border-radius: ${theme.radius.base};
    padding: 4px 14px;
    position: relative;
  `}
`;

export const Label = styled.div`
  ${({ theme }) => css`
    font-size: calc(16px * 0.65);
    color: #949494;
    margin: 0;
  `}
`;

export const SelectedOptionContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SelectedOption = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontsize.body};
    margin: 0;
  `}
`;

export const DropdownList = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.shade.a};
    position: absolute;
    border: 1px solid ${theme.shade.e};
    border-radius: ${theme.radius.base};
    width: 100%;
    left: 0;
    margin-top: 8px;
  `}
`;

export const Option = styled.div`
  ${({ theme, active }) => css`
    background-color: ${active ? theme.shade.d : "none"};
    padding: 8px 14px;
  `}
`;
