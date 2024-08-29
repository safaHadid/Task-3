import React from 'react';
import PropertyCard from '../PropertyCard/PropertyCard';
import './Properties.css'; // Ensure this CSS is applied


const Properties = () => {
  return (
    <div className='properties-container'>
      <div className="properties-content">
      <div className="properties-tag">| PROPERTIES</div>
          <div className="properties-title">
            We Provide The <br /> Best Property <br /> You Like
          </div>
      </div>
      <div className="properties-row">
        <PropertyCard 
          className="property-item"
          image='/assets/property-01.jpg'
          price="$2.264.000"
          type="Luxury Villa"
          name="18 New Street Miami, OR 97219"
          bedrooms={8}
          bathrooms={8}
          area="545m2"
          floor={3}
          parking={6}
        />
        <PropertyCard 
          className="property-item"
          image='/assets/property-02.jpg'
          price="$1.180.000"
          type="Luxury Villa"
          name="54 Mid Street Florida, OR 27001"
          bedrooms={6}
          bathrooms={5}
          area="450m2"
          floor={3}
          parking={8}
        />
        <PropertyCard 
          className="property-item"
          image='/assets/property-03.jpg'
          price="$1.460.000"
          type="Luxury Villa"
          name="26 Old Street Miami, OR 38540"
          bedrooms={5}
          bathrooms={4}
          area="225m2"
          floor={3}
          parking={10}
        />
      </div>
      <div className="properties-row">
        <PropertyCard 
          className="property-item"
          image='/assets/property-04.jpg'
          price="$2.264.000"
          type="Luxury Villa"
          name="18 New Street Miami, OR 97219"
          bedrooms={8}
          bathrooms={8}
          area="545m2"
          floor={3}
          parking={6}
        />
        <PropertyCard 
          className="property-item"
          image='/assets/property-05.jpg'
          price="$1.180.000"
          type="Luxury Villa"
          name="54 Mid Street Florida, OR 27001"
          bedrooms={6}
          bathrooms={5}
          area="450m2"
          floor={3}
          parking={8}
        />
        <PropertyCard 
          className="property-item"
          image='/assets/property-06.jpg'
          price="$1.460.000"
          type="Luxury Villa"
          name="26 Old Street Miami, OR 38540"
          bedrooms={5}
          bathrooms={4}
          area="225m2"
          floor={3}
          parking={10}
        />
      </div>
    </div>
  );
}

export default Properties;
