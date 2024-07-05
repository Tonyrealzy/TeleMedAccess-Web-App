import { css, styled } from "styled-components";

export const UnorderedList = styled.ul`
  ${({ theme }) => css`
    margin: 0;
    padding-left: 8px;

    > li + li {
      margin-top: 16px;
    }
  `}
`;

const Bullets = ({ children }) => {
  return <UnorderedList>{children}</UnorderedList>;
};

export default Bullets;
