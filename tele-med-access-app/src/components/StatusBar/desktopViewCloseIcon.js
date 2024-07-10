import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DesktopCloseIconContainer } from "./statusBar.styles";
import PrimaryButton from "../Button/PrimaryButton";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";

const Overlay = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  pointer-events: all;
  margin: 1rem;
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
        style={{
          backgroundColor: "#f2e8cf",
          fontFamily: "Libre Franklin, sans-serif",
          position: "absolute",
          justifyContent: "center",
          textAlign: "center",
          top: "30%",
          left: "15%",
          width: "70%",
          padding: "2rem",
          borderRadius: "1rem",
        }}
        backdrop="static"
        keyboard={false}
        animation={true}
        centered
        pointerEvents="none"
      >
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
            <PrimaryButton onClick={handleClose} style={{ margin: "0 0.5rem" }}>
              No
            </PrimaryButton>
          </Modal.Footer>
        </Overlay>
      </Modal>
    </DesktopCloseIconContainer>
  );
};

export default DesktopViewCloseIcon;
