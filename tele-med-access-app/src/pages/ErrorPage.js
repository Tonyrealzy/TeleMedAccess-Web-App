import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../pages/styles/ErrorPage.css";
import erropic from "../assets/error/error1.jpg"

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error">
      <div className="error-container">
        <div className="error-content">
          <h3 className="error-title">404</h3>
          <p className="error-description">Oops!!! Page Not Found</p>
          <p className="error-description">
            We're sorry the page you requested could not be found.
            Please go back to the previous page or the homepage.
          </p>
          <div className="error-links">
            <span className="error-back">
              <Link to={navigate(-1)}>Back</Link>
            </span>
            <span className="error-home">
              <Link to="/">Homepage</Link>
            </span>
          </div>
        </div>
        <div className="error-image">
          <img src={erropic} alt="Error illustration" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
