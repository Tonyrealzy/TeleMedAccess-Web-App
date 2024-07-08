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
      <Header phase="Welcome" percentage={0} />
      <Heading kind="heading" as="h1">
        Hi Adventurer...
      </Heading>

      <p style={{marginBottom: '1.5rem'}}>
        Before you embark on your session with the virtual doctor, we need you
        to take care of a tiny, but very important task -agreeing to our Privacy
        Agreement terms. But don't worry, we've made it as simple and delightful
        as possible.
      </p>

      <Checkbox
        name={"terms"}
        checked={termsAgreed}
        id={"terms"}
        onChange={() => setTermsAgreed(!termsAgreed)}
        label={`I'm over 16 and I accept your terms.`}
        simple={true}
      />

      <Checkbox
        name={"privacy"}
        checked={privacyAgreed}
        id={"privacy"}
        onChange={() => setPrivacyAgreed(!privacyAgreed)}
        label="TEMA can process my health data to help me manage my health with recommendations, information, and care options, as described in the Privacy Policy."
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
