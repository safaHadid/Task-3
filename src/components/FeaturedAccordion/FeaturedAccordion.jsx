import React, { useState } from 'react';
import './FeaturedAccordion.css';

const FeaturedAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="FeaturedAccordion">
      <div className="accordion-item">
        <div
          className={activeIndex == 0 ? "accordion-header active-text" : "accordion-header"}
          onClick={() => toggleAccordion(0)}
        >
          Best useful links ?
        </div>
        {activeIndex === 0 && (
          <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        )}
      </div>
      <div className="accordion-item">
        <div
          className={activeIndex == 1 ? "accordion-header active-text" : "accordion-header"}
          onClick={() => toggleAccordion(1)}
        >
          How does this work ?
        </div>
        {activeIndex === 1 && (
          <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
        )}
      </div>
      <div className="accordion-item">
        <div
          className={activeIndex == 2 ? "accordion-header active-text" : "accordion-header"}
          onClick={() => toggleAccordion(2)}
        >
          Why is Villa Agency the best ?
        </div>
        {activeIndex === 2 && (
          <div className="accordion-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedAccordion;
