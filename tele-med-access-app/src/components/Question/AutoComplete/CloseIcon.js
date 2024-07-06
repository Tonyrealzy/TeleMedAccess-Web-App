import React from "react";

export const CloseIcon = () => {
  return (
    <>
      <div style={{ height: "20px", width: "20px" }}>
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </>
  );
};
export default CloseIcon;
