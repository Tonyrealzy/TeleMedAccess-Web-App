import React from "react";
import PropTypes from "prop-types";
import "./PrimaryButton.css";

const PrimaryButton = ({ children, onClick, size, disabled }) => {
  return (
    <button
      className={`primary-button primary-button--${size}`}
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
};


export default PrimaryButton;
