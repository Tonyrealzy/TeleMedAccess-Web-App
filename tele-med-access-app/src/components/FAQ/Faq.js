import React, { useState } from "react";
import "./Faq.css";
import Lists from "./content.js";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <div className="container">
        {Lists.map((data, i) => (
          <div className="faq-item" key={i}>
            <div className="faq-title" onClick={() => toggleFAQ(i)}>
              <h3>{data.question}</h3>
              <span>{openIndex === i ? "-" : "+"}</span>
            </div>
            {openIndex === i && (
              <div className="faq-content">
                <p>{data.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
