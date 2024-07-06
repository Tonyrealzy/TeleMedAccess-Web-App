import { css, styled } from "styled-components";

export const Wrapper = styled.span`
  ${({ theme }) => css`
    display: inline-flex;
    place-content: center;
    place-items: center;
    padding: ${theme.spacing.xxs};
    border-radius: 2px;
    margin-right: ${theme.spacing.md};

    &:where(.kind-danger) {
      background-color: ${theme.secondary.r};
    }

    &:where(.kind-warning) {
      background-color: ${theme.secondary.s};
    }

    &:where(.kind-success) {
      background-color: ${theme.secondary.o};
    }

    &:where(.kind-no-outcome) {
      background-color: ${theme.shade.f};
    }

    &:where(.kind-info) {
      background-color: ${theme.secondary.z};
    }
  `}
`;
