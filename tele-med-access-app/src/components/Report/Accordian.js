import { useEffect, useState } from "react";
import { AccordianSummary, Content } from "./report.styles";
import Heading from "../Heading";
import AddIcon from "../../media/add-icon.svg";
import SubtractIcon from "../../media/subtract-icon.svg";

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
            <img
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
