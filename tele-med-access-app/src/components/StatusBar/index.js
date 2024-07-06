import CloseIcon from "../Question/AutoComplete/CloseIcon";
import React, { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import {
  ExitButton,
  ProgressBar,
  ProgressBarWrapper,
  StatusBarInner,
  StatusBarTitle,
  StatusBarWrapper,
  ExitButtonContainer,
} from "./statusBar.styles";
import { Button } from "../Button";


const StatusBar = ({
  phase = "",
  percentage = 0
}) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleExitClick = () => {
    setShowModal(true);
  };

  const handleModalAction = (confirmed) => {
    if (confirmed) {
      navigate('/');
    }
    setShowModal(false);
  };

  return (
    <StatusBarWrapper>
      <StatusBarInner>
        <StatusBarTitle>{phase}</StatusBarTitle>
        {percentage > 0 && (
          <ProgressBarWrapper>
            <ProgressBar percentage={percentage} />
          </ProgressBarWrapper>
        )}

        <ExitButtonContainer>
          <ExitButton onClick={handleExitClick}>
            <CloseIcon />
          </ExitButton>

          {/* <Modal
            style={{ fontFamily: "Libre Franklin, sans-serif" }}
            open={showModal}
            onClose={() => handleModalAction(false)}
          >
            <Modal.Body>
              Are you sure you want to end this consultation?
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => handleModalAction(false)} light>
                Cancel
              </Button>
              <Button onClick={() => handleModalAction(true)}>
                End consultation
              </Button>
            </Modal.Footer>
          </Modal> */}
        </ExitButtonContainer>
      </StatusBarInner>
    </StatusBarWrapper>
  );
};

export default StatusBar;
