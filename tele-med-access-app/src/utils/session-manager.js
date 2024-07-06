import React from "react";
import { v4 as uuidv4 } from "uuid";
import { authRequest } from "./http-request";
import Logger from "../components/Logger/Logger";

const API_URL = import.meta.env.VITE_APP_HEALTHILY_LOGIN_URL;
const healthilyApiToken = import.meta.env.VITE_APP_HEALTHILY_API_TOKEN;

export const getAccessToken = async () => {
  try {
    const { body } = await authRequest(
      API_URL,
      { id: uuidv4() },
      { Authorization: healthilyApiToken },
    );
    return body?.access_token;
  } catch (error) {
    Logger(error);
  }
};
