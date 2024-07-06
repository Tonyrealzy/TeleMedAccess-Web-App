import { useEffect, useState } from "react";
import {initialQuery, search, sendResponseQuery} from "../../services/ChatService";
import Messages from "../Messages/index";
import Question from "../Question/Question";
import Loader from "../Loader/Loader";
import SkeletonLoader from "../Loader/Skeleton";
import Header from "../Heading/Header";
import Report from "../Report";
import Confirmation from "../../screens/Confirmation";
import Logger from "../Logger";
import { getProgressTitle } from "../../utils/progressTitle";


export const isReportReady = (response) =>
  response.report && response.report.type !== "information";

const Display = ({ token, query }) => {
  const [initialLoading, setInitialLoading] = useState(false);
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(false);
  const [reportData, setReportData] = useState(null);
  const [confirmationScreen, setConfirmationScreen] = useState(false);
  const [queryUserData, setQueryUserData] = useState(null);
  const [phase, setPhase] = useState("");

  const sendDataWithInitialResponse = async (query) => {
    const initalQuery = { answer: { ...query, type: "entry" } };
    try {
      const response = await initialQuery(token, initalQuery);
      Logger('Response from initialQuery: ', JSON.stringify(response));
      setResponse(response);
      setInitialLoading(false);
      setConfirmationScreen(false);
    } catch (error) {
      Logger("Error doing initial fetch", error);
    }
  };

  useEffect(() => {
    const blankInit = async () => {
      try {
        const response = await initialQuery(token, null);
        Logger('Response from initialQuery in useEffect: ', JSON.stringify(response));
        setResponse(response);
        setInitialLoading(false);
      } catch (error) {
        Logger("Error doing initial fetch", error);
      }
    };

    const allFields = [
      "name",
      "year_of_birth",
      "gender",
      "initial_symptom",
    ];

    // const usePassedQueryParams = Object.keys(query).some((field) =>
    //   allFields.includes(field),
    // );
    const usePassedQueryParams = false;

    if (usePassedQueryParams) {
      const queryParmsForConfirmation =
        allFields.reduce((acc, field) => {
          acc[field] = query[field];

          return acc;
        }, {});

      setConfirmationScreen(true);
      setQueryUserData(queryParmsForConfirmation);
    } else {
      blankInit();
    }
  }, []);

  const sendResponse = async (query) => {
    setLoading(true);

    try {
      const response = await sendResponseQuery(query, token);
      const responseMsg = JSON.stringify(response);
      Logger('Response from sendResponse: ', responseMsg);

      if (isReportReady(responseMsg)) {
        setReportData(responseMsg);
      }

      setResponse(responseMsg);
      setLoading(false);
    } catch (error) {
      Logger("Error fetching results:", error);
    }
  };

  const sendSearch = async (query) => {
    try {
      const response = await search(query, token);

      return response;
    } catch (error) {
      Logger("Error fetching results:", error);
    }
  };

  const handleBackButton = async (query) => {
    setLoading(true);

    try {
      const response = await sendResponseQuery(query, token);
      const responseMsg = JSON.stringify(response);
      Logger('Response from handleBackButton: ', responseMsg);

      setResponse(responseMsg);
      setLoading(false);
    } catch (error) {
      Logger("Error going back", error);
    }
  };

  useEffect(() => {
    if (response?.conversation?.phase) {
      const newPhase = getProgressTitle(response.conversation.phase);
      setPhase(newPhase);
    }
  }, [response]);

  return (
    <>
      {initialLoading ? (
        <Loader />
      ) : (
        <>
          {reportData ? (
            <Report reportData={reportData} />
          ) : loading ? (
            <SkeletonLoader />
          ) : confirmationScreen ? (
            <>
              <Header
                phase="About you"
                percentage={response?.conversation?.progress?.percentage ?? 0}
              />
              <Confirmation
                queryUserData={queryUserData}
                setChatMessage={sendDataWithInitialResponse}
              />
            </>
          ) : (
            <>
              <Header
                phase={phase}
                percentage={response?.conversation?.progress?.percentage || 0}
              />
              <Messages chatResponse={response} />
              <Question
                chatResponse={response}
                setChatMessage={sendResponse}
                handleBackButton={handleBackButton}
                sendSearch={sendSearch}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Display;
