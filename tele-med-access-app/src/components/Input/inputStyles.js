import { styled } from "styled-components";

const labelSmall = styled.label`
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
    height: 1.5rem;
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
  display: flex;
  position: relative;
  padding: 10px 14px;
  width: auto;

  &:focus-within {
  }
`;

export const InputInnerContainer = styled.div`
  margin: 0.5rem 0;
  padding: 10px 14px;
  position: relative;
  flex-grow: 1;
`;

export const Label = styled.label`
  position: absolute;
  font-family: Libre Franklin, sans-serif;
  top: 50%;
  left: 0;
  transform: translate(0, -50%) scale(1);
  transform-origin: top left;
  transition: top 0.15s, font-size 0.15s;
  z-index: 2;
  cursor: text;
  margin: 0.5rem 0;
`;

export const WarningText = styled.p`
  font-family: Libre Franklin, sans-serif;
  font-size: 10px;
  text-align: center;
`;
