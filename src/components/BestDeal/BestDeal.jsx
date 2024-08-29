import React, { useState } from "react";
import "./BestDeal.css";
import ScheduleVisitBtn from "../ScheduleVisitBtn/ScheduleVisitBtn";
import { propertyData } from "../../assets/propertyData";

const BestDeal = () => {
  const [propertyType, setPropertyType] = useState("Appartement");

  function selectPropertyType(type) {
    setPropertyType(type);
  }

  const currentProperty = propertyData[propertyType];

  return (
    <div className="best-deal">
      <div className="best-deal-container">
        <p className="deal-badge">| Best Deal</p>
        <div className="deal-header">
          <div className="deal-title">
            <h1>
              Find Your Best <br /> Deal Right Now!
            </h1>
          </div>
          <div className="property-types">
            {Object.keys(propertyData).map((type) => (
              <button
                key={type}
                className={propertyType === type ? "property-type active" : "property-type"}
                onClick={() => selectPropertyType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        {currentProperty && (
          <div className="deal-content">
            <div className="property-details">
              <div className="detail-item">
                <span>Total Flat Space</span>
                <span className="detail-value">{currentProperty.space}</span>
              </div>
              <hr />
              <div className="detail-item">
                <span>Floor number</span>
                <span className="detail-value">{currentProperty.floor}</span>
              </div>
              <hr />
              <div className="detail-item">
                <span>Number of rooms</span>
                <span className="detail-value">{currentProperty.rooms}</span>
              </div>
              <hr />
              <div className="detail-item">
                <span>Parking Available</span>
                <span className="detail-value">{currentProperty.parking}</span>
              </div>
              <hr />
              <div className="detail-item">
                <span>Payment Process</span>
                <span className="detail-value">{currentProperty.payment}</span>
              </div>
            </div>
            <div className="property-image">
              <img src={currentProperty.image} alt="Property" />
            </div>
            <div className="extra-info">
              <h3>{currentProperty.extraInfoTitle}</h3>
              {currentProperty.extraInfo.map((info, index) => (
                <p key={index}>{info}</p>
              ))}
              <ScheduleVisitBtn style={{ width: "170px" }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestDeal;
