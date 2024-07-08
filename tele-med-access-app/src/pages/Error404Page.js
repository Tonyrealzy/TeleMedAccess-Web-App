import React from "react";
import styled from "styled-components";
import erropic from "../assets/error/error1.jpg";
import { useNavigate } from "react-router-dom";

const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
  background-image: radial-gradient(
    circle,
    #576cbc,
    #475ea8,
    #385194,
    #294480,
    #19376d
  );
`;

const ErrorContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  max-width: 1000px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ErrorContent = styled.div`
  flex: 1;
  padding: 10px;

  @media screen and (max-width: 768px) {
    order: 2;
    padding: 20px;
    text-align: center;
  }
`;

const ErrorImage = styled.div`
  flex: 1;
  padding: 10px;
  width: 80%;

  @media screen and (max-width: 768px) {
    order: 1;
    padding: 20px;
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Title = styled.h3`
  font-size: 9rem;
    margin: 0 auto;
  color: #ffffff; /* Adjust this to match your --color-text variable */

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #ffffff; /* Adjust this to match your --color-text variable */
  margin: 10px 0;
  padding-bottom: 25px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px 15px;
  font-size: 1rem;
  color: #ffffff; /* Adjust this to match your --color-text variable */
  background-color: transparent;
  border: 2px solid #ffffff; /* Adjust this to match your --color-text variable */
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #576cbc;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
    font-size: 1rem;
  }
`;

export default function Custom404() {
  const navigate = useNavigate();

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
            <Button onClick={() => navigate("/")} fullwidth="true">
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
}
