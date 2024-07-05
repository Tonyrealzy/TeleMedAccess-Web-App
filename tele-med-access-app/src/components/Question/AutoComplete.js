import PrimaryButton from "../Button/PrimaryButton";

const replaceHtmlTags = (text) => text.replace(/(<([^>]+)>)/gi, '');

const AutoComplete = ({
  searchTerm,
  handleInputChange,
  errorMessageTxt,
  selectedSymptoms,
  searchResults,
  handleResultDeselect,
  handleResultSelect,
  symptomPrefix,
  preSelectedSymptoms,
}) => {

  const isMaxSymptomsSelected = () => {
    if (preSelectedSymptoms.length + selectedSymptoms.length === 4)
    {
      return true;
    }

    return false;
  };

  return (
    <>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
        disabled={false}
      />
      <div>
        <section>
          {searchResults.map((result) => (
            <section
              key={`${result.id}-${result.medical_name}`}
              onClick={() => handleResultSelect(result)}
            >
              {replaceHtmlTags(result.highlight)}
            </section>
          ))}
        </section>
        {isMaxSymptomsSelected() && <p style={{color: "#47b275", fontSize: "small"}}>We don't need any more symptoms. You can continue with the assessment.</p>}
        {!isMaxSymptomsSelected() && <p style={{color: "#47b275", fontSize: "small"}}>{errorMessageTxt}</p>}
        {(!!selectedSymptoms.length || !!preSelectedSymptoms.length) && (
          <div>
            <h3>Your symptoms:</h3>
            {preSelectedSymptoms.map((symptom) => (
              <div>
                <p key={symptom.cui}>{symptom.user_facing_name}</p>
              </div>
            ))}
            {selectedSymptoms.map((result) => (
              <div key={result.cui}>
                <p>{replaceHtmlTags(result.highlight)}</p>

                <PrimaryButton onClick={() => handleResultDeselect(result)}>End</PrimaryButton>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AutoComplete;
