// import CloseIcon from "../Question/AutoComplete/CloseIcon";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ExitButton, DesktopCloseIconContainer } from "./statusBar.styles";
// import { Button } from "../Button";
// import Modal from "react-modal";

// const DesktopViewCloseIcon = () => {
//   const navigate = useNavigate();
//   const [showModal, setShowModal] = useState(false);

//   const customStyles = {
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//     },
//   };

//   // Modal.setAppElement(<CloseIcon />);

//   const handleExitClick = () => {
//     setShowModal(true);
//   };

//   const handleModalAction = (confirmed) => {
//     if (confirmed) {
//       navigate("/");
//     }
//     setShowModal(false);
//   };

//   return (
//     <DesktopCloseIconContainer>
//       <ExitButton onClick={handleExitClick}>
//         <CloseIcon />
//       </ExitButton>

//       <Modal open={showModal} onClose={() => handleModalAction(false)}>
//         <Modal.Body>Are you sure you want to end this consultation?</Modal.Body>
//         <Modal.Footer>
//           <Button onClick={() => handleModalAction(false)} light>
//             Cancel
//           </Button>
//           <Button onClick={() => handleModalAction(true)}>
//             End consultation
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </DesktopCloseIconContainer>
//   );
// };

// export default DesktopViewCloseIcon;
