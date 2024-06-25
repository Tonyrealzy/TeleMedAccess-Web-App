import React, { useState } from "react";
import GetRequest from "../services/GetService";
import PostRequest from "../services/PostService";
import { useAuth } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Logger from "../components/Logger";
import PrimaryButton from "../components/Button/PrimaryButton";

const InitSessionPage = () => {
  const { startSession, sessionID } = useAuth();
  const navigate = useNavigate();
  const [gottenSessionID, setGottenSessionID] = useState(false);
  const [checked, setChecked] = useState(false);
  const checkboxValue =
    "I have read, understood and I accept and agree to comply with the Terms of Use of EndlessMedicalAPI and Endless Medical services. The Terms of Use are available on endlessmedical.com";

  const startMedicalSession = async () => {
    try {
      const response = await GetRequest("InitSession");
      const loginSessionID = response.data.SessionID;
      Logger(loginSessionID);
      startSession(loginSessionID);
      setGottenSessionID(!gottenSessionID);
    } catch (error) {
      console.log("Failed to fetch SessionID: ", error.messa);
    }
  };

  Logger(gottenSessionID);

  const acceptTermsConditions = () => {
    setChecked(!checked);
  };

  const handleProceed = async () => {
    if (!checked) {
      return;
    }

    try {
      const payload = {
        SessionID: sessionID,
        passphrase: checkboxValue,
      };
      Logger(payload);

      // await PostRequest("AcceptTermsOfUse", payload);
      // navigate("/addSymptoms");
      const postResponse = await PostRequest("AcceptTermsOfUse", payload);
      Logger(postResponse);
      if (postResponse.status === 200) {
        Logger(postResponse);
        navigate("/addSymptoms");
      } else {
        Logger(postResponse);
      }
    } catch (error) {
      Logger("Post request error: ", error);
    }
  };

  return (
    <div className="page">
      {!sessionID ? (
        <div>
          <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
          <p>
            This page is displayed if the user already has started a session
            before now on their account.
          </p>
          <PrimaryButton onClick={() => navigate("/addSymptoms")}>
            Continue
          </PrimaryButton>
        </div>
      ) : (
        <div>
          <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
          <br></br>
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

            {gottenSessionID === true ? (
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
            ) : (
              <div>
                <p>No content!</p>
              </div>
            )}
          </section>

          <br></br>
        </div>
      )}
    </div>
  );
};

export default InitSessionPage;
