import { useEffect, useState } from "react";
import { Content, AccordianSummary } from "./ReportStyles";
import Heading from "../Heading";

import AddIcon from "../../assets/svgs/add-icon.svg";
import SubtractIcon from "../../assets/svgs/subtract-icon.svg";

const Accordian = ({ header, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [componentLoaded, setComponentLoaded] = useState(false);

  // This component was throwing a hydration error relating
  // to next/image component. With more time I'd fix it
  // but this is a workaround given tight deadlines
  useEffect(() => {
    setComponentLoaded(true);
  }, []);

  const handleClick = () => setIsOpen(!isOpen);
  return (
    <>
      {componentLoaded && (
        <>
          <AccordianSummary onClick={handleClick}>
            <Heading as="h2" kind="report">
              {header}
            </Heading>
            <image
              src={isOpen ? SubtractIcon : AddIcon}
              alt={isOpen ? "close" : "open"}
            />
          </AccordianSummary>
          {isOpen && <Content>{children}</Content>}
        </>
      )}
    </>
  );
};

export default Accordian;
