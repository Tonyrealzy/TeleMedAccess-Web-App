import React from "react";
import getRequest from "../services/GetService";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import Logger from "../components/Logger";
import PrimaryButton from "../components/Button/PrimaryButton";

const InitSessionPage = () => {
  const { startSession } = useAuth();
  const navigate = useNavigate();

  const initialiseSession = async () => {
    try {
      const response = await getRequest('InitSession');
      const sessionID = response.data.SessionID;
      Logger(sessionID);

      startSession(sessionID);
      navigate("/addSymptoms");

    } catch(error) {
      console.log('Failed to fetch SessionID: ', error);
    }
  };

  return (
    <div className="page">
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

      <PrimaryButton onClick={initialiseSession}>
        Start A Session With Doctor
      </PrimaryButton>
    </div>
  );
};

export default InitSessionPage;
