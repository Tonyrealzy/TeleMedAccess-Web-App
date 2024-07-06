import React, { useState } from "react";
import ButtonBar from "../../Button/ButtonBar";
import { Header } from "../../Header";
import Heading from "../../Heading";
import { Checkbox } from "../../Question/Checkbox";

const LegalScreen = ({ confirmLegal, query }) => {
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  // const { logo } = query;

  return (
    <>
      <Header phase="Welcome" percentage={0}/>
      <Heading kind="heading" as="h1">
        Now for the legal bit ...
      </Heading>

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

      <ButtonBar
        disabled={!termsAgreed || !privacyAgreed}
        onClick={confirmLegal}
        buttonText="Ok, let's go"
      />
    </>
  );
};

export default LegalScreen;
