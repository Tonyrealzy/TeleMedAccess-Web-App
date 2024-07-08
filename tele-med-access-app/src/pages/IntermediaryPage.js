import React from "react";
import { getAccessToken } from "../utils/session-manager";
import { useState, useEffect } from "react";
import LegalScreen from "../components/Screens/Legal/Legal";
import {
  AppContainer,
  CenteringDiv,
  StatusBarDiv,
  PageRender,
} from "../components/Display/display.styles";
import Display from "../components/Display";
import Loader from "../components/Screens/Loading/Loader";
import Logger from "../components/Logger/Logger";

export default function IntermediaryPage({ query }) {
  const [legalAgreed, setLegalAgreed] = useState(false);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConfirmLegal = () => {
    setLoading(true);
    setLegalAgreed(true);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const getToken = async () => {
      try {
        const token = await getAccessToken();
        // Logger(token);
        setToken(token);
        return token;
      } catch (error) {
        Logger("Error fetching token: ", error);
      }
    };

    getToken();
    setLoading(false);
  }, []);

  return (
    <PageRender>
      <StatusBarDiv />
      <CenteringDiv>
        {!legalAgreed ? (
          <AppContainer>
            {loading ? (
              <Loader />
            ) : (
              <LegalScreen confirmLegal={handleConfirmLegal} query={query} />
            )}
          </AppContainer>
        ) : (
          <AppContainer>
            {loading ? <Loader /> : <Display token={token} query={query} />}
          </AppContainer>
        )}
      </CenteringDiv>
    </PageRender>
  );
}
