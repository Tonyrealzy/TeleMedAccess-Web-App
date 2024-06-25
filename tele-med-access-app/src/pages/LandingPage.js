import React from "react";
import './styles/LandingPage.css';
import PrimaryButton from '../components/Button/PrimaryButton';
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <p>
        Here's the landing page!!!
        <br></br>
        There should be a GET_STARTED button here
        that navigates the user to the Initialise Session page.
      </p>

      <PrimaryButton onClick={() => navigate('/initSession')}>GET STARTED</PrimaryButton>
    </div>
  );
};

export default LandingPage;
