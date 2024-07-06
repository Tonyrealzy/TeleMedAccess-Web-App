import { css, styled } from "styled-components";

export const Input = styled.input`
  display: none;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    align-items: center;
    background: ${theme.shade.b};
    border: 1px solid transparent;
    border-radius: ${theme.spacing.xxs};
    cursor: pointer;
    display: flex;
    padding: ${theme.spacing.md};
    margin-bottom: 10px;

    > span {
      margin-left: ${theme.spacing.xxs};
      font-size: ${theme.fontsize.label};
      font-weight: ${theme.fontweight.medium};
      line-height: 24px;
    }

    &::before {
      border-radius: 100%;
      content: "";
      height: 2rem;
      width: 2rem;
      transform: scale(0.7);
      background: #fff;
      box-shadow: 0 0 0 0.1rem inset ${theme.shade.j};
    }

    input:checked + &::before {
      box-shadow: 0 0 0 0.1rem inset ${theme.shade.j},
        0 0 0 0.6rem inset ${theme.shade.a},
        0 0 0 0.7rem inset ${theme.secondary.i},
        0 0 0 1rem inset ${theme.shade.j};
    }

    input:checked + & {
      border: 1px solid ${theme.secondary.i};
    }

    input:focus + & {
      outline: 0.08rem solid ${theme.secondary.i};
    }
  `}
`;

export const OverflowContainer = styled.div`
  ${({ theme, overflowEnabled }) => css`
    @media screen and (min-width: 600px) {
      ${overflowEnabled && `height: auto;`}
      overflow: ${overflowEnabled ? "auto" : "visible"};
    }
  `}
`;
