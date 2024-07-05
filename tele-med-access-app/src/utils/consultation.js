import getTriageInfo from "./getTriageInfo";

const NO_OUTCOME = "no-outcome";
export const SELF_CARE = "Self-Care";
export const SUCCESS = "success";

export const isLevelNoOutcome = (level) =>
  getTriageInfo(level)?.type === NO_OUTCOME;

export const getConsultationType = (type, title) =>
  type === NO_OUTCOME && title === SELF_CARE ? SUCCESS : type;
