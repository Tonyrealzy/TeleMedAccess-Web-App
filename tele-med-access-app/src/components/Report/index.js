import Consultation from "./Consultation";
import Header from "../Heading/Header";

const Report = ({ reportData }) => {
  const { report } = reportData;
  return (
    <>
      <Header phase="Your report" percentage={0} />
      <Consultation report={report} />
    </>
  );
};

export default Report;
