import React from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/Button/PrimaryButton";


const DifferentialDiagnosisPage = () => {
  const { endSession } = useAuth();
  const navigate = useNavigate();

  const endMedicalSession = () => {
    endSession();
    navigate("/");
  };

  return (
    <div>
      <h3>Differential-Diagnosis Page</h3>
      <p>
        This page contains the user's Differential-Diagnosis results and
        recommendations.
      </p>

      <PrimaryButton onClick={endMedicalSession}>End your Session</PrimaryButton>
    </div>
  );
};

export default DifferentialDiagnosisPage;
