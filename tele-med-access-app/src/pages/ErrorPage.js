import React from "react";
import { useNavigate, Link } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Error 404 Page</h3>
      <p>
        An error occured here! Click <Link to={navigate(-1)}>here</Link> to go back!!!
      </p>
    </div>
  );
};

export default ErrorPage;
