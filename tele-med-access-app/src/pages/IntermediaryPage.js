import React from "react";
import { getAccessToken } from "../utils/session-manager";
import { useState, useEffect } from "react";
import LegalScreen from "../components/Screens/Legal/Legal";
import {
  AppContainer,
  CenteringDiv,
  StatusBarDiv,
  PageRender
} from "../components/Display/display.styles";
import Display from "../components/Display";
import Logger from "../components/Logger/Logger";

export default function IntermediaryPage({ query }) {
  const [legalAgreed, setLegalAgreed] = useState(false);
  const [token, setToken] = useState('');

  const handleConfirmLegal = () => setLegalAgreed(true);

  useEffect(() => {
    const getToken = async () => {
    try {
        const token = await getAccessToken();
        // Logger(token);
        setToken(token);
        return token;
      } catch (error) {
        Logger('Error fetching token: ', error);
      }
    };

    getToken();
  }, []);

  return (
    <>
    <PageRender>
      <StatusBarDiv />
      <CenteringDiv>
          {!legalAgreed ? (
            <AppContainer>
              <LegalScreen confirmLegal={handleConfirmLegal} query={query} />
            </AppContainer>
          ) : (
            <AppContainer>
              <Display token={token} query={query} />
            </AppContainer>
          )}
      </CenteringDiv>
    </PageRender>
    </>
  );
}

