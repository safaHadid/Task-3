import React, { useState } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './PropertiesPage.css';
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import { properties } from '../../assets/properties';
import Footer from '../../components/Footer/Footer';

const PropertiesPage = () => {
  const propertyTypes = ['Show All', 'Apartment', 'Luxury Villa', 'Penthouse'];
  const [selectedType, setSelectedType] = useState('Show All');

  function selectPropertyType(type) {
    setSelectedType(type);
  }

  // Filter properties based on selected type
  const filteredProperties = selectedType === 'Show All'
    ? properties
    : properties.filter(property => property.type.toLowerCase() === selectedType.toLowerCase());

  return (
    <>
    <div className='properties-page'>
      <PageHeader title="HOME / PROPERTIES" text="PROPERTIES" />
      <div className="properties-btns">
        {
          propertyTypes.map((type, index) => (
            <button
              key={index}
              className={selectedType === type ? "property-type active" : "property-type"}
              onClick={() => selectPropertyType(type)}
            >
              {type}
            </button>
          ))
        }
      </div>
      <div className="properties-row">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            className="property-item"
            image={property.imageUrl}
            price={property.price}
            type={property.type}
            name={property.address}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            area={property.area}
            floor={property.floor}
            parking={property.parking}
            style={{ marginBottom: '30px' }}
          />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default PropertiesPage;
