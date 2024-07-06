import { httpRequest } from "../utils/http-request";

const healthilyChatEndpoint = import.meta.env.VITE_APP_HEALTHILY_CHAT_URL;
const searchEndpoint = import.meta.env.VITE_APP_HEALTHILY_SEARCH_URL;

export const initialQuery = async (
  token,
  query
) => {
  const header = {
    Authorization: `Bearer ${token}`,
  };

  const { body, status } = await httpRequest(
    healthilyChatEndpoint,
    query ? query : {},
    header,
    "POST"
  );

  if (status === 400 && query) {
    console.error("Error initating request with query paramters", query.answer);
    const { body } = await httpRequest(
      healthilyChatEndpoint,
      {},
      header,
      "POST"
    );

    return body;
  }

  return body;
};

export const sendResponseQuery = async (
  query,
  token
) => {
  const header = {
    Authorization: `Bearer ${token}`,
  };
  const { body } = await httpRequest(
    healthilyChatEndpoint,
    query,
    header,
    "POST"
  );
  return body;
};

export const search = async (query, token) => {
  const header = {
    Authorization: `Bearer ${token}`,
  };

  const { body } = await httpRequest(
    `${searchEndpoint}?text=${query}`,
    null,
    header,
    "GET"
  );

  return body;
};
