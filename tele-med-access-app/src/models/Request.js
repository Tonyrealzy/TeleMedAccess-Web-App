import Logger from "../components/Logger";

const API_KEY = process.env.REACT_APP_HEALTHILY_API_KEY || "";

export const authRequest = async (url, body, header = {}) => {
  try {
    const request = new Request(url, {
      method: "POST",
      body: bodyBuilder(body),
      headers: headerBuilder(header),
    });

    const response = await fetch(request);
    const { status } = response;

    const responseBody = hasBody(status) ? await response.json() : null;

    checkError(status, responseBody);

    return {
      status,
      hasError: hasError(status),
      body: responseBody,
    };
  } catch (error) {
    console.error(
      `HTTP REQUEST ERROR: ${JSON.stringify({
        url,
        message: error.message,
      })}`
    );
    throw error;
  }
};

export const httpRequest = async (url, body, header = {}, method = "GET") => {
  try {
    const request = new Request(url, {
      method,
      body: bodyBuilder(body),
      headers: headerBuilder(header),
    });

    const response = await fetch(request);
    const { status } = response;

    const responseBody = hasBody(status) ? await response.json() : null;

    checkError(status, responseBody);
    Logger("Response from httpRequest: ", responseBody);

    return {
      status,
      hasError: hasError(status),
      body: responseBody,
    };
  } catch (error) {
    console.error(
      `HTTP REQUEST ERROR: ${JSON.stringify({
        url,
        message: error.message,
      })}`
    );
    throw error;
  }
};

const bodyBuilder = (body) => (body ? JSON.stringify(body) : null);

const hasBody = (status) => status !== 204 && status !== 404;

const hasError = (status) => status >= 400;

const checkError = (status, body = null) => {
  if (!hasError(status)) return;
};

const headerBuilder = (headerValues) => {
  let headers = {
    "x-api-key": API_KEY,
    "Content-Type": "application/json",
    ...headerValues,
  };

  return headers;
};
