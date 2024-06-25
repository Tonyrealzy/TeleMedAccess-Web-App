import React from 'react';
import PrimaryButton from '../components/Button/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const TermsConditionsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
      <br></br>
      <h3>Terms & Conditions are written here.</h3>
      <p>There should be a BACK button at the top.</p>
    </div>
  )
}

export default TermsConditionsPage
