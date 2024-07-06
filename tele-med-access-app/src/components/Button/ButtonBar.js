import React from "react";
import classNames from "classnames";
import { Button } from ".";
import {
  ButtonBarContainer,
  ButtonBackgroundDiv,
  BackButtonChevron,
} from "./button.styles";

import ChevronLeft from "../../media/chevron-left.svg";


export const ButtonBar = ({
  disabled,
  onClick,
  buttonText,
  backButtonShow = false,
  handleBackButton,
}) => (
  <ButtonBackgroundDiv>
    <ButtonBarContainer
      className={classNames({ "button-container": backButtonShow })}
    >
      {backButtonShow && handleBackButton && (
        <Button
          disabled={false}
          onClick={handleBackButton}
          className={classNames({
            "flex-button": backButtonShow,
            "back-button": backButtonShow,
          })}
        >
          <BackButtonChevron
            src={ChevronLeft}
            height={15}
            width={15}
            alt="back chevron"
          />
          Back
        </Button>
      )}
      <Button
        disabled={disabled}
        onClick={onClick}
        className={classNames({ "flex-button": backButtonShow })}
      >
        {buttonText}
      </Button>
    </ButtonBarContainer>
  </ButtonBackgroundDiv>
);

export default ButtonBar;
