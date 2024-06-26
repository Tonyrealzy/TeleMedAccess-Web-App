import React from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/Button/PrimaryButton";
import { GetAnalysisRequest } from "../services/GetService";


const DifferentialDiagnosisPage = () => {
  const { endSession } = useAuth();
  const navigate = useNavigate();

  const getDifferentialAnalysis = async () => {
    try {
      const response = await GetAnalysisRequest();
      const analysisResult = response.data.data;
      Logger(analysisResult);
    } catch (error) {
      Logger("Error ", error.message);
    }
  };

  const endMedicalSession = () => {
    endSession();
    navigate("/");
  };

  return (
    <div>
      <h3>Differential-Diagnosis Page</h3>
      <aside>
      <p>
        This page contains the user's Differential-Diagnosis results and
        recommendations.
      </p>
      <PrimaryButton onClick={getDifferentialAnalysis}>Get Result</PrimaryButton>
      </aside>

      <p>Do you want to end this session with your virtual doctor?</p>
      <PrimaryButton onClick={endMedicalSession}>Yes, end session</PrimaryButton>
      <PrimaryButton onClick={() => navigate('/')}>No, save session</PrimaryButton>
    </div>
  );
};

export default DifferentialDiagnosisPage;
