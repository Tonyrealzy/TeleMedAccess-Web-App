import { useEffect, useState } from "react";
import Articles from "../Article/Articles";
import Heading from "../Heading";
import Cause from "./Cause";
import Summary from "./Summary";
import DateTime from "../DateTime/DateTime";
import PrimaryButton from "../Button/PrimaryButton";
import {
  ArticleContainer,
  BackImage,
  ReportHeader,
  Wrapper,
} from "./ReportStyles";
import { useNavigate } from "react-router-dom";
import { openInNewTab } from "../../utils/link";
import Back from "../../assets/svgs/back-icon.svg";
import ConsultationInfoBox from "./ConsultationInfoBox";
import CauseArticle from "./CauseArticle";

const Consultation = ({ report }) => {
  const navigate = useNavigate();
  const summary = report?.summary;


  const {
    articles_v3: articles = [],
    consultation_triage,
    extracted_symptoms,
    additional_symptoms,
    negative_symptoms,
    duration,
    user_profile,
    influencing_factors,
  } = summary;

  const [showCause, setShowCause] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState();
  const [selectedArticleIndex, setSelectedArticleIndex] = useState();
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    if (!summary) return;

    setDateTime(Date.now());
  }, []);

  const [componentLoaded, setComponentLoaded] = useState(false);

  // This component was throwing a hydration error relating
  // to next/image component. With more time I'd fix it
  // but this is a workaround given tight deadlines...
  useEffect(() => {
    setComponentLoaded(true);
  }, []);

  const handleArticleClick = (selectedArticleIndex) => {
    setShowCause(true);
    setSelectedArticleIndex(selectedArticleIndex);
    setSelectedArticle(articles[selectedArticleIndex]);
  };

  return (
    <Wrapper>
      {componentLoaded && (
        <>
          <ReportHeader>
            <Heading as="h1" kind="heading">
              Your report
            </Heading>
            <DateTime dateTime={dateTime} />
          </ReportHeader>
          {showCause && (
            <BackImage
              src={Back}
              alt="Go back"
              onClick={() => setShowCause(false)}
            />
          )}
          {showCause ? (
            <Cause article={selectedArticle} index={selectedArticleIndex} />
          ) : (
            <>
              {!!articles.length && (
                <>
                  <Heading kind="heading" as="h2">
                    Possible Causes
                  </Heading>
                  <Articles articles={articles} onClick={handleArticleClick} />
                </>
              )}
            </>
          )}
          {showCause && selectedArticle && (
            <>
              <Heading as="h3" kind="heading">
                Useful reading
              </Heading>
              <CauseArticle article={selectedArticle} />
            </>
          )}

          {consultation_triage && !showCause && (
            <>
              <Heading kind="heading" as="h2">
                Summary
              </Heading>
              <Summary level={consultation_triage.level}>
                {consultation_triage.triage_advice}
              </Summary>
            </>
          )}

          {!showCause && (
            <>
              <ConsultationInfoBox
                positiveSymptoms={[
                  ...extracted_symptoms,
                  ...additional_symptoms,
                ]}
                negativeSymptoms={negative_symptoms}
                duration={duration}
                userProfile={user_profile}
                influencingFactors={influencing_factors}
              />
              <aside>
                <PrimaryButton
                  onClick={() =>
                    openInNewTab("https://www.livehealthily.com/legal/safe-use")
                  }
                >
                  How to use Healthily safely
                </PrimaryButton>
                <PrimaryButton onClick={() => navigate("/condition")}>
                  Start a new consultation
                </PrimaryButton>
              </aside>

              <ArticleContainer className="dark">
                <span>
                  The suggested next steps are base on a group of people with
                  similar characteristics such as your age, sex and health
                  background, who are generally healthy and don’t suffer from
                  any chronic or rare medical conditions. Healthily can’t
                  consider all the information a doctor can, and is not able to
                  identify all conditions or symptoms.
                </span>
              </ArticleContainer>
            </>
          )}

          {showCause && (
            <aside>
              <PrimaryButton onClick={() => navigate("/condition")}>
                That's all, thanks
              </PrimaryButton>
            </aside>
          )}
        </>
      )}
    </Wrapper>
  );
};

export default Consultation;
