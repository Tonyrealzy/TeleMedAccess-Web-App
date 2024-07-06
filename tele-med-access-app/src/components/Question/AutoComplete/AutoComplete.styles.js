import { css, styled } from "styled-components";

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.shade.a};
    border: 1px solid ${theme.shade.e};
    border-radius: 7px;
    position: relative;
    padding: 0 14px;
    width: 100%;
    height: 56px;

    &:focus-visible {
      outline: none;
    }
  `}
`;

export const SymptomsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.shade.b};

    border-radius: 7px;
    width: 100%;
    height: 50px;
    margin-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
  `}
`;
export const AutoCompleteOverflow = styled.div`
  ${({ theme }) => css`
    @media screen and (min-width: 600px) {
      height: auto;
      overflow: auto;
    }
    @media screen and (max-width: 400px) {
      height: 280px;
      overflow-y: auto;
    }

  `}
`;

export const RemoveButton = styled.button`
  ${({ theme, disabled }) => css`
    background: none;
    border: none;
    cursor: pointer;
  `}
`;

export const StyledList = styled.li`
  ${({ theme }) =>
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: ${theme.radius.base};
      background: ${theme.shade.b};
      margin-bottom: 6px;
      list-style-type: none;
      padding: 10px;
      width: 100%;
      height: 50px;

      &:active {
        background: ${theme.shade.e};
      }
    `}
`;

export const StyledListGroup = styled.ul`
  ${({ theme }) =>
    css`
      padding-left: 0px;
    `}
`;
