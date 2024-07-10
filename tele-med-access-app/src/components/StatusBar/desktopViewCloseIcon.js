import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DesktopCloseIconContainer } from "./statusBar.styles";
import PrimaryButton from "../Button/PrimaryButton";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const Overlay = styled.div`
  padding: 2.5rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  pointer-events: all;
  margin: 1rem;
`;

const ModalStyles = styled.div`
  background-color: #f2e8cf;
  fontfamily: Libre Franklin; sans-serif;
  position: absolute;
  justify-content: center;
  text-align: center;
  top: 35%;
  left: 12%;
  width: 76%;
  padding: 0.5rem;
  border-radius: 1rem;
  @media (min-width: 1024px) {
   top: 30%;
  left: 25%;
  width: 50%;}
`;

const DesktopViewCloseIcon = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleExitClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const handleModalAction = (confirmed) => {
    if (confirmed) {
      navigate(-1);
    }
    setShowModal(false);
  };

  return (
    <DesktopCloseIconContainer>
      <PrimaryButton onClick={handleExitClick}>End Session</PrimaryButton>

      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        animation={true}
        centered
        size="sm"
        pointerEvents="none"
      >
        <ModalStyles>
          <Overlay>
            <Modal.Header>
              <Modal.Title>
                <h3>End Session with Virtual-doctor</h3>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ padding: "2rem 0.2rem" }}>
              <p>Are you sure you want to end this consultation?</p>
            </Modal.Body>
            <Modal.Footer
              style={{
                justifyContent: "center",
                display: "flex",
                padding: "0.5rem",
              }}
            >
              <PrimaryButton
                onClick={handleModalAction}
                style={{ margin: "0 0.5rem" }}
              >
                Yes
              </PrimaryButton>
              <PrimaryButton
                onClick={handleClose}
                style={{ margin: "0 0.5rem" }}
              >
                No
              </PrimaryButton>
            </Modal.Footer>
          </Overlay>
        </ModalStyles>
      </Modal>
    </DesktopCloseIconContainer>
  );
};

export default DesktopViewCloseIcon;
