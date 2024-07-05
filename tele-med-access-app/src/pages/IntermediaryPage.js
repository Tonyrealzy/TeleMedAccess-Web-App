import React, { useState, useEffect } from "react";
import { getAccessToken } from "../services/SessionManager";
import {
  AppContainer,
  StatusBarDiv,
  CenteringDiv,
  DesktopBorderDiv,
} from "../components/Display/Display";
import LegalScreen from "../screens/LegalScreen";
import Display from "../components/Display";
import Logger from "../components/Logger";


const IntermediaryPage = ({ query }) => {
  const [legalAgreed, setLegalAgreed] = useState(false);

  const handleConfirmLegal = () => setLegalAgreed(true);
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessToken();
      // Logger(token);
      setToken(token);
      return token;
    };

    getToken();
  }, []);

  return (
    <>
      <StatusBarDiv />
      <CenteringDiv>
        <DesktopBorderDiv>
          {!legalAgreed ? (
            <AppContainer>
              <LegalScreen confirmLegal={handleConfirmLegal} query={query} />
            </AppContainer>
          ) : (
            <AppContainer>
              <Display token={token} query={query} />
            </AppContainer>
          )}
        </DesktopBorderDiv>
      </CenteringDiv>
    </>
  );
};

export default IntermediaryPage;
