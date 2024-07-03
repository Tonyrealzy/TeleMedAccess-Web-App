import React from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/Button/PrimaryButton";
import { GetAnalysisRequest } from "../services/GetService";
import Logger from "../components/Logger";


const DifferentialDiagnosisPage = () => {
  const { sessionID, endSession } = useAuth();
  const navigate = useNavigate();

  const getDifferentialAnalysis = async () => {
    try {
      const response = await GetAnalysisRequest(sessionID);
      const analysisResult = response.json();
      if (analysisResult.data.status === 'ok') {
        const Diseases = analysisResult.Diseases;
        const VariableImportances = analysisResult.VariableImportances;
        Logger('Diseases: ', Diseases);
        Logger('VariableImportances: ',VariableImportances);
        Logger(analysisResult);
      }
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
      <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
      <br></br>
      <h3>Differential-Diagnosis Page</h3>
      <aside>
      <p>
        This page contains the user's Differential-Diagnosis results and
        recommendations.
      </p>
      <PrimaryButton onClick={getDifferentialAnalysis}>Get Result</PrimaryButton>
      </aside>

      <p>Do you want to end this session with your virtual doctor?</p>
      <PrimaryButton onClick={endMedicalSession}>Yes</PrimaryButton>
      <PrimaryButton onClick={() => navigate(-1)}>No</PrimaryButton>
    </div>
  );
};

export default DifferentialDiagnosisPage;
