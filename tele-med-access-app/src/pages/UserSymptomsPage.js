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
import AllSymptoms from "../models/SymptomsModel.json";


const UserSymptomsPage = () => {
  const navigate = useNavigate();
  const { sessionID } = useAuth();
  const [symptomName, setSymptomName] = useState("");
  const [selectedSymptom, setSelectedSymptom] = useState(null);
  const [currentParameter, setCurrentParameter] = useState(null);

  React.useEffect(() => {
    if (symptomName) {
      const parameter = AllSymptoms.find(item => item.text === symptomName);
      setCurrentParameter(parameter);
      setSelectedSymptom(parameter.default);
    }
  }, [symptomName]);

  const handleSymptomNameChange = (event) => {
    setSymptomName(event.target.value);
  };

  const handleSelectedSymptomChange = (event) => {
    setSelectedSymptom(event.target.value);
  };

  const fetchAllSymptoms = async () => {
    try {
      const response = await GetAllSymptomsRequest();
      const allSymptoms = response.data.data;
      Logger('All Symptoms: ', allSymptoms);
    } catch (error) {
      Logger("Error: ", error.message);
    }
  };

  const addSymptom = async () => {
    const symptomName = "WeightLoss";
    const symptomValue = "6";
    // So we'd be using the parameters: laytext, name, minimum, maximum, default and then category for sorting the type of parameters to be rendered.

    try {
      const response = await AddSymptomPostRequest(
        symptomName,
        symptomValue,
        sessionID
      );
      const addedSymptom = response.data;
      Logger('Added Symptom: ', addedSymptom);
    } catch (error) {
      Logger("Error: ", error.message);
    }
  };
  
  const removeSymptom = async () => {
    const symptomName = "Age";

    try {
      const response = await RemoveSymptomPostRequest(symptomName, sessionID);
      const removedSymptom = response.data;
      Logger('Removed Symptom: ', removedSymptom);
    } catch (error) {
      Logger("Error: ", error.message);
    }
  };

  const handleSubmit = () => {};

  return (
    <div>
      <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
      <br></br>
      <h3>Symptoms Addition Page</h3>
      <p>
        Here, users add their symptoms and then get a differential diagnosis.
        <br></br>
        The SUBMIT button here links the user to the Differential Diagnosis
        Results page.
      </p>
      

      <PrimaryButton onClick={fetchAllSymptoms}>Fetch All Symptoms</PrimaryButton>
      <br></br>
      <br></br>

      <form onSubmit={handleSubmit}>
        <section>
          <label htmlFor="symptomName">Symptom Experienced:</label>
          <select id="symptomName" value={selectedSymptom} onChange={handleSymptomNameChange}>
            <option value="">--Select Symptom--</option>
            {AllSymptoms.map((item) => (
              <option key={item.name} value={item.name}>{item.text}</option>
            ))}
          </select>
        </section>

        {currentParameter && (
          <section>
            <label htmlFor="symptomValue">{currentParameter.text} ({currentParameter.min} to {currentParameter.max}): </label>
            <input
              type="range"
              id="symptomValue"
              min={currentParameter.min}
              max={currentParameter.max}
              value={selectedSymptom}
              onChange={handleSelectedSymptomChange}
            />
            <span>{selectedSymptom}</span>
          </section>
        )}
      </form>
      <br></br>
      <br></br>

      <PrimaryButton onClick={addSymptom}>Add Symptom</PrimaryButton>
      <br></br>
      <br></br>
      <PrimaryButton onClick={removeSymptom}>Remove Symptom</PrimaryButton>
      <br></br>
      <br></br>
      <PrimaryButton onClick={() => navigate('/diagnosis')}>Proceed</PrimaryButton>
    </div>
  );
};

export default UserSymptomsPage;
