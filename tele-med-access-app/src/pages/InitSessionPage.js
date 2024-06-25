import React, { useEffect, useState } from "react";
import GetRequest from "../services/GetService";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import Logger from "../components/Logger";
import PrimaryButton from "../components/Button/PrimaryButton";

const InitSessionPage = () => {
  const { startSession } = useAuth();
  const navigate = useNavigate();
  const [loginSessionID, setLoginSessionID] = useState('');

  const startMedicalSession = async () => {
    try {
      const response = await GetRequest('InitSession');
      const sessionID = response.data.SessionID;
      Logger(sessionID);

      startSession(sessionID);
      setLoginSessionID(sessionID);
      Logger(loginSessionID);
      navigate("/addSymptoms");

    } catch(error) {
      console.log('Failed to fetch SessionID: ', error);
    }
  };

  useEffect = (() => {
    startMedicalSession();
  }, []);

  return (
    <div className="page">
      <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
      <br></br>
      <p>
        Here you will give the user more information about what he/she would be
        doing.
        <br></br>
        There will be a Start-A-Session-With-Doctor(or anything you call
        it) button here that the persion will click. On clicking this button,
        the remaining content that has to do with agreeing with the terms and
        conditions will be displayed.
        <br></br>
        There would be a link to the Terms&Conditions Page here. Alright???
        <br></br>
        After the user has accepted, he/she will be directed to the page where
        he/she can add the symptoms they have and then get their differential
        diagnosis.
      </p>

      {loginSessionID ? (
        <PrimaryButton onClick={navigate('/addSymptoms')}>
          Proceed
        </PrimaryButton>
      ) : (
        <PrimaryButton onClick={startMedicalSession}>
          Start A Session With Doctor
        </PrimaryButton>
      )
    }
    </div>
  );
};

export default InitSessionPage;
