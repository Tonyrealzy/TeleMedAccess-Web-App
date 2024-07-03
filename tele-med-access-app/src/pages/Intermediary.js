import React, { useState, useEffect } from "react";
import { getAccessToken } from "../services/SessionManager";

const fetchAccessToken = async (query) => {
  const token = await getAccessToken();
  return {
    props: {
      token,
      query
    },
  };
};

const Intermediary = () => {
  const [legalAgreed, setLegalAgreed] = useState(false);
  const [token, setToken] = useState("");
  const [query, setQuery] = useState({});

  const handleConfirmLegal = () => setLegalAgreed(true);

  useEffect(() => {
    const getToken = async () => {
      const token = await fetchAccessToken();
      setToken(token);
      // Example of setting query, adjust as necessary
      const urlParams = new URLSearchParams(window.location.search);
      setQuery(Object.fromEntries(urlParams.entries()));
    };

    getToken();
  }, []);

  return (
    <>
      <h1>InitSessionPage</h1>
      {/* {!legalAgreed ? (
        <AppContainer>
          <LegalScreen confirmLegal={handleConfirmLegal} query={query} />
        </AppContainer>
      ) : (
        <AppContainer>
          <Display token={token} query={query} />
        </AppContainer>
      )} */}
    </>
  );
};



export default Intermediary
