import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <a class="nav-link footer-nav" onClick={toggleAccordion}>
        <strong>{title}</strong>
      </a>
      {isOpen && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;