import { v4 as uuidv4 } from "uuid";
import { authRequest } from "../models/Request";
import Logger from "../components/Logger";

const ApiToken = process.env.REACT_APP_HEALTHILY_API_TOKEN || "";
const LoginURL = `${process.env.REACT_APP_HEALTHILY_BASE_URL}/login`;

export const getAccessToken = async () => {
  try {
    const { body } = await authRequest(
      LoginURL,
      { id: uuidv4() },
      { Authorization: ApiToken },
    );
    return body?.access_token;
  } catch (error) {
    Logger(error);
  }
};
