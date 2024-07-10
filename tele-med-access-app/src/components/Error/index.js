import React, { Component } from "react";
import Logger from "../Logger/Logger";
import {
  ErrorContainer,
  ErrorContentContainer,
  ErrorContent,
  ErrorImage,
  Image,
  Title,
  Description,
  ButtonContainer,
  Button,
} from "./ErrorRender";
import ErrorPic from "./error1.jpg";


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
              <Description>Oops! An error occurred here!!!</Description>
              <Description>
                We're sorry the page you requested could not be found. Please click on the button below to reload the previous page or the homepage.
              </Description>
              <ButtonContainer>
                <Button onClick={() => {window.location.replace('/')}} fullwidth="true">
                  Start a new symptom checker
                </Button>
              </ButtonContainer>
            </ErrorContent>
            <ErrorImage>
              <Image src={ErrorPic} alt="Error illustration" />
            </ErrorImage>
          </ErrorContentContainer>
        </ErrorContainer>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
