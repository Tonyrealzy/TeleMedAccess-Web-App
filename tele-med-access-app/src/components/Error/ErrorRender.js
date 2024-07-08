import React from 'react';
import styled from "styled-components";
import erropic from "../../assets/error/error1.jpg";
import { useNavigate } from "react-router-dom";

export const ErrorContainer = styled.div`
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

export const ErrorContentContainer = styled.div`
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

export const ErrorContent = styled.div`
  flex: 1;
  padding: 10px;

  @media screen and (max-width: 768px) {
    order: 2;
    padding: 20px;
    text-align: center;
  }
`;

export const ErrorImage = styled.div`
  flex: 1;
  padding: 10px;
  width: 80%;

  @media screen and (max-width: 768px) {
    order: 1;
    padding: 20px;
    height: auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

export const Title = styled.h3`
  font-size: 9rem;
    margin: 0 auto;
  color: #ffffff; /* Adjust this to match your --color-text variable */

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #ffffff; /* Adjust this to match your --color-text variable */
  margin: 10px 0;
  padding-bottom: 25px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const Button = styled.button`
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