export const screens = [
  {
    type: "name",
    messages: [
      {
        type: "text",
        text: "Welcome to Healthily - Smart Symptom Checker.",
      },
      {
        type: "text",
        text: "In order to make sure I give most accurate information I need to first ask a few questions.",
      },
      {
        type: "text",
        text: "What is your name?",
      },
    ],
    constraints: {
      min_selections: 1,
      max_selections: 100,
    },
  },
  {
    type: "sex",
    messages: [
      {
        type: "text",
        text: "What was your assigned sex at birth?",
      },
      {
        type: "text",
        text: "We appreciate your identifying gender might be different.",
      },
    ],
    choices: [
      {
        type: "simple",
        id: "MALE",
        text: "Male",
      },
      {
        type: "simple",
        id: "FEMALE",
        text: "Female",
      },
    ],
    constraints: {
      min_selections: 1,
      max_selections: 1,
    },
  },
  {
    type: "year_of_birth",
    messages: [
      {
        type: "text",
        text: "What year were you born?",
      },
    ],
    constraints: {
      min_selections: 1900,
      max_selections: 2007,
    },
  },
  {
    type: "initial_symptom",
    messages: [
      {
        type: "text",
        text: "Please tell me what symptoms you have today.",
      },
      {
        type: "text",
        text: "I'm a chatbot, so short sentences work best.",
      },
    ],
    constraints: {
      min_selections: 1,
      max_selections: 1000,
    },
  },
];
