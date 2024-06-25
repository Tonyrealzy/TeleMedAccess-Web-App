import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../components/Button/PrimaryButton';

const UserSymptomsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PrimaryButton onClick={() => navigate(-1)}>Back</PrimaryButton>
      <br></br>
      <p>Here, users add their symptoms and then get a differential diagnosis.
        <br></br>
        The SUBMIT button here links the user to the Differential Diagnosis Results page.
      </p>
    </div>
  )
}

export default UserSymptomsPage
