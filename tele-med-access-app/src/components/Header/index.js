import React from "react";
import { StickyHeader } from "../Display/display.styles";
import Logo from "../Logo";
import StatusBar from "../StatusBar";

export const Header = ({ phase, percentage = 0 }) => (
  <>
    <StickyHeader>
      <StatusBar phase={phase} percentage={percentage} />
    </StickyHeader>
    {/* {logo && <Logo logo={logo} />} */}
  </>
);
