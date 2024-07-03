import { v4 as uuidv4 } from "uuid";
import { authRequest } from "../models/Request";

const ApiToken = process.env.REACT_APP_HEALTHILY_API_TOKEN || "";
const LoginURL = `${process.env.REACT_APP_HEALTHILY_BASE_URL}/login`;

export const getAccessToken = async () => {
  const { body } = await authRequest(
    LoginURL,
    { id: uuidv4() },
    { Authorization: ApiToken },
  );

  return body?.access_token;
};
