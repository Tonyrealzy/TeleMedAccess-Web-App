import Logger from "../components/Logger";
import { httpRequest } from "../models/Request";

const API_URL = process.env.REACT_APP_HEALTHILY_BASE_URL;

export const initialQuery = async (token, query) => {
  const header = {
    Authorization: `Bearer ${token}`,
  };

  const { body, status } = await httpRequest(
    `${API_URL}/chat`,
    query ? query : {},
    header,
    "POST"
  );

  if (status === 400 && query) {
    console.error(
      "Error initiating request with query parameters",
      query.answer
    );
    const { body } = await httpRequest(API_URL, {}, header, "POST");

    return body;
  }

  return body;
};

export const sendResponseQuery = async (token, query) => {
  const header = {
    Authorization: `Bearer ${token}`,
  };
  const { body } = await httpRequest(`${API_URL}/chat`, query, header, "POST");
  return body;
};

export const search = async (token, query) => {
  const header = {
    Authorization: `Bearer ${token}`,
  };
  const searchEndpoint = `${process.env.REACT_APP_HEALTHILY_BASE_URL}/search/symptoms`;

  const { body } = await httpRequest(
    `${searchEndpoint}?text=${query}`,
    null,
    header,
    "GET"
  );

  return body;
};
