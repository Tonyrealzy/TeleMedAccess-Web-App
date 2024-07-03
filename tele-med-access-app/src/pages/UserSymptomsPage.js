import React, {useNavigate} from 'react';
import Logger from '../components/Logger';
import PrimaryButton from '../components/Button/PrimaryButton';


const UserSymptomsPage = () => {
  const navigate = useNavigate();


  return (
    <div>
      <PrimaryButton onClick={navigate(-1)}>Back</PrimaryButton>
    </div>
  )
}

export default UserSymptomsPage
