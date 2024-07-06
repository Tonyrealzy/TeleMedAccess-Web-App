const getTriageInfo = (level) => {
  if (/^emergency/.test(level)) {
    return { type: "danger", title: "Emergency" };
  }

  if (/^(urgent|dangerous)/.test(level)) {
    return { type: "warning", title: "Urgent" };
  }

  if (/^routine/.test(level)) {
    return { type: "info", title: "Routine" };
  }

  if (/^self_/.test(level)) {
    return { type: "success", title: "Self-Care" };
  }

  if (/^single_symptom/.test(level)) {
    return { type: "no-outcome", title: "No Outcome" };
  }

  if (/^highly_non_path/.test(level)) {
    return { type: "no-outcome", title: "Self-Care" };
  }

  return { type: "success", title: "No outcome" };
};

export default getTriageInfo;
