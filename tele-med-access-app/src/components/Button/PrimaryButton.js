import React from "react";
import PropTypes from "prop-types";
import "./PrimaryButton.css";

const PrimaryButton = ({ children, onClick, size, disabled, id }) => {
  return (
    <button
      className={`primary-button primary-button--${size}`}
      id={id}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  id: PropTypes.string
};


export default PrimaryButton;
