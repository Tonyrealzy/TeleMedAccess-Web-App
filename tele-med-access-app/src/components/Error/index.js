import React, { Component } from "react";
import Custom404 from "../../pages/Error404Page";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <Custom404 />;

    return this.props.children;
  }
}

export default ErrorBoundary;
