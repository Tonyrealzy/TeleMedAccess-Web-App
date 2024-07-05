const scenarioProgressTitleDictionary = {
    user_name: "About You",
    user_gender: "About You",
    user_year_of_birth: "About You",
    user_initial_symptom: "Your Symptoms",
    dynamic_buttons: "Your Symptoms",
    symptom_check: "Your Symptoms",
    autocomplete_start: "Your Symptoms",
    autocomplete_add: "Your Symptoms",
    duration: "Your Symptoms",
    health_background: "Health Background",
    questions: "Assesment",
    pre_diagnosis: "Finishing up",
    report: "Finishing up",
    info_result: "Result",
    last_info: "Result",
    evaluation: "Result",
  };
  
  export const getProgressTitle = (phase) => {
    return scenarioProgressTitleDictionary[phase];
  };
  