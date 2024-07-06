import React from "react";
import Consultation from "./Consultation";
import { Header } from "../Header";

const Report = ({ reportData, logo }) => {
  const { report } = reportData;
  return (
    <>
      <Header phase="Your report" percentage={0} logo={logo} />
      <Consultation report={report} />
    </>
  );
};

export default Report;
