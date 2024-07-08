import React, { Component } from "react";
import Custom404 from "../../pages/Error404Page";
import Logger from "../Logger/Logger";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    Logger(error, errorInfo);
  }

  render() {
    if (this.state.hasError)
      return <ErrorFallback />;

    return this.props.children;
  }
}

function ErrorFallback() {
  const handleGoHome = () => {
    window.location.replace("/initSession");
  };

  return (<Custom404 onButtonClick={() => handleGoHome} />);
}

export default ErrorBoundary;
