import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/Button/PrimaryButton";
import Logger from "../components/Logger";
import {
  AddSymptomPostRequest,
  RemoveSymptomPostRequest,
} from "../services/PostService";
import { useAuth } from "../AuthContext";
import AllSymptoms from "../models/SymptomsModel.json";
import './styles/UserSymptomsPage.css'

const UserSymptomsPage = () => {
  const navigate = useNavigate();
  const { sessionID } = useAuth();
  const [selectedParameters, setSelectedParameters] = useState({});
  const [selectedItemCaseFeature, setSelectedItemCaseFeature] = useState("");
  const [selectedItemCaseChoice, setSelectedItemCaseChoice] = useState("");
  const [selectedItemCaseTests, setSelectedItemCaseTests] = useState("");
  const [selectedItemCaseOtherTests, setSelectedItemCaseOtherTests] =
    useState("");
  const [selectedItemValueFeature, setSelectedItemValueFeature] =
    useState(null);
  const [selectedItemValueChoice, setSelectedItemValueChoice] = useState(null);
  const [selectedItemValueTest, setSelectedItemValueTest] = useState(null);
  const [selectedItemValueOtherTest, setSelectedItemValueOtherTest] =
    useState(null);
  const [validationErrors, setValidationErrors] = useState({});
  const [rows, setRows] = useState([]);

  const handleParameterChange = (name, value) => {
    const selectedItem = AllSymptoms.find((item) => item.name === name);

    if (selectedItem) {
      const { min, max } = selectedItem;

      if (
        (min !== undefined && value < min) ||
        (max !== undefined && value > max)
      ) {
        setValidationErrors({
          ...validationErrors,
          [name]: "Value out of range.",
        });
        return;
      } else {
        setValidationErrors({});
      }
    }
    setSelectedParameters({
      ...selectedParameters,
      [name]: value,
    });
  };

  const handleItemSelect = (caseName, event) => {
    const itemName = event.target.value;

    switch (caseName) {
      case "choiceCaseEntries":
        setSelectedItemCaseChoice(itemName);
        break;
      case "testCaseEntries":
        setSelectedItemCaseTests(itemName);
        break;
      case "featureCaseEntries":
        setSelectedItemCaseFeature(itemName);
        break;
      case "otherTestCaseEntries":
        setSelectedItemCaseOtherTests(itemName);
        break;
      default:
        break;
    }

    const selectedItem = AllSymptoms.find((item) => item.name === itemName);
    if (selectedItem) {
      handleParameterChange(itemName);
    }
  };

  const choiceCaseEntries = AllSymptoms.filter(
    (item) =>
      item.choices && item.subcategory1 === "" && item.subcategory4 === ""
  );
  const testCaseEntries = AllSymptoms.filter(
    (item) => item.subcategory1 !== "" && item.max
  );
  const featureCaseEntries = AllSymptoms.filter(
    (item) =>
      !item.choices &&
      item.max &&
      (item.type === "double" || item.type === "integer")
  );
  const otherTestCaseEntries = AllSymptoms.filter(
    (item) =>
      item.choices && (item.subcategory1 !== "" || item.subcategory4 !== "")
  );

  const renderChoiceBasedInput = (item) => (
    <select
      value={selectedParameters[item.name] || "2"}
      onChange={(e) => {
        handleParameterChange(item.name, e.target.value);
        setSelectedItemValueChoice(e.target.value);
      }}
    >
      {item.choices.map((choice) => (
        <option key={choice.value} value={choice.value}>
          {choice.text}
        </option>
      ))}
    </select>
  );

  const renderFeatureBasedInput = (item) => (
    <input
      type="number"
      value={selectedParameters[item.name]}
      min={item.min}
      max={item.max}
      onChange={(e) => {
        handleParameterChange(item.name, parseInt(e.target.value, 10));
        const targetValue = parseInt(e.target.value, 10);
        if (targetValue > item.min && targetValue < item.max) {
          setSelectedItemValueFeature(targetValue);
        } else {
          setSelectedItemValueFeature(item.default);
        }
      }}
    />
  );

  const renderTestBasedInput = (item) => (
    <input
      type="number"
      min={item.min}
      max={item.max}
      value={selectedParameters[item.name]}
      onChange={(e) => {
        handleParameterChange(item.name, parseInt(e.target.value, 10));
        const targetValue = parseInt(e.target.value, 10);
        if (targetValue > item.min && targetValue < item.max) {
          setSelectedItemValueTest(targetValue);
        } else {
          setSelectedItemValueTest(item.default);
        }
      }}
    />
  );

  const renderOtherTestBasedInput = (item) => (
    <select
      value={selectedParameters[item.choices.value]}
      onChange={(e) => {
        handleParameterChange(item.name, e.target.value);
        setSelectedItemValueOtherTest(e.target.value);
      }}
    >
      {item.choices.map((choice) => (
        <option key={choice.value} value={choice.value}>
          {choice.text}
        </option>
      ))}
    </select>
  );

  const addFeature = async () => {
    const symptomName = selectedItemCaseFeature;
    const selectedSymptom = selectedItemValueFeature;

    try {
      if (selectedItemValueFeature) {
      }
      const response = await AddSymptomPostRequest(
        symptomName,
        selectedSymptom,
        sessionID
      );
      const addedFeature = response.data;
      Logger("Added Symptom: ", addedFeature);
      handleAddRow();
    } catch (error) {
      Logger("Error: ", error.message);
    }
  };

  const addSymptom = async () => {
    const symptomName = selectedItemCaseChoice;
    const selectedSymptom = selectedItemValueChoice;

    try {
      const response = await AddSymptomPostRequest(
        symptomName,
        selectedSymptom,
        sessionID
      );
      const addedSymptom = response.data;
      Logger("Added Symptom: ", addedSymptom);
    } catch (error) {
      Logger("Error: ", error.message);
    }
  };

  const addTestResult = async () => {
    const symptomName = selectedItemCaseTests;
    const selectedSymptom = selectedItemValueTest;

    try {
      const response = await AddSymptomPostRequest(
        symptomName,
        selectedSymptom,
        sessionID
      );
      const addedSymptom = response.data;
      Logger("Added Symptom: ", addedSymptom);
    } catch (error) {
      Logger("Error: ", error.message);
    }
  };

  const addOtherTestResult = async () => {
    const symptomName = selectedItemCaseOtherTests;
    const selectedSymptom = selectedItemValueOtherTest;

    try {
      const response = await AddSymptomPostRequest(
        symptomName,
        selectedSymptom,
        sessionID
      );
      const addedSymptom = response.data;
      Logger("Added Symptom: ", addedSymptom);
    } catch (error) {
      Logger("Error: ", error.message);
    }
  };

  const removeSymptom = async () => {
    const symptomName = selectedItemCaseChoice ||
    selectedItemCaseFeature ||
    selectedItemCaseTests ||
    selectedItemCaseOtherTests;
    const SessionID = sessionID;

    try {
      const response = await RemoveSymptomPostRequest(symptomName, SessionID);
      const removedSymptom = response.data;
      Logger("Removed Symptom: ", removedSymptom);
    } catch (error) {
      Logger("Error: ", error.message);
    }
  };

  const handleAddRow = () => {
    const newRow = {
      name:
        selectedItemCaseChoice ||
        selectedItemCaseFeature ||
        selectedItemCaseTests ||
        selectedItemCaseOtherTests,
      value:
        selectedParameters[selectedItemCaseChoice] ||
        selectedParameters[selectedItemCaseFeature] ||
        selectedParameters[selectedItemCaseTests] ||
        selectedParameters[selectedItemCaseOtherTests]
    };
    setRows([...rows, newRow]);
    // setSelectedItemCaseChoice('');
    // setSelectedItemCaseFeature('');
    // setSelectedItemCaseTests('');
    // setSelectedItemCaseOtherTests('');
    // setSelectedParameters({});
  };
  const handleDeleteRow = async (index) => {
    await removeSymptom();
    setRows(rows.filter((_, rowIndex) => rowIndex!== index));
  };

  const isButtonDisabled = Object.keys(validationErrors).length > 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedItemValueFeature && selectedItemValueChoice) {
      navigate("/diagnosis");
    } else {
      return
    }
  };


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

      <br></br>
      <br></br>

      <form onSubmit={handleSubmit}>
        <section>
          <h3>Personal Features</h3>
          <select
            onChange={(e) => handleItemSelect("featureCaseEntries", e)}
            value={selectedItemCaseFeature}
          >
            <option value="">---Personal features---</option>
            {featureCaseEntries.map((item) => (
              <option key={item.value} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
          <br></br>
          {selectedItemCaseFeature && (
            <aside>
              {featureCaseEntries
                .filter((item) => item.name === selectedItemCaseFeature)
                .map((item) => (
                  <aside key={item.name}>
                    <label>
                      {item.text} ({item.min} to {item.max}):{" "}
                    </label>
                    {renderFeatureBasedInput(item)}
                  </aside>
                ))}
            </aside>
          )}
          <br></br>
          <aside>
            <PrimaryButton
              onClick={addFeature}
              disabled={!selectedItemValueFeature || isButtonDisabled}
            >
              Add Feature
            </PrimaryButton>
          </aside>
        </section>

        <br></br>
        <section>
          <h3>Symptoms Experienced</h3>
          <select
            onChange={(e) => handleItemSelect("choiceCaseEntries", e)}
            value={selectedItemCaseChoice}
          >
            <option value="">--Select symptoms you experience--</option>
            {choiceCaseEntries.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <br></br>
          {selectedItemCaseChoice && (
            <aside>
              {choiceCaseEntries
                .filter((item) => item.name === selectedItemCaseChoice)
                .map((item) => (
                  <aside key={item.name}>
                    <label>{item.text}: </label>
                    {renderChoiceBasedInput(item)}
                  </aside>
                ))}
            </aside>
          )}
          <br></br>
          <aside>
            <PrimaryButton
              onClick={addSymptom}
              disabled={!selectedItemValueChoice}
            >
              Add Symptom
            </PrimaryButton>
          </aside>
        </section>

        <br></br>
        <section>
          <h3>Tests conducted</h3>
          <select
            onChange={(e) => handleItemSelect("testCaseEntries", e)}
            value={selectedItemCaseTests}
          >
            <option value="">--Select tests you have taken--</option>
            {testCaseEntries.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <br></br>
          {selectedItemCaseTests && (
            <aside>
              {testCaseEntries
                .filter((item) => item.name === selectedItemCaseTests)
                .map((item) => (
                  <aside key={item.name}>
                    <label>
                      {item.text} ({item.min} to {item.max}):{" "}
                    </label>
                    {renderTestBasedInput(item)}
                  </aside>
                ))}
            </aside>
          )}
          <br></br>
          <aside>
            <PrimaryButton
              onClick={addTestResult}
              disabled={!selectedItemValueTest || isButtonDisabled}
            >
              Add Result
            </PrimaryButton>
          </aside>{" "}
        </section>

        <section>
          <h3>Other tests conducted</h3>
          <select
            onChange={(e) => handleItemSelect("otherTestCaseEntries", e)}
            value={selectedItemCaseOtherTests}
          >
            <option value="">--Select other tests you have taken--</option>
            {otherTestCaseEntries.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <br></br>
          {selectedItemCaseOtherTests && (
            <aside>
              {otherTestCaseEntries
                .filter((item) => item.name === selectedItemCaseOtherTests)
                .map((item) => (
                  <aside key={item.name}>
                    <label>{item.text}: </label>
                    {renderOtherTestBasedInput(item)}
                  </aside>
                ))}
            </aside>
          )}
          <br></br>
          <aside>
            <PrimaryButton
              onClick={addOtherTestResult}
              disabled={!selectedItemValueOtherTest}
            >
              Add TestResult
            </PrimaryButton>
          </aside>
        </section>
      </form>
      <br></br>

      <section>
        <h3>Selected Parameters</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.value}</td>
                <td>
                  <button onClick={() => handleDeleteRow(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <br></br>
      <PrimaryButton
        onClick={handleSubmit}
        disabled={!selectedItemValueFeature && !selectedItemValueChoice}
      >
        Proceed
      </PrimaryButton>

    </div>
  );
};

export default UserSymptomsPage;
