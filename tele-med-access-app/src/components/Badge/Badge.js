import React from "react";
import UrgentBadge from "../../assets/svgs/urgent-badge.svg";
import NoOutcomeBadge from "../../assets/svgs/nooutcome-badge.svg";
import SelfcareBadge from "../../assets/svgs/selfcare-badge.svg";
import RoutineBadge from "../../assets/svgs/routine-badge.svg";
import EmergencyBadge from "../../assets/svgs/emergency-badge.svg";

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
    <section className={{[`kind-${kind}`]: kind}}>
      {Icon && <image src={Icon} width={20} alt={kind} />}
    </section>
  );
};

export default Badge;
