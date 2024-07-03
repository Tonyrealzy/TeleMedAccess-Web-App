// Helper functions for building the request body and headers
const bodyBuilder = (body) => {
    if (body) {
      return JSON.stringify(body);
    }
    return null;
  };
  
  const headerBuilder = (header) => {
    return {
      'Content-Type': 'application/json',
      ...header
    };
  };
  
  const hasBody = (status) => {
    return status >= 200 && status < 300;
  };
  
  const hasError = (status) => {
    return status >= 400;
  };
  
  const checkError = (status, responseBody) => {
    if (hasError(status)) {
      throw new Error(`Error: ${status}, Body: ${JSON.stringify(responseBody)}`);
    }
  };
  
  // Auth Request Function
  export const authRequest = async (url, body, header = {}) => {
    try {
      const request = new Request(url, {
        method: 'POST',
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
  
  // HTTP Request Function
  export const httpRequest = async (url, body = null, header = {}, method = 'GET') => {
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
