import React from "react";
import "./Featured.css";
import FeaturedAccordion from "../FeaturedAccordion/FeaturedAccordion";
import FeatureItem from "../FeaturedItem/FeaturedItem";

const Featured = () => {
  return (
    <div className="featured-container">
      <div className="featured-left">
        <div className="featured-img-wrapper">
          <img src='/assets/featured.jpg' alt="Featured" className="featured-img" />
          <img src='/assets/featured-icon.png' alt="Icon" className="featured-icon" />
        </div>
      </div>

      <div className="featured-center">
        <p className="featured-tag">| FEATURED</p>
        <h1 className="featured-title">
          Best <br /> Appartment & <br /> Sea View
        </h1>
          <FeaturedAccordion />
      </div>

      <div className="featured-right">
        <FeatureItem
          icon='/assets/info-icon-01.png'
          title="250 m2"
          description="Total Flat Space"
        />
        <hr />
        <FeatureItem
          icon='/assets/info-icon-02.png'
          title="Contract"
          description="Contract Ready"
        />
        <hr />
        <FeatureItem
          icon='/assets/info-icon-03.png'
          title="Payment"
          description="Payment Process"
        />
        <hr />
        <FeatureItem
          icon='/assets/info-icon-04.png'
          title="Safety"
          description="24/7 Under Control"
        />
      </div>
    </div>
  );
};


export default Featured;
