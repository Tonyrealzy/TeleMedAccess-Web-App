import { css, styled } from "styled-components";

export const UnorderedList = styled.ul`
  ${({ theme }) => css`
    margin: ${theme.spacing.sm} 0px ${theme.spacing.lg};
    padding-left: ${theme.spacing.md};

    > li + li {
      margin-top: ${theme.spacing.md};
    }
  `}
`;
