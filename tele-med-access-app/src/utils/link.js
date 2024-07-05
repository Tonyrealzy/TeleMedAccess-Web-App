import regexifyString from "regexify-string";
import styled from "styled-components";

export const urlRegex =
  /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!-/]))?/;

const LinkContainer = styled.div`
  margin-top: 30px;
  font-size: 18px;
`;

export const updateLinks = (value = "") =>
  regexifyString({
    pattern: urlRegex,
    decorator: (match) => (
      <LinkContainer>
        <a href="match">{match}</a>
      </LinkContainer>
    ),
    input: value,
  });

export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};
