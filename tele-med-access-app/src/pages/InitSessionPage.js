import React, { useState } from "react";
import { GetSessionIdRequest } from "../services/GetService";
import { AcceptTermsPostRequest } from "../services/PostService";
import { useAuth } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Logger from "../components/Logger";
import PrimaryButton from "../components/Button/PrimaryButton";
import "../pages/styles/InitSessionPage.css";
import hearticon from "../assets/initsession/pic.jpg";

const InitSessionPage = () => {
  const { startSession, sessionID, agreed, setAgreed } = useAuth();
  const navigate = useNavigate();
  const [gottenSessionID, setGottenSessionID] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [checked, setChecked] = useState(false);
  const checkboxValue =
    "I have read, understood and I accept and agree to comply with the Terms of Use of EndlessMedicalAPI and Endless Medical services. The Terms of Use are available on endlessmedical.com";

  const startMedicalSession = async () => {
    try {
      const response = await GetSessionIdRequest();
      const loginSessionID = response.data.SessionID;
      // Logger('Login Session ID: ', loginSessionID);
      startSession(loginSessionID);
      setGottenSessionID(true);
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
        setAgreedToTerms(!agreedToTerms);
        setAgreed(true);
        navigate("/addSymptoms");
        Logger("Agreed state: ", agreed);
      } else {
        Logger("AcceptTermsPostRequest Error: ", postResponse);
      }
    } catch (error) {
      Logger("Post request error: ", error);
    }
  };

  return (
    <div className="InitSession">
      {agreed === true ? (
        <>
        <span id="backbtn">
            <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
          </span>
        <div className="top">
        <div className="content">
          <div className="session-text">
            <h3 className="session-title">Welcome back, TEMA User</h3>
            <p className="session-description">
              Your Comprehensive Health Companion
              At TEMA, we are dedicated to bringing quality healthcare to rural and underserved areas. 
              Our app offers you personalized health insights, easy appointment scheduling, and access to your medical records—all in one place.
            </p>
            <span id="continue">
            <PrimaryButton onClick={() => navigate('/addSymptoms')}>
              Continue
            </PrimaryButton>
          </span>
          </div>
          <div className="session-image">
            <img src={hearticon} alt="hero" />
            <div className="text-box">
              <p>
                HealthBridge provides the tools you need to manage your health effectively. From appointment scheduling to accessing your medical records, we have you covered.
              </p>
              <PrimaryButton onClick={() => navigate('/learnMore')}>Learn More</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
      </>
      ) : (
        <div>
           <span id="backbtn">
            <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
          </span>
          <br></br>
          <h3>Are you a new user</h3>
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

            {gottenSessionID && (
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

                <PrimaryButton
                  onClick={handleProceed}
                  disabled={!checked || !gottenSessionID}
                >
                  Proceed
                </PrimaryButton>
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
