import { styled } from "styled-components";

const labelSmall = css`
    label {
      top: 12px;
      transform: translate(0, -50%);
      font-size: 0.8rem;
    }
`;

export const Input = styled.input`
    &:focus,
    &:focus-visible {
      outline: none;
    }
    position: relative;
    z-index: 2;
    padding-top: 25px;
    padding-bottom: 5px;
    outline: none;
    border: none;
    background-color: transparent;
    width: 100%;
    font-size: 0.8rem;
    appearance: none;
}

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }

    // Hide autocomplete background
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      box-shadow: inset 0 0 0 50px #fff;
      -webkit-box-shadow: inset 0 0 0 50px #fff;
      -webkit-text-fill-color: #000;
    }
`;

export const InputContainer = styled.div`
    background-color: var(--);
    display: flex;
    border: 1px solid ${theme.shade.e};
    border-radius: ${theme.radius.base};
    position: relative;
    padding: 0 14px;
    width: auto;

    &:focus-within {
      border: 1px solid ${theme.secondary.i}
    }
`;

export const InputInnerContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    margin: ${theme.spacing.base} 0;
    flex-grow: 1;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    position: absolute;
    font-family: Libre Franklin, sans-serif;
    top: 50%;
    left: 0;
    transform: translate(0, -50%) scale(1);
    transform-origin: top left;
    transition: top 0.15s, font-size 0.15s;
    z-index: 2;
    cursor: text;
    color: ${theme.shade.g};
    ${Input}:not(:placeholder-shown) + & {
      top: 12px;
      transform: translate(0, -50%);
      font-size: ${theme.fontsize.sm};
    }
  `}
`;

export const WarningText = styled.p`
  ${({ theme }) => css`
    color: ${theme.secondary.r};
    font-family: Libre Franklin, sans-serif;
    font-weight: ${theme.fontweight.light};
    font-size: 10px;
    text-align: center;
  `}
`;