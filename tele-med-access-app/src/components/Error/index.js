import React, { Component } from "react";
import Logger from "../Logger/Logger";
import {
  ErrorContainer,
  ErrorContentContainer,
  ErrorContent,
  Title,
  Description,
  ButtonContainer,
  Button,
} from "./ErrorRender";

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
      return (
        <ErrorContainer>
          <ErrorContentContainer>
            <ErrorContent>
              <Title>404</Title>
              <Description>Oops!!! Page Not Found</Description>
              <Description>
                We're sorry the page you requested could not be found. Please go
                back to the previous page or the homepage.
              </Description>
              <ButtonContainer>
                <Button onClick={() => {window.location.replace('/')}} fullwidth="true">
                  Start a new symptom checker
                </Button>
              </ButtonContainer>
            </ErrorContent>
            <ErrorImage>
              <Image src={erropic} alt="Error illustration" />
            </ErrorImage>
          </ErrorContentContainer>
        </ErrorContainer>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
