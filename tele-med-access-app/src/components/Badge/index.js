import React from "react";
import EmergencyBadge from "../../media/emergency-badge.svg";
import UrgentBadge from "../../media/urgent-badge.svg";
import NoOutcomeBadge from "../../media/nooutcome-badge.svg";
import SelfcareBadge from "../../media/selfcare-badge.svg";
import RoutineBadge from "../../media/routine-badge.svg";
import { Wrapper } from "./badge.styles";
import classNames from "classnames";

const iconsMap = {
  danger: EmergencyBadge,
  warning: UrgentBadge,
  "no-outcome": NoOutcomeBadge,
  success: SelfcareBadge,
  info: RoutineBadge,
};

const Badge = ({ kind }) => {
  const Icon = iconsMap[kind];

  return (
    <Wrapper className={classNames({ [`kind-${kind}`]: kind })}>
      {Icon && <img src={Icon} width={20} alt={kind} />}
    </Wrapper>
  );
};

export default Badge;
