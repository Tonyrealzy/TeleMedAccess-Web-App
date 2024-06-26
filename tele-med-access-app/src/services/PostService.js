import Logger from "../components/Logger";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

export const AcceptTermsPostRequest = async (sessionId, value) => {
  try {
    const response = await axios.post(`${BASE_URL}/AcceptTermsOfUse`, null, {
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "endlessmedicalapi1.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      params: {
        SessionID: sessionId,
        passphrase: value,
      },
    });
    return response;
  } catch (error) {
    Logger("Error posting data: ", error.message);
  }
};

export const AddSymptomPostRequest = async (
  sessionId,
  symptomName,
  symptomValue
) => {
  try {
    const response = await axios.post(`${BASE_URL}/UpdateFeature`, null, {
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "endlessmedicalapi1.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      params: {
        name: symptomName,
        value: symptomValue,
        SessionID: sessionId,
      },
    });
    return response;
  } catch (error) {
    Logger("Error posting data: ", error.message);
  }
};

export const RemoveSymptomPostRequest = async (
  sessionId,
  symptomName
) => {
  try {
    const response = await axios.post(`${BASE_URL}/DeleteFeature`, null, {
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": "endlessmedicalapi1.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      params: {
        name: symptomName,
        SessionID: sessionId,
      },
    });
    return response;
  } catch (error) {
    Logger("Error posting data: ", error.message);
  }
};
