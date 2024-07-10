import React from "react";
import {
  ExitButton,
  ProgressBar,
  ProgressBarWrapper,
  StatusBarInner,
  StatusBarTitle,
  StatusBarWrapper,
  ExitButtonContainer,
} from "./statusBar.styles";
import DesktopViewCloseIcon from "./desktopViewCloseIcon";

const StatusBar = ({ phase = "", percentage = 0 }) => {  

  return (
    <StatusBarWrapper>
      <StatusBarInner>
        <StatusBarTitle>{phase}</StatusBarTitle>
        {percentage > 0 && (
          <ProgressBarWrapper>
            <ProgressBar percentage={percentage} />
          </ProgressBarWrapper>
        )}

      </StatusBarInner>
    </StatusBarWrapper>
  );
};

export default StatusBar;
