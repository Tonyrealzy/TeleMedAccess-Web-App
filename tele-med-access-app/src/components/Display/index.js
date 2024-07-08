import React from "react";
import { useEffect, useState } from "react";
import { initialQuery, search, sendResponseQuery } from "../../services";

import Messages from "../Messages";
import Question from "../Question";
import Report from "../Report";
import { Header } from "../Header";
import Confirmation from "../Screens/Confirmation";
import { getProgressTitle } from "../../utils/progressTitle";
// import SkeletonLoader from "../Screens/Loading/Skeleton";
// import { LoadingScreen } from "../Screens/Loading/LoadingScreen";
import Loader from "../Screens/Loading/Loader";

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

  // const { logo } = query;

  const sendDataWithInitialResponse = async (query) => {
    setLoading(true);
    const initalQuery = { answer: { ...query, type: "entry" } };
    console.log(initalQuery);
    try {
      const response = await initialQuery(token, initalQuery);
      console.log(initalQuery);
      setResponse(response);
      setInitialLoading(false);
      setConfirmationScreen(false);
      setLoading(false);
    } catch (error) {
      console.error("Error doing initial fetch", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);

    const blankInit = async () => {
      try {
        const response = await initialQuery(token, null);
        setResponse(response);
        setInitialLoading(false);
        setLoading(false);
      } catch (error) {
        console.error("Error doing initial fetch", error);
        setLoading(false);
      }
    };

    const allFields = [
      "name",
      "year_of_birth",
      "gender",
      "initial_symptom",
    ];

    const usePassedQueryParams = false;
    // const usePassedQueryParams = Object.keys(query).some((field) =>
    //   allFields.includes(field),
    // );

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

      if (isReportReady(response)) {
        setReportData(response);
      }

      setResponse(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  const sendSearch = async (query) => {
    try {
      const response = await search(query, token);

      return response;
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  const handleBackButton = async (query) => {
    setLoading(true);

    try {
      const response = await sendResponseQuery(query, token);
      setResponse(response);
      setLoading(false);
    } catch (error) {
      console.error("Error going back", error);
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
            <Loader />
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
