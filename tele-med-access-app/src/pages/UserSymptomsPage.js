import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/Button/PrimaryButton";
import { GetAllSymptomsRequest } from "../services/GetService";
import Logger from "../components/Logger";
import {
  AddSymptomPostRequest,
  RemoveSymptomPostRequest,
} from "../services/PostService";
import { useAuth } from "../AuthContext";

const UserSymptomsPage = () => {
  const navigate = useNavigate();
  const { sessionID } = useAuth();
  const [userSymptom, setUserSymptom] = useState("");

  const fetchAllSymptoms = async () => {
    try {
      const response = await GetAllSymptomsRequest();
      const allSymptoms = response.data.data;
      Logger(allSymptoms);
    } catch (error) {
      Logger("Error ", error.message);
    }
  };

  const addSymptom = async () => {
    const symptomName = "Age";
    const symptomValue = "55";
    // So we'd be using the parameters: laytext, name, minimum, maximum, default and then category for sorting the type of parameters to be rendered.

    try {
      const response = await AddSymptomPostRequest(
        symptomName,
        symptomValue,
        sessionID
      );
      const addedSymptom = response.data;
      Logger(addedSymptom);
    } catch (error) {
      Logger("Error ", error.message);
    }
  };
  
  Logger(sessionID);

  const removeSymptom = async () => {
    const symptomName = "";

    try {
      const response = await RemoveSymptomPostRequest(symptomName, sessionID);
      const addedSymptom = response.data;
      Logger(addedSymptom);
    } catch (error) {
      Logger("Error ", error.message);
    }
  };

  return (
    <div>
      <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
      <br></br>
      <p>
        Here, users add their symptoms and then get a differential diagnosis.
        <br></br>
        The SUBMIT button here links the user to the Differential Diagnosis
        Results page.
      </p>
      

      <PrimaryButton onClick={fetchAllSymptoms}>Fetch All Symptoms</PrimaryButton>
      <br></br>
      <br></br>
      <PrimaryButton onClick={addSymptom}>Add Symptoms</PrimaryButton>
    </div>
  );
};

export default UserSymptomsPage;
