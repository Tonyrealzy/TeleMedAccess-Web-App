import { useState } from "react";
import { Checkbox } from "../components/Checkbox/Checkbox";
import PrimaryButton from "../components/Button/PrimaryButton";
import Header from "../components/Heading/Header";


const LegalScreen = ({ confirmLegal }) => {
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  return (
    <>
      <Header phase="Welcome" percentage={0} />
      <Checkbox
        name={"terms"}
        checked={termsAgreed}
        id={"terms"}
        onChange={() => setTermsAgreed(!termsAgreed)}
        label={`Yes, I'm over 16 and I accept your terms.`}
        simple={true}
      />

      <Checkbox
        name={"privacy"}
        checked={privacyAgreed}
        id={"privacy"}
        onChange={() => setPrivacyAgreed(!privacyAgreed)}
        label="Yes, Healthily can process my health data to help me manage my health with recommendations, information, and care options, as described in the Privacy Policy."
        simple={true}
      />

      <PrimaryButton
        disabled={!termsAgreed || !privacyAgreed}
        onClick={confirmLegal}
      >
        Let's go!
      </PrimaryButton>
    </>
  );
};

export default LegalScreen;
