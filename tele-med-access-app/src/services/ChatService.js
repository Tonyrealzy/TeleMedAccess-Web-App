import Logger from "../components/Logger";
import { httpRequest } from "../models/Request";

const API_URL = process.env.REACT_APP_HEALTHILY_BASE_URL;
const Token = process.env.REACT_APP_HEALTHILY_API_TOKEN;


export const initialQuery = async (query) => {
  const header = {
    Authorization: `Bearer ${Token}`,
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

export const sendResponseQuery = async (query) => {
  const header = {
    Authorization: `Bearer ${Token}`,
  };
  const { body } = await httpRequest(API_URL, query, header, "POST");
  return body;
};

export const search = async (query) => {
  const header = {
    Authorization: `Bearer ${Token}`,
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

export const useChatQuery = async (data) => {
  const header = {
    authorization: `Bearer ${Token}`,
  };
  const query = JSON.stringify(data);

  try {
    const response = await httpRequest(`${API_URL}/chat`, query, header, 'POST');
    return response.body;
  } catch (error) {
    Logger("Error sending fetching chat query: ", error);
  }
};
