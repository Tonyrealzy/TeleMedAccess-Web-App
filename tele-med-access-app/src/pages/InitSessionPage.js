import React, { useState } from "react";
// import { useAuth } from "../AuthContext";
import { useNavigate, Link } from "react-router-dom";
import Logger from "../components/Logger/Logger";
import PrimaryButton from "../components/Button/PrimaryButton";
import "../pages/styles/InitSessionPage.css";
import hearticon from "../assets/initsession/pic.jpg";

const InitSessionPage = () => {
  // const { agreed, setAgreed } = useAuth();
  const { agreed, setAgreed } = useState(false);
  const navigate = useNavigate();
  const [gottenSessionID, setGottenSessionID] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [checked, setChecked] = useState(false);
  const checkboxValue =
    "I have read, understood and I accept and agree to comply with the Terms of Use of EndlessMedicalAPI and Endless Medical services. The Terms of Use are available on endlessmedical.com";

  const startMedicalSession = () => {
    setGottenSessionID(true);
  };

  const acceptTermsConditions = () => {
    setChecked(!checked);
  };

  const handleProceed = async () => {
    if (!checked) {
      return;
    }
    setAgreedToTerms(!agreedToTerms);
    // setAgreed(true);
    navigate("/virtualDoctor");
    Logger("Agreed state: ", agreed);
  };

  return (
    <div className="InitSession">
      {agreed ? (
        <>
          <span id="backbtn">
            <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
          </span>
          <div className="top">
            <div className="content">
              <div className="session-text">
                <h3 className="session-title">Welcome back, TEMA User</h3>
                <p className="session-description">
                  We're glad to see you again! At TEMA, we're committed to
                  supporting your journey to better health. <br />
                  <br />
                  We're dedicated to bringing quality healthcare to rural and
                  underserved areas. <br></br>
                  Remember, you can always chat with our AI Doctor for
                  assistance. Let's make today a healthy day!
                </p>
                <span id="continue">
                  <PrimaryButton onClick={() => navigate("/virtualDoctor")}>
                    Continue
                  </PrimaryButton>
                </span>
              </div>
              <div className="session-image">
                <img src={hearticon} alt="Doctor" />
                <div className="text-box">
                  <p>
                    Discover the power of TEMA's AI Doctor—your virtual
                    healthcare companion. Get personalized medical advice and
                    support anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="InitSession">
          <span id="backbtn">
            <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
          </span>
          <div className="top">
            <div className="content">
              <div className="session-text">
                <h3 className="session-title">Are you a New User?</h3>
                <p className="session-description">
                  Welcome to TEMA! Your journey to better health starts here.{" "}
                  <br />
                  <br />
                  We're thrilled to have you on board. At TEMA, we are dedicated
                  to bringing quality healthcare to rural and underserved areas.
                  With our app, you can easily chat with our AI Doctor and get
                  the support you need.
                </p>
                <span id="continue">
                  <PrimaryButton onClick={startMedicalSession}>
                    Start A Session With Doctor
                  </PrimaryButton>
                </span>
                <br />
                <br />
                <br />
                <br />
                <section className="session-accept">
                  {gottenSessionID && (
                    <div>
                      <p>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={acceptTermsConditions}
                          value={checkboxValue}
                        />
                        I have read, understood, and I accept and agree to
                        comply with the{" "}
                        <Link to="/terms">Terms and Conditions</Link> of Use of
                        TeleMedAccess web app.
                      </p>
                      <br />
                      <PrimaryButton
                        onClick={handleProceed}
                        disabled={!checked || !gottenSessionID}
                      >
                        Proceed
                      </PrimaryButton>
                    </div>
                  )}
                </section>
              </div>
              <div className="session-image">
                <img src={hearticon} alt="Heart" />
                <div className="text-box">
                  <p>
                    TEMA provides the tools you need to manage your health
                    effectively. Whether you're seeking medical advice from our
                    AI Doctor or accessing your health information through
                    TeleMedAccess app(TEMA), we have you covered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InitSessionPage;
