import Bullets from "../Bullets/Bullets";
import Accordian from "./Accordian";
import Heading from "../Heading";
import { ArticleContainer, DurationText } from "./ReportStyles";

const ConsultationInfoBox = ({
  positiveSymptoms,
  negativeSymptoms,
  duration,
  userProfile,
  influencingFactors,
}) => {
  return (
    <ArticleContainer className="light">
      <Accordian header="What you told us:">
        {duration && (
          <>
            <Heading as="h2" kind="report" className="center">
              Duration of symptoms:
            </Heading>
            <DurationText>{duration}</DurationText>
          </>
        )}
        {!!positiveSymptoms.length && (
          <>
            <Heading as="h2" kind="report" className="center">
              Symptoms you reported:
            </Heading>
            <Bullets>
              {positiveSymptoms.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </Bullets>
          </>
        )}
        {!!negativeSymptoms.length && (
          <>
            <Heading as="h2" kind="report" className="center">
              You said theres no:
            </Heading>
            <Bullets>
              {negativeSymptoms.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </Bullets>
          </>
        )}
        {userProfile && (
          <>
            <Heading as="h2" kind="report" className="center">
              Basic Info
            </Heading>
            <Bullets>
              <li>
                {userProfile.gender.replace(/^(\w{1})/, (x) => x.toUpperCase())}
              </li>
              <li>{`Born in ${userProfile.year_of_birth}`}</li>
            </Bullets>
          </>
        )}
        {!!influencingFactors.length && (
          <>
            <Heading as="h2" kind="report" className="center">
              Health Background
            </Heading>
            <Bullets>
              {influencingFactors.map(
                ({ name, value: { value, not_sure } }) => (
                  <li key={name}>
                    {`${name} - ${
                      not_sure ? "Not sure" : value ? "Yes" : "No"
                    }`}
                  </li>
                ),
              )}
            </Bullets>
          </>
        )}
      </Accordian>
    </ArticleContainer>
  );
};

export default ConsultationInfoBox;
