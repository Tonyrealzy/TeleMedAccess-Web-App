import React from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

const InitSessionPage = () => {
  const { startSession } = useAuth();
  const navigate = useNavigate();
  const URL ='';

  const initialiseSession = async () => {
    try {
      const response = await axios.get(URL, {withCredentials: true});
      const sessionID = response.data.sessionID;

      startSession(sessionID);
      navigate("/addSymptoms");

    } catch(error) {
      console.log('Failed to fetch SessionID: ', error);
    }
  };

  return (
    <div>
      <p>
        Here you will give the user more information about what he/she would be
        doing. There will be a Start-A-Session-With-Doctor(or anything you call
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
    </div>
  );
};

export default InitSessionPage;
