import React, { useState } from "react";
import { GetSessionIdRequest } from "../services/GetService";
import { AcceptTermsPostRequest } from "../services/PostService";
import { useAuth } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Logger from "../components/Logger";
import PrimaryButton from "../components/Button/PrimaryButton";

const InitSessionPage = () => {
  const { startSession, sessionID } = useAuth();
  const navigate = useNavigate();
  // const [gottenSessionID, setGottenSessionID] = useState(false);
  const [checked, setChecked] = useState(false);
  const checkboxValue =
    "I have read, understood and I accept and agree to comply with the Terms of Use of EndlessMedicalAPI and Endless Medical services. The Terms of Use are available on endlessmedical.com";

  const startMedicalSession = async () => {
    try {
      const response = await GetSessionIdRequest();
      const loginSessionID = response.data.SessionID;
      Logger('Login Session ID: ', loginSessionID);
      startSession(loginSessionID);
      // setGottenSessionID(true);
    } catch (error) {
      console.log("Failed to fetch SessionID: ", error.message);
    }
  };

  const acceptTermsConditions = () => {
    setChecked(!checked);
  };

  const handleProceed = async () => {
    if (!checked) {
      return;
    }

    try {
      const response = await AcceptTermsPostRequest(sessionID, checkboxValue);
      const postResponse = response.data;
      // Logger('AcceptTerms PostRequest response: ', postResponse);
      if (postResponse.status === "ok") {
        navigate("/addSymptoms");
      } else {
        Logger('AcceptTermsPostRequest Error: ', postResponse);
      }
    } catch (error) {
      Logger("Post request error: ", error);
    }
  };

  return (
    <div className="page">
      {sessionID ? (
        <div>
          <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
          <br></br>
          <h3>Initiate Session-With-Doctor Page</h3>
          <p>
            This page is displayed if the user already has started a session
            before now on their account.
          </p>
            <div>
              <p>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={acceptTermsConditions}
                  value={checkboxValue}
                />
                I have read, understood and I accept and agree to comply with
                the <Link to="/terms">Terms and Conditions</Link> of Use of
                EndlessMedicalAPI and Endless Medical services.
              </p>
              <br></br>

              <PrimaryButton onClick={handleProceed} disabled={!checked}>
                Proceed
              </PrimaryButton>
            </div>
        </div>
      ) : (
        <div>
          <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
          <br></br>
          <h3>Initiate Session With Doctor Page</h3>
          <section>
            <p>
              This page is displayed if the user is creating a session for the
              first time.
            </p>
            <br></br>

            <PrimaryButton onClick={startMedicalSession}>
              Start A Session With Doctor
            </PrimaryButton>
            <br></br>
            <br></br>
            <div>
              <p>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={acceptTermsConditions}
                  value={checkboxValue}
                />
                I have read, understood and I accept and agree to comply with
                the <Link to="/terms">Terms and Conditions</Link> of Use of
                EndlessMedicalAPI and Endless Medical services.
              </p>
              <br></br>

              <PrimaryButton onClick={handleProceed} disabled={!checked}>
                Proceed
              </PrimaryButton>
            </div>
          </section>

          <br></br>
        </div>
      )}
    </div>
  );
};

export default InitSessionPage;
